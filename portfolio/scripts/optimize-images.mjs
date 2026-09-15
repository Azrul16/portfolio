import { readdir } from 'node:fs/promises';
import sharp from 'sharp';

await sharp('src/assets/images/logo/logo.png')
  .resize({ width: 512, withoutEnlargement: true }).webp({ quality: 90 })
  .toFile('public/assets/brand/splash-logo.webp');

for (const width of [480, 640, 800]) {
  await sharp('src/assets/images/photo/azrullll.jpeg')
    .resize({ width, withoutEnlargement: true }).avif({ quality: 55, effort: 6 })
    .toFile(`src/assets/images/photo/portrait-${width}.avif`);
}

await sharp('src/assets/images/logo/logo.png').resize(32, 32).png()
  .toFile('public/assets/brand/favicon-32.png');
await sharp('src/assets/images/logo/logo.png').resize(180, 180).png()
  .toFile('public/assets/brand/apple-touch-icon.png');

await sharp('src/assets/images/photo/azrullll.jpeg')
  .resize({ width: 800, withoutEnlargement: true }).webp({ quality: 82 })
  .toFile('src/assets/images/photo/portrait.webp');
await sharp('src/assets/images/logo/logo.png')
  .resize({ width: 160, withoutEnlargement: true }).webp({ quality: 85 })
  .toFile('src/assets/images/logo/logo.webp');
await sharp('src/assets/images/logo/logo.png')
  .resize({ width: 80, withoutEnlargement: true }).webp({ quality: 85 })
  .toFile('src/assets/images/logo/logo-80.webp');

// Keep the original certificates for the full-resolution viewer.
for (const file of await readdir('public/assets/certificates')) {
  if (!file.endsWith('.png')) continue;
  await sharp(`public/assets/certificates/${file}`)
    .resize({ width: 640, withoutEnlargement: true }).webp({ quality: 82 })
    .toFile(`public/assets/certificates/${file.replace('.png', '.webp')}`);
  await sharp(`public/assets/certificates/${file}`)
    .resize({ width: 1400, withoutEnlargement: true }).webp({ quality: 88 })
    .toFile(`public/assets/certificates/${file.replace('.png', '-preview.webp')}`);
}
