/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// `src/data/history.ts` lee el histórico con `git` en tiempo de compilación.
// El proyecto no instala @types/node, así que se declara solo lo que se usa.
declare module 'node:child_process' {
  interface ExecFileOptions {
    encoding?: 'utf8';
    maxBuffer?: number;
    stdio?: readonly string[];
  }

  export function execFileSync(
    file: string,
    args?: readonly string[],
    options?: ExecFileOptions
  ): string;
}
