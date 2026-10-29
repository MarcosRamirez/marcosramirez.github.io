# Changelog

Todo lo que cambia en este sitio, versión a versión. Formato basado en
[Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/) y versionado
[SemVer](https://semver.org/lang/es/).

La versión vive en `package.json` y es la que muestra el sello del expediente.
Este archivo es el espejo en Markdown de `src/data/changelog.ts`, que es lo que
renderiza `/changelog`: si cambia uno, cambia el otro.

**MAJOR** rediseño o cambio de identidad · **MINOR** página nueva, bloque nuevo o
cambio de navegación y estructura · **PATCH** corrección de texto, estilo o bug. Los
cambios de documentación no suben versión.

## [2.11.0] - 2026-10-29

El ingeniero cuenta cómo perdió el primer puesto.

### Añadido

- Expediente 01: sección «El primer puesto», que cuenta cómo lo perdí y enlaza a los rivales.

### Cambiado

- Expediente 01: retoques de texto («Después vinieron», «ultraprocesado», «póker»).

### Quitado

- Expediente 01: el «Más información pronto» del lateral, que prometía y no daba.

## [2.10.0] - 2026-10-29

El Expediente X cuenta cómo está hecho todo.

### Añadido

- Expediente X: sección «Para qué», que lo une a la lucha por el primer puesto.
- Expediente X: la cadena completa del dictado al deploy (agente, Impeccable, versión, PR y release).
- Expediente X: dos errores nuevos en «Dónde se equivocó», el CSS cacheado y las releases huérfanas.

### Cambiado

- Expediente X: titular «Cómo está hecho todo» y meta descripción nueva.
- Expediente X: datos fijos que se quedaban viejos («11.804 líneas») cambiados por hechos que no caducan.

## [2.9.0] - 2026-10-29

La lucha por el primer puesto.

### Añadido

- Expedientes 02 (el piloto) y 03 (el youtuber), con página propia en /piloto y /youtuber.
- Caja «La lucha por el primer puesto» en los expedientes, con el actual marcado.

### Cambiado

- La portada cuenta la lucha por recuperar el primer puesto en Google: el índice junto a la ficha pasa a ser la lucha, en el orden ingeniero, piloto, youtuber, libro e IA.
- La novela pasa a ser el expediente 04, «el libro».
- Regalos, contacto, Lucía y el registro pasan a ser anexos (A–D) y salen del índice.

## [2.8.3] - 2026-10-29

El CSS llega con cada versión.

### Corregido

- Los cambios de estilo llegan con el deploy, sin recarga forzada: la hoja se pide con la versión en la URL.

## [2.8.2] - 2026-10-29

El bloque del menú se desliza.

### Cambiado

- El bloque encendido del menú se desliza de la sección actual al enlace con hover o foco, invirtiendo las letras a su paso.

## [2.8.1] - 2026-10-29

Un solo bloque encendido en el menú.

### Corregido

- Al pasar por otra sección, la actual pasa a contorno y el bloque se muda al hover: ya no hay dos encendidas.
- Foco de teclado visible en los enlaces del menú.

## [2.8.0] - 2026-10-29

SEO: el sitio se presenta con su dominio de verdad.

### Añadido

- Sitemap generado en cada build (/sitemap-index.xml).
- robots.txt con enlace al sitemap.

### Corregido

- Canonical y og:url apuntan a marcosramirez.info en vez de localhost.
- Imagen para redes sociales: el avatar sustituye a una imagen que no existía.
- Los enlaces externos llevan rel="noopener" y nofollow solo cuando se pide.

### Quitado

- Enlace a un feed RSS que no existía.
- Componente ImageText sin uso.

## [2.7.4]

Corrección de lenguaje: «En línea» en el registro.

### Cambiado

- «En pie» pasa a «En línea» en /changelog.

## [2.7.3] - 2026-10-28

Corrección de lenguaje y registro.

### Cambiado

- «El ordenador hace cosas solas» → «El ordenador hace cosas solo».
- «Hoja de estilo» → 11.804 líneas de código totales.

## [2.7.2] - 2026-10-28

Expediente X en el índice, con todo el sitio en expediente.

### Cambiado

- Expediente X añadido al índice de expedientes (X).
- Ficha → Expediente completado: 01–06, portada y registro.

## [2.7.1] - 2026-10-28

Ficha → Expediente: todo el sitio habla el mismo lenguaje que el Expediente X.

### Cambiado

- Todas las etiquetas de ficha pasan a expediente (01–06 y el bloque de la portada).
- El registro y la página /inteligencia-artificial usan el mismo nombre.
- La historia del sitio pasa al registro como prehistoria leída de git en cada compilación.

## [2.7.0] - 2026-10-28

Expediente X: la página que cuenta cómo se hizo este fichero, y el cierre en el sitio profesional.

### Añadido

- Página /inteligencia-artificial: de un ordenador que abría puertas en 1969 a un agente escribiendo el CSS.
- Expediente X en la portada, con su bloque al final de la serie.
- Cierre del expediente con marcosramirez.dev: el mismo oficio, pero facturando.
- Registro: «Antes de las versiones», los commits anteriores leídos de git en cada compilación.
- Releases de GitHub: cada versión nueva se publica con las notas de este registro.

### Cambiado

- Menú con [IA] y tecla F4 en el pie.
- El registro enlaza a la página: cómo se hizo esta versión.
- La película se cuenta por lo que hace el ordenador —abrir, cerrar, llamar a la tienda—, sin el minuto 1:10.

## [2.5.0] - 2026-10-28

Los años de oficio se calculan solos: 1988 y 1992 ya no son números escritos a mano.

### Añadido

- Componente Years y src/data/career.ts: cuentan los años desde 1988 y desde 1992, y se recalculan en el navegador si el build envejece.

### Cambiado

- Cabecera de el expediente: fuera «España», y ahora dice cuántos años llevo picando código y cuántos ganando pasta con ello.
- Las descripciones y el apartado «Oficio» de Sobre mí dejan de llevar los 25 años escritos a mano.

## [2.4.0] - 2026-10-28

Sobre mí abre con la historia y la película queda como anécdota al final.

### Cambiado

- Sobre mí: «Historia» va primero, y «La película que me marcó» pasa al final, contada como anécdota.

## [2.3.3] - 2026-10-28

El subtítulo de Sobre mí arranca con el título: «Un informático cuyo…».

### Cambiado

- Entradilla de Sobre mí: empieza por «un informático», como el título, en vez de por el primer recuerdo.

## [2.3.2] - 2026-10-28

Las BBS entran en la historia, y con ellas el blog.

### Añadido

- Historia: usuario de BBS entre 1985 y 1995, punto de Europa BBS, y la entrada en la Warez Scene vía Chiba City.

## [2.3.1] - 2026-10-28

La historia de Sobre mí, con el HTML de 1992 y los doscientos dominios.

### Añadido

- Historia: los CGI en Perl de 1992 y, en 1995, PHP, MySQL y las webs de afiliado hasta unos doscientos dominios.

### Corregido

- La coma tras «minuto 1:10» ya no abre línea en el móvil.

## [2.3.0] - 2026-10-28

Los cajones pasan a ser expedientes, y el 01 que faltaba ya está.

### Añadido

- Expediente 01 — el ingeniero: la serie de la portada ya no salta del 00 al 02.

### Cambiado

- «Cajón» pasa a «expediente» en el índice, los bloques y la página de error.
- El bloque 00 se llama «el porqué», que cabe en una línea en el móvil.

## [2.2.2] - 2026-10-28

Título más largo para la búsqueda y ocupación reordenada.

### Cambiado

- Título de la portada: «Marcos Ramírez — Ingeniero informático · IA, web y cloud», en vez de 36 caracteres.
- Ocupación en el expediente: inteligencia artificial, desarrollo web y cloud computing, en ese orden.
- Palabras clave con inteligencia artificial y cloud computing.

## [2.2.1] - 2026-10-28

Un cambio de palabra en el expediente.

### Cambiado

- «25 años de oficio» pasa a «25 años picando código», en el expediente y en la descripción.

## [2.2.0] - 2026-10-28

Una sola numeración: lo que dice el índice es lo que dice la página.

### Cambiado

- Expedientes renumeradas: autor 01, novela 02, regalos 03 y contacto 04.
- Bloques de la portada en orden ascendente: 00, 02, 03 y 04.
- «El nombre en la búsqueda» con puesto, quién y si es Marcos, en vez de etiquetas sueltas.
- Índice de cajones: «Tres cajones, un solo ingeniero».

## [2.1.0] - 2026-10-28

La cabecera deja de tener nombre de ficción: el chip es el nombre.

### Cambiado

- Chip de la cabecera con «MARCOS RAMÍREZ» y subtítulo «ingeniero informático».
- El subtítulo de la marca cabe hasta 1100 px, antes se ocultaba en 1360.
- Titular «Escríbeme, no muerdo» también en la página de contacto.
- Línea de terminal de /changelog: marcos@marcosramirez.info.

### Quitado

- Rótulo «FICHERO» de la cabecera: una etiqueta de ficción que nadie necesitaba.
- Enlace «[INICIO]» del menú: el nombre del chip ya lleva a la portada.

## [2.0.1] - 2026-10-28

Correcciones de texto tras la primera revisión del rediseño.

### Cambiado

- Campo «Materia» renombrado a «Ocupación», con inteligencia artificial en el perfil.
- Titular del cajón de contacto: «Escríbeme, no muerdo».

## [2.0.0] - 2026-10-28

Primera versión con registro. El sitio anterior no tenía número: la serie 2.0.0–2.4.0 se numeró al cerrar el rediseño, en una sola tanda, así que comparte fecha y no tiene un commit por versión.

### Añadido

- Expediente de catálogo sobre fósforo P1 y tres cajones numerados.
- Página de registro de cambios, enlazada desde el sello.
- Sello con la versión SemVer del sitio.
- Barrido vertical de fósforo, como el de un monitor de verdad.

### Cambiado

- Rediseño completo: tipografía, retícula, cabecera, pie y formularios.
- «Ingeniero informático» en el expediente, el título, la descripción y los datos.
- Cajón 00 reescrito: el piloto es de Moto2 y el único que soy yo es el que firma.
- Menú móvil accesible con teclado y modal sin recargar el vídeo al cerrar.

### Corregido

- Hover de la marca: el chip invierte y el subtítulo deja de ser ilegible.
- Hover de los enlaces del pie, que quedaban en fósforo sobre fósforo.
- Barra de navegación recortada entre 1024 y 1300 px.

### Quitado

- Metadatos inventados: signatura, terminal numerada y biblioteca ficticia.

