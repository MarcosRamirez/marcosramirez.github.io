/**
 * Notas de una release de GitHub, recortadas de `CHANGELOG.md`.
 *
 * Uso: node scripts/release-notes.mjs 2.7.0 > notas.md
 *
 * El registro es la única fuente: si la sección no existe, falla en vez de
 * publicar una release vacía.
 */

import { readFileSync } from 'node:fs';

const version = process.argv[2];

if (!version) {
  console.error('Falta la versión: node scripts/release-notes.mjs 2.7.0');
  process.exit(1);
}

const path = new URL('../CHANGELOG.md', import.meta.url);
const lines = readFileSync(path, 'utf8').split(/\r?\n/);

const start = lines.findIndex((line) => line.startsWith(`## [${version}]`));

if (start === -1) {
  console.error(`No hay sección para la ${version} en CHANGELOG.md`);
  process.exit(1);
}

let end = lines.findIndex((line, index) => index > start && line.startsWith('## ['));

if (end === -1) end = lines.length;

const body = lines.slice(start + 1, end).join('\n').trim();

process.stdout.write(`${body}\n`);
