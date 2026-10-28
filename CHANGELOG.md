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

