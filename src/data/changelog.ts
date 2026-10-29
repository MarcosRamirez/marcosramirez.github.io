/**
 * Registro de cambios que renderiza `/changelog`.
 * La versión más reciente va primero y debe coincidir con `package.json`.
 * El espejo en Markdown para el repositorio es `CHANGELOG.md`.
 */

export type ChangeKind = 'Añadido' | 'Cambiado' | 'Corregido' | 'Quitado';

export interface ChangeGroup {
  kind: ChangeKind;
  items: string[];
}

export interface Release {
  version: string;
  /** Fecha ISO, sin horas: la formatea la página. */
  date: string;
  note?: string;
  groups: ChangeGroup[];
}

export const releases: Release[] = [
  {
    version: '2.10.0',
    date: '2026-10-29',
    note: 'El Expediente X cuenta cómo está hecho todo.',
    groups: [
      {
        kind: 'Añadido',
        items: [
          'Expediente X: sección «Para qué», que lo une a la lucha por el primer puesto.',
          'Expediente X: la cadena completa del dictado al deploy (agente, Impeccable, versión, PR y release).',
          'Expediente X: dos errores nuevos en «Dónde se equivocó», el CSS cacheado y las releases huérfanas.',
        ],
      },
      {
        kind: 'Cambiado',
        items: [
          'Expediente X: titular «Cómo está hecho todo» y meta descripción nueva.',
          'Expediente X: datos fijos que se quedaban viejos («11.804 líneas») cambiados por hechos que no caducan.',
        ],
      },
    ],
  },
  {
    version: '2.9.0',
    date: '2026-10-29',
    note: 'La lucha por el primer puesto.',
    groups: [
      {
        kind: 'Añadido',
        items: [
          'Expedientes 02 (el piloto) y 03 (el youtuber), con página propia en /piloto y /youtuber.',
          'Caja «La lucha por el primer puesto» en los expedientes, con el actual marcado.',
        ],
      },
      {
        kind: 'Cambiado',
        items: [
          'La portada cuenta la lucha por recuperar el primer puesto en Google: el índice junto a la ficha pasa a ser la lucha, en el orden ingeniero, piloto, youtuber, libro e IA.',
          'La novela pasa a ser el expediente 04, «el libro».',
          'Regalos, contacto, Lucía y el registro pasan a ser anexos (A–D) y salen del índice.',
        ],
      },
    ],
  },
  {
    version: '2.8.3',
    date: '2026-10-29',
    note: 'El CSS llega con cada versión.',
    groups: [
      {
        kind: 'Corregido',
        items: ['Los cambios de estilo llegan con el deploy, sin recarga forzada: la hoja se pide con la versión en la URL.'],
      },
    ],
  },
  {
    version: '2.8.2',
    date: '2026-10-29',
    note: 'El bloque del menú se desliza.',
    groups: [
      {
        kind: 'Cambiado',
        items: [
          'El bloque encendido del menú se desliza de la sección actual al enlace con hover o foco, invirtiendo las letras a su paso.',
        ],
      },
    ],
  },
  {
    version: '2.8.1',
    date: '2026-10-29',
    note: 'Un solo bloque encendido en el menú.',
    groups: [
      {
        kind: 'Corregido',
        items: [
          'Al pasar por otra sección, la actual pasa a contorno y el bloque se muda al hover: ya no hay dos encendidas.',
          'Foco de teclado visible en los enlaces del menú.',
        ],
      },
    ],
  },
  {
    version: '2.8.0',
    date: '2026-10-29',
    note: 'SEO: el sitio se presenta con su dominio de verdad.',
    groups: [
      { kind: 'Añadido', items: ['Sitemap generado en cada build (/sitemap-index.xml).', 'robots.txt con enlace al sitemap.'] },
      {
        kind: 'Corregido',
        items: [
          'Canonical y og:url apuntan a marcosramirez.info en vez de localhost.',
          'Imagen para redes sociales: el avatar sustituye a una imagen que no existía.',
          'Los enlaces externos llevan rel="noopener" y nofollow solo cuando se pide.',
        ],
      },
      { kind: 'Quitado', items: ['Enlace a un feed RSS que no existía.', 'Componente ImageText sin uso.'] },
    ],
  },
  {
    version: '2.7.4',
    date: '2026-10-28',
    note: 'Corrección de lenguaje: «En línea» en el registro.',
    groups: [{ kind: 'Cambiado', items: ['«En pie» pasa a «En línea» en /changelog.'] }],
  },
  {
    version: '2.7.3',
    date: '2026-10-28',
    note: 'Corrección de lenguaje: «El ordenador hace cosas solo» y líneas de código totales.',
    groups: [{ kind: 'Cambiado', items: ['«El ordenador hace cosas solas» → «El ordenador hace cosas solo».', '11.804 líneas de código en vez de CSS.'] }],
  },
  {
    version: '2.7.2',
    date: '2026-10-28',
    note: 'Expediente X en el índice.',
    groups: [{ kind: 'Cambiado', items: ['Expediente X añadido al índice de expedientes.'] }],
  },
  {
    version: '2.7.1',
    date: '2026-10-28',
    note: 'Ficha -> Expediente: todo el sitio habla el mismo lenguaje que el Expediente X.',
    groups: [
      {
        kind: 'Cambiado',
        items: [
          'Todas las etiquetas de ficha pasan a expediente (01-06 y el bloque de la portada).',
          'El registro y la pagina /inteligencia-artificial usan el mismo nombre.',
          'La historia del sitio pasa al registro como prehistoria leida de git.',
        ],
      },
    ],
  },
  {
    version: '2.7.0',
    date: '2026-10-28',
    note: 'Expediente X: la página que cuenta cómo se hizo este fichero, y el cierre en el sitio profesional.',
    groups: [
      {
        kind: 'Añadido',
        items: [
          'Página /inteligencia-artificial: de un ordenador que abría puertas en 1969 a un agente escribiendo el CSS.',
          'Expediente X en la portada, con su bloque al final de la serie.',
          'Cierre del expediente con marcosramirez.dev: el mismo oficio, pero facturando.',
          'Registro: «Antes de las versiones», los commits anteriores leídos de git en cada compilación.',
          'Releases de GitHub: cada versión nueva se publica con las notas de este registro.',
        ],
      },
      {
        kind: 'Cambiado',
        items: [
          'Menú con [IA] y tecla F4 en el pie.',
          'El registro enlaza a la página: cómo se hizo esta versión.',
          'La película se cuenta por lo que hace el ordenador —abrir, cerrar, llamar a la tienda—, sin el minuto 1:10.',
        ],
      },
    ],
  },
  {
    version: '2.5.0',
    date: '2026-10-28',
    note: 'Los años de oficio se calculan solos: 1988 y 1992 ya no son números escritos a mano.',
    groups: [
      {
        kind: 'Añadido',
        items: [
          'Componente Years y src/data/career.ts: cuentan los años desde 1988 y desde 1992, y se recalculan en el navegador si el build envejece.',
        ],
      },
      {
        kind: 'Cambiado',
        items: [
          'Cabecera del expediente: fuera «España», y ahora dice cuántos años llevo picando código y cuántos ganando pasta con ello.',
          'Las descripciones y el apartado «Oficio» de Sobre mí dejan de llevar los 25 años escritos a mano.',
        ],
      },
    ],
  },
  {
    version: '2.4.0',
    date: '2026-10-28',
    note: 'Sobre mí abre con la historia y la película queda como anécdota al final.',
    groups: [
      {
        kind: 'Cambiado',
        items: [
          'Sobre mí: «Historia» va primero, y «La película que me marcó» pasa al final, contada como anécdota.',
        ],
      },
    ],
  },
  {
    version: '2.3.3',
    date: '2026-10-28',
    note: 'El subtítulo de Sobre mí arranca con el título: «Un informático cuyo…».',
    groups: [
      {
        kind: 'Cambiado',
        items: [
          'Entradilla de Sobre mí: empieza por «un informático», como el título, en vez de por el primer recuerdo.',
        ],
      },
    ],
  },
  {
    version: '2.3.2',
    date: '2026-10-28',
    note: 'Las BBS entran en la historia, y con ellas el blog.',
    groups: [
      {
        kind: 'Añadido',
        items: [
          'Historia: usuario de BBS entre 1985 y 1995, punto de Europa BBS, y la entrada en la Warez Scene vía Chiba City.',
        ],
      },
    ],
  },
  {
    version: '2.3.1',
    date: '2026-10-28',
    note: 'La historia de Sobre mí, con el HTML de 1992 y los doscientos dominios.',
    groups: [
      {
        kind: 'Añadido',
        items: [
          'Historia: los CGI en Perl de 1992 y, en 1995, PHP, MySQL y las webs de afiliado hasta unos doscientos dominios.',
        ],
      },
      {
        kind: 'Corregido',
        items: ['La coma tras «minuto 1:10» ya no abre línea en el móvil.'],
      },
    ],
  },
  {
    version: '2.3.0',
    date: '2026-10-28',
    note: 'Los cajones pasan a ser expedientes, y el 01 que faltaba ya está.',
    groups: [
      {
        kind: 'Añadido',
        items: [
          'Expediente 01 — el ingeniero: la serie de la portada ya no salta del 00 al 02.',
        ],
      },
      {
        kind: 'Cambiado',
        items: [
          '«Cajón» pasa a «expediente» en el índice, los bloques y la página de error.',
          'El bloque 00 se llama «el porqué», que cabe en una línea en el móvil.',
        ],
      },
    ],
  },
  {
    version: '2.2.2',
    date: '2026-10-28',
    note: 'Título más largo para la búsqueda y ocupación reordenada.',
    groups: [
      {
        kind: 'Cambiado',
        items: [
          'Título de la portada: «Marcos Ramírez — Ingeniero informático · IA, web y cloud», en vez de 36 caracteres.',
          'Ocupación en el expediente: inteligencia artificial, desarrollo web y cloud computing, en ese orden.',
          'Palabras clave con inteligencia artificial y cloud computing.',
        ],
      },
    ],
  },
  {
    version: '2.2.1',
    date: '2026-10-28',
    note: 'Un cambio de palabra en el expediente.',
    groups: [
      {
        kind: 'Cambiado',
        items: [
          '«25 años de oficio» pasa a «25 años picando código», en el expediente y en la descripción.',
        ],
      },
    ],
  },
  {
    version: '2.2.0',
    date: '2026-10-28',
    note: 'Una sola numeración: lo que dice el índice es lo que dice la página.',
    groups: [
      {
        kind: 'Cambiado',
        items: [
          'Expedientes renumerados: autor 01, novela 02, regalos 03 y contacto 04.',
          'Bloques de la portada en orden ascendente: 00, 02, 03 y 04.',
          '«El nombre en la búsqueda» con puesto, quién y si es Marcos, en vez de etiquetas sueltas.',
          'Índice de cajones: «Tres cajones, un solo ingeniero».',
        ],
      },
    ],
  },
  {
    version: '2.1.0',
    date: '2026-10-28',
    note: 'La cabecera deja de tener nombre de ficción: el chip es el nombre.',
    groups: [
      {
        kind: 'Cambiado',
        items: [
          'Chip de la cabecera con «MARCOS RAMÍREZ» y subtítulo «ingeniero informático».',
          'El subtítulo de la marca cabe hasta 1100 px, antes se ocultaba en 1360.',
          'Titular «Escríbeme, no muerdo» también en la página de contacto.',
          'Línea de terminal de /changelog: marcos@marcosramirez.info.',
        ],
      },
      {
        kind: 'Quitado',
        items: [
          'Rótulo «FICHERO» de la cabecera: una etiqueta de ficción que nadie necesitaba.',
          'Enlace «[INICIO]» del menú: el nombre del chip ya lleva a la portada.',
        ],
      },
    ],
  },
  {
    version: '2.0.1',
    date: '2026-10-28',
    note: 'Correcciones de texto tras la primera revisión del rediseño.',
    groups: [
      {
        kind: 'Cambiado',
        items: [
          'Campo «Materia» renombrado a «Ocupación», con inteligencia artificial en el perfil.',
          'Titular del cajón de contacto: «Escríbeme, no muerdo».',
        ],
      },
    ],
  },
  {
    version: '2.0.0',
    date: '2026-10-28',
    note: 'Primera versión con registro. El sitio anterior no tenía número: la serie 2.0.0–2.4.0 se numeró al cerrar el rediseño, en una sola tanda, así que comparte fecha y no tiene un commit por versión.',
    groups: [
      {
        kind: 'Añadido',
        items: [
          'Expediente de catálogo sobre fósforo P1 y tres cajones numerados.',
          'Página de registro de cambios, enlazada desde el sello.',
          'Sello con la versión SemVer del sitio.',
          'Barrido vertical de fósforo, como el de un monitor de verdad.',
        ],
      },
      {
        kind: 'Cambiado',
        items: [
          'Rediseño completo: tipografía, retícula, cabecera, pie y formularios.',
          '«Ingeniero informático» en el expediente, el título, la descripción y los datos.',
          'Cajón 00 reescrito: el piloto es de Moto2 y el único que soy yo es el que firma.',
          'Menú móvil accesible con teclado y modal sin recargar el vídeo al cerrar.',
        ],
      },
      {
        kind: 'Corregido',
        items: [
          'Hover de la marca: el chip invierte y el subtítulo deja de ser ilegible.',
          'Hover de los enlaces del pie, que quedaban en fósforo sobre fósforo.',
          'Barra de navegación recortada entre 1024 y 1300 px.',
        ],
      },
      {
        kind: 'Quitado',
        items: ['Metadatos inventados: signatura, terminal numerada y biblioteca ficticia.'],
      },
    ],
  },
];
