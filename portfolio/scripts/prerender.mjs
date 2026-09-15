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
  if (!markup.includes('Azrul') || !markup.includes('id="projects"')) {
    throw new Error('Prerender did not produce the portfolio content.');
  }
  await writeFile('dist/index.html', template.replace('<div id="root"></div>', `<div id="root">${markup}</div>`));
} finally {
  if (!resolve(directory).startsWith(`${resolve(process.cwd())}${sep}.prerender-`)) {
    throw new Error('Refusing to clean up a directory outside the build workspace.');
  }
  await rm(directory, { recursive: true, force: true });
}

