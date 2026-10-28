/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	// El sitio no usa utilidades de Tailwind: todo el sistema vive en
	// public/styles.css. El preflight se inyectaba después de la hoja y
	// reseteaba los encabezados (font-weight: inherit), así que se desactiva.
	corePlugins: {
		preflight: false,
	},
	theme: {
		extend: {},
	},
	plugins: [],
}
