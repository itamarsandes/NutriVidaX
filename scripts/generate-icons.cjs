/* Gera ícones PNG (32/48/180/192/512) para favicons e apple-touch a partir de uma imagem base. */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function ensureDir(p) {
  await fs.promises.mkdir(p, { recursive: true }).catch(() => {});
}

async function main() {
  const root = path.resolve(__dirname, '..');
  const outDir = path.join(root, 'public', 'favicons');
  await ensureDir(outDir);

  // Candidatos de imagem base (o primeiro existente será usado)
  const candidates = [
    path.join(root, 'imagens dos produtos', 'Nutrividax.png'),
    path.join(root, 'Logo Nutri.png'),
    path.join(root, 'imagens dos produtos', 'Logo 40x40.png'),
  ];

  const src = candidates.find((p) => fs.existsSync(p));
  if (!src) {
    console.error('Não encontrei uma imagem base (Nutrividax.png, Logo Nutri.png, etc.).');
    process.exit(1);
  }

  const targets = [
    { size: 32, name: 'favicon-32x32.png' },
    { size: 48, name: 'favicon-48x48.png' },
    { size: 180, name: 'apple-touch-icon.png' },
    { size: 192, name: 'android-chrome-192x192.png' },
    { size: 512, name: 'android-chrome-512x512.png' },
  ];

  for (const t of targets) {
    const out = path.join(outDir, t.name);
    await sharp(src).resize(t.size, t.size).png({ compressionLevel: 9 }).toFile(out);
    console.log('Gerado:', path.relative(root, out));
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
