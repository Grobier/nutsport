#!/usr/bin/env node
/**
 * Bundle Size Checker
 * Verifica que los bundles no excedan los presupuestos definidos
 *
 * Uso: node scripts/check-bundle-size.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { promisify } from 'util';
import zlib from 'zlib';

const gzip = promisify(zlib.gzip);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

// Presupuestos (en bytes)
const BUDGETS = {
  'index-*.js': { limit: 100 * 1024, type: 'gzip', level: 'error' },
  'index-*.css': { limit: 10 * 1024, type: 'gzip', level: 'warning' },
  '*.js': { limit: 500 * 1024, type: 'raw', level: 'warning' }
};

const COLORS = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  green: '\x1b[32m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m'
};

function log(message, color = 'reset') {
  console.log(`${COLORS[color]}${message}${COLORS.reset}`);
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

async function getGzipSize(filePath) {
  const content = await fs.promises.readFile(filePath);
  const compressed = await gzip(content);
  return compressed.length;
}

async function checkFile(filePath, budget) {
  const stats = await fs.promises.stat(filePath);
  const rawSize = stats.size;
  const size = budget.type === 'gzip' ? await getGzipSize(filePath) : rawSize;

  const fileName = path.basename(filePath);
  const percentage = ((size / budget.limit) * 100).toFixed(1);
  const status = size <= budget.limit ? '✅' : (budget.level === 'error' ? '❌' : '⚠️');

  const sizeStr = budget.type === 'gzip'
    ? `${formatBytes(size)} gzip (${formatBytes(rawSize)} raw)`
    : formatBytes(size);

  const limitStr = formatBytes(budget.limit);

  if (size > budget.limit) {
    const color = budget.level === 'error' ? 'red' : 'yellow';
    log(`${status} ${fileName}`, color);
    log(`   Tamaño: ${sizeStr}`, color);
    log(`   Límite: ${limitStr}`, color);
    log(`   Exceso: ${percentage}% del límite`, color);
    return { pass: false, level: budget.level };
  } else {
    log(`${status} ${fileName}`, 'green');
    log(`   Tamaño: ${sizeStr} (${percentage}% del límite)`, 'green');
  }

  return { pass: true, level: 'ok' };
}

async function main() {
  log('\n📊 Verificando presupuesto de bundle size...\n', 'bold');

  const distPath = path.join(projectRoot, 'dist', 'assets');

  if (!fs.existsSync(distPath)) {
    log('❌ Directorio dist/assets no encontrado. Ejecuta npm run build primero.', 'red');
    process.exit(1);
  }

  const files = await fs.promises.readdir(distPath);
  let hasErrors = false;
  let hasWarnings = false;

  // Agrupar archivos por tipo
  const jsFiles = files.filter(f => f.endsWith('.js'));
  const cssFiles = files.filter(f => f.endsWith('.css'));

  // Verificar index principal
  log('📦 Bundle Principal:', 'cyan');
  for (const file of jsFiles) {
    if (file.match(/^index-.*\.js$/)) {
      const result = await checkFile(
        path.join(distPath, file),
        BUDGETS['index-*.js']
      );
      if (!result.pass) {
        if (result.level === 'error') hasErrors = true;
        if (result.level === 'warning') hasWarnings = true;
      }
    }
  }

  // Verificar CSS
  log('\n🎨 CSS:', 'cyan');
  for (const file of cssFiles) {
    if (file.match(/^index-.*\.css$/)) {
      const result = await checkFile(
        path.join(distPath, file),
        BUDGETS['index-*.css']
      );
      if (!result.pass && result.level === 'warning') hasWarnings = true;
    }
  }

  // Verificar otros chunks
  log('\n📦 Lazy Chunks:', 'cyan');
  for (const file of jsFiles) {
    if (!file.match(/^index-.*\.js$/)) {
      const result = await checkFile(
        path.join(distPath, file),
        BUDGETS['*.js']
      );
      if (!result.pass && result.level === 'warning') hasWarnings = true;
    }
  }

  // Resumen
  log('\n' + '='.repeat(60), 'cyan');
  if (hasErrors) {
    log('❌ FALLO: Presupuesto de bundle excedido (errores críticos)', 'red');
    log('   → Reduce el tamaño del bundle antes de hacer deploy', 'red');
    process.exit(1);
  } else if (hasWarnings) {
    log('⚠️  ADVERTENCIA: Algunos archivos exceden el presupuesto recomendado', 'yellow');
    log('   → Considera optimizar estos archivos', 'yellow');
    process.exit(0);
  } else {
    log('✅ ÉXITO: Todos los archivos dentro del presupuesto', 'green');
    process.exit(0);
  }
}

main().catch(err => {
  log(`❌ Error: ${err.message}`, 'red');
  process.exit(1);
});
