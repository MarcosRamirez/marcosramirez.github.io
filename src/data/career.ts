/**
 * Los años de oficio se calculan, no se escriben: si el sitio pasa meses sin
 * reconstruirse, el número no se queda viejo.
 */

/** Año en que aprendí a programar. */
export const CODING_SINCE = 1988;

/** Año en que empecé a cobrar por programar. */
export const WORKING_SINCE = 1992;

/** Años transcurridos desde `from`, contando el año en curso. */
export function yearsSince(from: number, now: Date = new Date()): number {
  return Math.max(0, now.getFullYear() - from);
}

export const yearsCoding = yearsSince(CODING_SINCE);
export const yearsWorking = yearsSince(WORKING_SINCE);
