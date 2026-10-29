---
name: versionado
description: Sube la versión SemVer del sitio, escribe la entrada del registro de cambios y mantiene sincronizados package.json, CHANGELOG.md, el sello de la ficha y /changelog. Úsala antes de cerrar cualquier cambio visible (textos, estilos, páginas, bugs).
---

### ⚠️ REGLAS OBLIGATORIAS
- **`package.json` es la única fuente de verdad** de la versión.
- **NUNCA** escribas números de versión a mano en componentes, páginas ni CSS: el sello lee `src/version.ts`.
- **NUNCA** repitas una versión ni bajes de la anterior.
- **NUNCA** cierres un cambio visible sin subir versión.
- **NUNCA** hagas commit ni push sin aprobación expresa de Marcos.

### Quién decide el número
**El asistente.** No se pregunta a Marcos, no se le ofrecen opciones y no se le
devuelve la pelota: se elige el número, se dice cuál y por qué, y se aplica. Si
pregunta «¿2.0.2 o 2.1.0?», la respuesta es la decisión ya tomada, no una encuesta.

### Qué número toca
- **MAJOR** (`3.0.0`): rediseño o cambio de identidad.
- **MINOR** (`2.1.0`): página nueva, bloque nuevo o **cambio de navegación o estructura**.
- **PATCH** (`2.0.1`): corrección de texto, estilo o bug.

Casos ya resueltos, para no volver a dudar:

| Cambio | Nivel |
| --- | --- |
| Añadir o quitar un enlace del menú | MINOR |
| Cambiar a qué lleva un elemento de navegación | MINOR |
| Renombrar una sección, reordenar bloques | MINOR |
| Página o ruta nueva | MINOR |
| Cambiar la función de la marca de la cabecera | MINOR |
| Copy, titulares, etiquetas de campo | PATCH |
| Colores, tipografía, espaciados, breakpoints | PATCH |
| Bug de maquetación o de hover | PATCH |
| Tirar el sistema visual y hacer otro | MAJOR |

Los cambios de solo documentación (`CHANGELOG.md`, `AGENTS.md`, esta skill) **no** suben versión.

**Todo cambio en `public/styles.css` sube versión, sin excepción.** La hoja se pide
como `/styles.css?v=<versión>` y Cloudflare la cachea 4 horas: sin versión nueva,
los visitantes reciben el HTML nuevo con la hoja vieja.

### Desempate
Ante la duda entre dos niveles, **se elige el mayor**. Quedarse corto es el error
que ya se cometió: una versión publicada con cambios dentro que no le tocaban.

### Cuándo se sube
**En el mismo turno que el cambio.** No al final, no «luego lo junto», no en la
siguiente respuesta. Un cambio visible entregado sin entrada de versión es trabajo
a medias aunque el código esté perfecto.

Regla de cierre: cuando la respuesta dice «hecho», la versión ya está escrita. Si
ya diste el turno por cerrado y llega otro cambio visible, toca **versión nueva**,
aunque no haya commit ni despliegue.

### Procedimiento
1. Decidir MAJOR, MINOR o PATCH (tú, no Marcos).
2. Subir `version` en `package.json` (SemVer estricto: `MAJOR.MINOR.PATCH`, sin `v`).
3. Añadir la release **al principio** de `releases` en `src/data/changelog.ts`
   (`version`, `date` en ISO, `note` opcional, grupos `Añadido`/`Cambiado`/`Corregido`/`Quitado`).
4. Reflejar la misma entrada, en el mismo orden, en `CHANGELOG.md`.
5. Ejecutar `npm run version:check`: debe salir en verde.
6. Comprobar que el sello de la portada muestra `Versión 2.X.X` y que `/changelog`
   marca esa versión como «En línea».

### Una entrada por tanda
Una tanda de trabajo, una versión: los cambios que se entregan en el mismo turno
comparten entrada y se suman a ella, porque el turno aún no estaba cerrado.
En cuanto la respuesta dice «hecho», esa versión queda sellada: lo siguiente es
un número nuevo, aunque no haya commit.

### Una versión, un commit
Cada versión va en **su propio commit**, con el código, `package.json` y las dos
entradas del registro de esa versión y de ninguna otra. Así cada versión tiene
un commit que la representa, y la release apunta a él.

- Si se juntan varias versiones sin commitear, se separan antes de integrar:
  un commit por versión, en orden, y en cada uno `npm run version:check` en verde.
- El mensaje termina en `; versión X.Y.Z`
  (`fix(nav): 🐛 Corregido doble bloque en el menú; versión 2.8.1`).
- Se trabaja en una rama (`fix/…`, `feat/…`), se abre un PR contra `main` y se
  integra con **merge commit** (`gh pr merge --merge --delete-branch`), **nunca
  squash ni rebase**: el squash funde las versiones en un commit y las
  intermedias se quedan sin release; el rebase reescribe los commits y la
  release apuntaría a uno que ya no está en `main`.
- Al hacer push a `main`, `.github/workflows/release.yml` publica una release
  de GitHub por **cada** versión de `CHANGELOG.md` posterior al último tag,
  sobre el commit que la puso en `package.json`. Si un merge trae tres versiones,
  salen tres releases.

### Formato de los cambios
- Español, pasado participio, una línea por cambio («Corregido el hover de la marca»).
- Sin fechas relativas («hoy», «ayer»): siempre ISO en `date`, la página la formatea.
- Lo que se quita no se borra del historial: se anota en `Quitado`.
- Nada inventado: solo lo que de verdad cambió en el repositorio.

### Archivos implicados
- `package.json` — versión.
- `src/version.ts` — la expone como `SITE_VERSION`.
- `src/layouts/Layout.astro` — pide `/styles.css?v={SITE_VERSION}` para romper la caché.
- `src/data/changelog.ts` — lo que renderiza `/changelog`.
- `CHANGELOG.md` — espejo en Markdown para el repositorio.
- `src/pages/index.astro` — sello `Versión {SITE_VERSION}` con enlace a `/changelog`.
- `scripts/check-version.mjs` — comprueba las tres copias.
