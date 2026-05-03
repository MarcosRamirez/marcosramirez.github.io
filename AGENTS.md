# AGENTS.md

Lee el directorio `.agents/` y sigue las instrucciones que encuentres.

## Commands
- `npm run dev` - Start dev server
- `npm run build` - Run typecheck then build (`astro check && astro build`)
- `npm run preview` - Preview production build

## Tech Stack
- Astro 4.x with Tailwind CSS
- TypeScript

## Structure
- Pages: `src/pages/*.astro`
- Components: `src/components/*.astro`
- Layouts: `src/layouts/Layout.astro`

## Deployment
- GitHub Pages via `.github/workflows/deploy.yml`
- Auto-deploys on push to `main` branch using `withastro/action@v2`

## Important Notes
- Build includes `astro check` (TypeScript validation) before `astro build`
- No tests in this repo
- **NUNCA ejecutes `npm run build` o `npm run dev` localmente** - Los despliegues se hacen automáticamente via GitHub Actions