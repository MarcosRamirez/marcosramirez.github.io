import pkg from '../package.json';

/**
 * Versión del sitio. La única fuente de verdad es `package.json`: no escribir
 * números a mano en componentes ni en páginas.
 */
export const SITE_VERSION: string = pkg.version;
