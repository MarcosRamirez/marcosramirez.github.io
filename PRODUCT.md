# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Tres públicos llegan al mismo dominio, casi siempre desde una búsqueda en Google del nombre "Marcos Ramírez":

- **Reclutadores y clientes potenciales.** Evalúan a Marcos profesionalmente. Necesitan entender en segundos quién es, qué lleva haciendo desde 1988, y contactar o reservar una llamada sin fricción.
- **Lectores que buscan la novela.** Llegan buscando "Marcos Ramírez", la novela de Carlos Luis Fallas. Quieren sinopsis fiable y un enlace para comprar o leerla.
- **Amigos y familia.** Buscan ideas de regalo de cumpleaños o cotillean la vida del dueño del dominio.

El tráfico orgánico manda: la mayoría de visitas son desconocidos que llegan por el nombre y deciden en segundos si esto es lo que buscaban.

## Product Purpose

Dominio personal de Marcos Ramírez, ingeniero informático español que programa desde 1988. Existe para que quien busque su nombre encuentre a la persona real —perfil, historia, contacto, la novela homónima— antes que a los homónimos (el piloto de Moto2, el youtuber, el personaje de novela).

Éxito significa tres cosas a la vez: rankear por encima de los otros Marcos Ramírez, generar contactos profesionales reales, y que el autor esté orgulloso de enseñarla.

## Positioning

Una sola URL resuelve todo lo que alguien puede buscar bajo el nombre "Marcos Ramírez": el ingeniero, el lector de la novela y el amigo que quiere hacer un regalo. Ningún homónimo puede cubrir las tres cosas, y ninguna página genérica de portfolio lo intenta.

## Operating Context

- La visita típica empieza en Google con el nombre, en móvil o escritorio, sin contexto previo.
- El autor no usa redes sociales (incluido LinkedIn como canal activo) y no quiere que el sitio dependa de ellas.
- Contenido en español, en primera persona, escrito por el propio Marcos.
- Sitio estático en GitHub Pages, deploy automático desde `main`.
- La página de la novela es el activo SEO de más volumen y monetiza por enlace de afiliado.

## Capabilities and Constraints

Rutas que no pueden romperse (posicionamiento ya ganado):

- `/` — home, terminal con secuencia de arranque
- `/sobre-mi` — biografía, datos, historia, aficiones, modal de vídeo
- `/contacto` — formulario web3forms, widget Cal.com
- `/cumpleanos` — wishlist con atajos de teclado 1–7
- `/novela-carlos-luis-fallas` - sinopsis larga, CTA de afiliado Amazon, obras de Fallas
- `/lucia` - ficha de su asistente de IA (ClawBot); no está en el menú
- `/changelog` - registro de versiones, enlazado desde el sello de la ficha
- `/404` - página de error con estética terminal

Stack y restricciones técnicas:

- Astro 4 + Tailwind + TypeScript, salida estática; sin backend propio.
- Integraciones que deben seguir funcionando: enlaces de afiliado Amazon (`amzn.to`), formulario web3forms con su `access_key`, widget de reservas Cal.com, embeds de YouTube en el modal.
- Sin analítica ni tracking instalado; no se ha pedido añadirlo.

## Brand Commitments

- **Nombre:** "Marcos Ramírez" (sin tilde en el dominio, con tilde en el nombre).
- **Identidad terminal/CRT vinculante:** verde fósforo sobre negro, tipografía monoespaciada, scanlines, cursor parpadeante. Es la marca personal y el usuario exige conservarla; el rediseño debe llevarla a nivel de craft, no retirarla.
- **Voz:** primera persona, informal, autoirónica, sin jerga corporativa. Ejemplos canónicos: "soy un informático de la época del pleistoceno... sed pacientes", "Mi tiempo de uso del móvil: menos de 30 min/día".
- **Discurso público:** la broma de posicionar por encima de los otros Marcos Ramírez es parte de la identidad y se queda.
- **Copyleft** (símbolo invertido) en el pie, año de referencia 1999.
- **Versión:** SemVer en `package.json`, visible en el sello de la ficha (que enlaza a `/changelog`) y registrada en `CHANGELOG.md`. Cada cambio visible sube versión; el procedimiento vive en `.agents/skills/versioning/skill.md`.

## Evidence on Hand

Contenido real disponible y reutilizable:

- Biografía: primer PC un Dragon 32; COBOL en 1988 en una academia de barrio; Basic, Pascal, C; miembro de FCC en los 90; PPEs y tradings; servidores Apache, PHP, webs de afiliados; Slackware; ADSL de 256k.
- Datos personales: 3 de febrero (cumpleaños), neurodivergente (AACC + TDAH + TEA, doble excepcionalidad), programa desde 1988 y cobra por ello desde 1992.
- Las BBS de 1985–1995: punto de Europa BBS, las profundidades del demoño, Atlantic Ocean y Chiba City, la puerta a la Warez Scene.
- Las afiliaciones: HTML y CGI en Perl hacia 1992; PHP y MySQL en 1995; unos doscientos dominios.
- Estilo de vida y aficiones: sin ultraprocesados, ejercicio, sin redes, <30 min/día de móvil; póker y ajedrez, montaña (senderismo y MTB), terror y ciencia ficción, sigilo y aventuras gráficas, puzles y estrategia.
- Modal de vídeo: "The computer wore tennis shoes" / "Mi cerebro es electrónico" (YouTube `AjFAHjUM3U8`).
- Novela: sinopsis completa de "Marcos Ramírez" (1952), Premio Faulkner 1962, serie de TV de 1980, lista de 13 obras de Carlos Luis Fallas, "Mamita Yunai" gratis en Kindle.
- Enlaces comerciales reales: Amazon `amzn.to/4mY2xdc` (novela) y `amzn.to/4edPRwC` (Mamita Yunai).
- Regalos: PayPal, cinco wishlists de Amazon (técnicos, montaña, bici, ropa, chorradas), felicitación por mail.
- Contacto: `marcos@marcosramirez.info`, Cal.com `marcosramirez/en-que-puedo-ayudarte`, LinkedIn, GitHub, blog.
- Assets: `public/images/avatar.png` (+@2x), `logo.png`, `binary.png`/`Binary.jpg`/`Binary.mp4`, `qrpaypal.png`, `copyleft.svg`, set de iconos SVG, favicons.

Ausencias que el rediseño **no** puede inventar: testimonios, clientes, casos de estudio, métricas de negocio, fotos profesionales, premios propios.

## Product Principles

1. **El nombre es el producto.** Cada página debe merecer la búsqueda "Marcos Ramírez" con contenido real y específico, nunca relleno SEO.
2. **Un visitante, un trabajo.** Reclutar, leer o regalar: la home reparte a los tres en segundos, sin menú críptico.
3. **La identidad terminal es craft, no decoración.** El CRT es la marca; si se queda, tiene que estar ejecutado con precisión, no como capa de efectos sobre una plantilla.
4. **Nada inventado.** Ni testimonios, ni métricas, ni proyectos ficticios: solo hechos verificables del autor.
5. **Humor y primera persona** antes que voz corporativa, también en los estados de error y en los formularios.
