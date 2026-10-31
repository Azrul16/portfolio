import { build } from 'vite';
import react from '@vitejs/plugin-react';
import { readFile, writeFile, mkdtemp, rm } from 'node:fs/promises';
import { join, resolve, sep } from 'node:path';
import { pathToFileURL } from 'node:url';
import { PurgeCSS } from 'purgecss';

// Keep the temporary bundle under this package so external imports resolve.
const directory = await mkdtemp(join(process.cwd(), '.prerender-'));
try {
  await build({
    configFile: false,
    plugins: [react()],
    ssr: { noExternal: ['react-countup', 'countup.js', 'react-parallax-tilt'] },
    build: { ssr: 'src/entry-server.jsx', outDir: directory, minify: true, assetsInlineLimit: 0 },
  });
  const { render } = await import(pathToFileURL(join(directory, 'entry-server.js')));
  let template = await readFile('dist/index.html', 'utf8');
  const markup = await render();
  const stylesheet = template.match(/<link rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/);
  if (stylesheet) {
    const css = await readFile(join('dist', stylesheet[1]), 'utf8');
    const [{ css: usedStyles }] = await new PurgeCSS().purge({
      content: ['index.html', 'src/**/*.{jsx,js}'],
      css: [{ raw: css }],
      safelist: [/^status-/, /^ring-/, /^aurora-/, /^starfield-/, /^wave-flow-/],
    });
    template = template.replace(stylesheet[0], `<style>${usedStyles}</style>`);
    console.log(`Production CSS: ${css.length} → ${usedStyles.length} bytes before compression`);
  }
  // Fail deployment if lazy sections stop rendering into crawlable HTML.
  for (const id of ['home', 'projects', 'skills', 'about', 'education', 'certificates', 'contact']) {
    if (!markup.includes(`id="${id}"`)) {
      throw new Error(`Prerender is missing the ${id} section.`);
    }
  }
  const headings = [...markup.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/g)];
  if (headings.length !== 1 || !headings[0][1].replace(/<[^>]+>/g, '').includes('Azrul Amaline')) {
    throw new Error('The portfolio must have one primary heading containing the full name.');
  }
  const canonicalUrl = 'https://azrul.is-a.dev/';
  const canonicalLinks = [...template.matchAll(/<link\s+rel="canonical"\s+href="([^"]+)"/g)];
  if (canonicalLinks.length !== 1 || canonicalLinks[0][1] !== canonicalUrl) {
    throw new Error('The canonical URL must match the production domain.');
  }
  const schemas = [...template.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .map((match) => JSON.parse(match[1]));
  const person = schemas.find((schema) => schema['@type'] === 'Person');
  const profile = schemas.find((schema) => schema['@type'] === 'ProfilePage');
  if (!person?.['@id'] || profile?.mainEntity?.['@id'] !== person['@id']) {
    throw new Error('ProfilePage structured data must identify the portfolio owner.');
  }
  const [robots, sitemap, domain] = await Promise.all([
    readFile('dist/robots.txt', 'utf8'),
    readFile('dist/sitemap.xml', 'utf8'),
    readFile('dist/CNAME', 'utf8'),
  ]);
  if (!robots.includes(`Sitemap: ${canonicalUrl}sitemap.xml`) ||
      !sitemap.includes(`<loc>${canonicalUrl}</loc>`) ||
      domain.trim() !== new URL(canonicalUrl).hostname) {
    throw new Error('Crawler discovery files must match the canonical domain.');
  }
  await writeFile('dist/index.html', template.replace('<div id="root"></div>', `<div id="root">${markup}</div>`));
} finally {
  if (!resolve(directory).startsWith(`${resolve(process.cwd())}${sep}.prerender-`)) {
    throw new Error('Refusing to clean up a directory outside the build workspace.');
  }
  await rm(directory, { recursive: true, force: true });
}

