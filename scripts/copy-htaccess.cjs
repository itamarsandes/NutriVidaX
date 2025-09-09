// Copies public/.htaccess to dist/.htaccess after Vite build
// Works on Windows, macOS, and Linux
const fs = require('fs');
const path = require('path');

const projectRoot = __dirname + '/..';
const src = path.join(projectRoot, 'public', '.htaccess');
const destDir = path.join(projectRoot, 'dist');
const dest = path.join(destDir, '.htaccess');

try {
  if (!fs.existsSync(src)) {
    console.warn('[copy-htaccess] public/.htaccess não encontrado; nada para copiar');
    process.exit(0);
  }
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  fs.copyFileSync(src, dest);
  console.log('[copy-htaccess] Copiado para dist/.htaccess');
} catch (err) {
  console.error('[copy-htaccess] Falha ao copiar .htaccess:', err.message);
  process.exit(1);
}
