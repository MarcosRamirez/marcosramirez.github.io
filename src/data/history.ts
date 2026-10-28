import { execFileSync } from 'node:child_process';

/**
 * Historia del repositorio anterior al registro de versiones.
 *
 * Se lee de `git` en cada compilación, no se escribe a mano: si el histórico
 * cambia, la página cambia. En un clon superficial (o sin git) devuelve una
 * lista vacía y el registro simplemente no pinta la sección.
 */

export interface Commit {
  hash: string;
  short: string;
  /** ISO corto: 2021-03-14. */
  date: string;
  subject: string;
}

export interface CommitYear {
  year: string;
  commits: Commit[];
}

/** Separadores de campo y de registro: no aparecen en un asunto de commit. */
const FIELD = '\u001f';
const RECORD = '\u001e';

function git(args: string[]): string | null {
  try {
    return execFileSync('git', args, {
      encoding: 'utf8',
      maxBuffer: 16 * 1024 * 1024,
      stdio: ['ignore', 'pipe', 'ignore'],
    });
  } catch {
    return null;
  }
}

export function getPrehistory(): CommitYear[] {
  // El commit que estrenó el registro: todo lo anterior es prehistoria.
  const born = git(['log', '--diff-filter=A', '--format=%H', '--', 'src/data/changelog.ts']);
  const firstHash = born
    ?.split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .pop();

  if (!firstHash) return [];

  const raw = git([
    'log',
    '--no-merges',
    '--date=short',
    `--pretty=format:%H${FIELD}%h${FIELD}%ad${FIELD}%s${RECORD}`,
    `${firstHash}^`,
  ]);

  if (!raw) return [];

  const commits: Commit[] = raw
    .split(RECORD)
    .map((record) => record.replace(/^\n/, ''))
    .filter(Boolean)
    .flatMap((record) => {
      const [hash, short, date, subject] = record.split(FIELD);
      if (!hash || !short || !date || !subject) return [];
      return [{ hash, short, date, subject }];
    });

  const years = new Map<string, Commit[]>();
  for (const commit of commits) {
    const year = commit.date.slice(0, 4);
    const bucket = years.get(year) ?? [];
    bucket.push(commit);
    years.set(year, bucket);
  }

  return [...years.entries()].map(([year, list]) => ({ year, commits: list }));
}
