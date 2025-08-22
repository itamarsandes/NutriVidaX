const fs = require('fs');
const path = require('path');
const mod = require('png-to-ico');
const pngToIco = mod.default || mod;

async function main() {
  const root = path.resolve(__dirname, '..');
  const favDir = path.join(root, 'public', 'favicons');
  const inputs = [
    path.join(favDir, 'favicon-16x16.png'),
    path.join(favDir, 'favicon-32x32.png'),
    path.join(favDir, 'favicon-48x48.png'),
  ].filter((p) => fs.existsSync(p));

  if (inputs.length === 0) {
    console.error('PNG(s) de favicon não encontrados em public/favicons. Rode: npm run icons');
    process.exit(1);
  }

  try {
    const ico = await pngToIco(inputs);
    const outPath = path.join(root, 'public', 'favicon.ico');
    fs.writeFileSync(outPath, ico);
    console.log('favicon.ico gerado em', outPath);
  } catch (err) {
    console.error('Erro ao gerar favicon.ico:', err);
    process.exit(1);
  }
}

main();
