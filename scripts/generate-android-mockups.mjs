import sharp from 'sharp';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

// Pinned source revisions keep the portfolio artwork reproducible.
const sources = JSON.parse(await readFile(new URL('./android-mockups.sources.json', import.meta.url)));
const svg = (body, width, height) => Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">${body}</svg>`);

async function phone(source) {
  const screen = await sharp(source).resize(360, 800, { fit: 'contain', background: '#ffffff' }).png().toBuffer();
  const body = svg('<rect x="5" y="2" width="386" height="894" rx="48" fill="#17191f" stroke="#68707d" stroke-width="3"/><rect x="1" y="170" width="5" height="92" rx="2" fill="#68707d"/><rect x="390" y="185" width="5" height="55" rx="2" fill="#68707d"/><rect x="17" y="14" width="362" height="872" rx="36" fill="#fff"/>', 396, 900);
  const hardware = svg('<circle cx="198" cy="33" r="8" fill="#101218"/><circle cx="198" cy="33" r="3" fill="#29303e"/><rect x="148" y="865" width="100" height="4" rx="2" fill="#20232a"/>', 396, 900);
  return sharp(body).composite([{ input: screen, left: 18, top: 54 }, { input: hardware }]).png().toBuffer();
}

const requestedSlug = process.argv[2];
if (requestedSlug && !sources.some((project) => project.slug === requestedSlug)) {
  throw new Error(`Unknown project slug: ${requestedSlug}`);
}
for (const project of sources.filter((project) => !requestedSlug || project.slug === requestedSlug)) {
  const directory = new URL(`../src/assets/images/projects/${project.slug}/`, import.meta.url);
  await mkdir(directory, { recursive: true });
  const frames = new Map();
  for (const path of project.files) {
    const response = await fetch(`https://raw.githubusercontent.com/Azrul16/${project.repo}/${project.ref}/${path}`);
    if (!response.ok) throw new Error(`${path}: HTTP ${response.status}`);
    const name = path.split('/').pop().replace('.png', '');
    const frame = await phone(Buffer.from(await response.arrayBuffer()));
    frames.set(name, frame);
    await writeFile(new URL(`${name}.webp`, directory), await sharp(frame).webp({ quality: 88 }).toBuffer());
  }
  const background = svg(`<defs><radialGradient id="glow"><stop stop-color="${project.color}" stop-opacity=".23"/><stop offset="1" stop-color="#12101c"/></radialGradient></defs><rect width="1440" height="1080" fill="#12101c"/><ellipse cx="720" cy="510" rx="800" ry="650" fill="url(#glow)"/><ellipse cx="720" cy="990" rx="570" ry="34" fill="#06050b" opacity=".55"/>`, 1440, 1080);
  const layers = await Promise.all(project.hero.map(async (name, index) => ({ input: await sharp(frames.get(name)).resize(index === 1 ? 396 : 350).png().toBuffer(), left: [120, 522, 970][index], top: index === 1 ? 62 : 140 })));
  await sharp(background).composite(layers).webp({ quality: 88 }).toFile(fileURLToPath(new URL('android-showcase.webp', directory)));
  console.log(`${project.repo}: ${frames.size} Android mockups and showcase generated`);
}
