/**
 * La lucha por el primer puesto en Google: los cinco expedientes en el orden
 * de la historia. Lo leen el índice de la portada y la caja lateral de cada
 * expediente (`CaseIndex.astro`), así que el orden y los números viven aquí.
 */

export interface Case {
  /** Número del expediente tal como se pinta: 01, 02… o X. */
  n: string;
  title: string;
  href: string;
  /** Su papel en la historia, en una línea. */
  status: string;
  /** El único que soy yo. */
  own?: boolean;
}

export const cases: Case[] = [
  { n: '01', title: 'El ingeniero', href: '/sobre-mi', status: 'Era el primero', own: true },
  { n: '02', title: 'El piloto', href: '/piloto', status: 'Moto2 · me quitó el puesto' },
  { n: '03', title: 'El youtuber', href: '/youtuber', status: 'Vídeo · se coló detrás' },
  { n: '04', title: 'El libro', href: '/novela-carlos-luis-fallas', status: 'Fallas, 1952 · el rival más viejo' },
  { n: 'X', title: 'La IA', href: '/inteligencia-artificial', status: 'Cómo está hecho todo' },
];
