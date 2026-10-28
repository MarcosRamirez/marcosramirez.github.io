import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const formal = /^\d+\.\d+\.\d+$/;

const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'));
const version = String(pkg.version);
const problems = [];

if (!formal.test(version)) {
  problems.push(`package.json: «${version}» no es SemVer estricto (MAJOR.MINOR.PATCH).`);
}

const markdown = readFileSync(join(root, 'CHANGELOG.md'), 'utf8');
const mdVersion = markdown.match(/^##\s*\[(\d+\.\d+\.\d+)\]/m)?.[1];

if (!mdVersion) {
  problems.push('CHANGELOG.md: no encuentro ninguna entrada «## [x.y.z]».');
} else if (mdVersion !== version) {
  problems.push(`CHANGELOG.md empieza en ${mdVersion} y package.json dice ${version}.`);
}

const data = readFileSync(join(root, 'src/data/changelog.ts'), 'utf8');
const dataVersion = data.match(/version:\s*'(\d+\.\d+\.\d+)'/)?.[1];

if (!dataVersion) {
  problems.push('src/data/changelog.ts: no encuentro ninguna release.');
} else if (dataVersion !== version) {
  problems.push(`src/data/changelog.ts empieza en ${dataVersion} y package.json dice ${version}.`);
}

if (problems.length > 0) {
  console.error('✗ Versión desincronizada:');
  problems.forEach((problem) => console.error(`  · ${problem}`));
  process.exit(1);
}

console.log(`✓ ${version} sincronizada en package.json, CHANGELOG.md y src/data/changelog.ts.`);
