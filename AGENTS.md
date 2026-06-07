# AGENTS.md

## What this repo is

The **k9s documentation website** (served at `k9scli.io`), built with
**Astro + Starlight** and deployed to **GitHub Pages**. It is NOT the k9s Go
application.

## Commands

```shell
pnpm install     # install deps (pnpm is the package manager; pnpm-lock.yaml is committed)
pnpm dev         # local dev server at http://localhost:4321
pnpm build       # production build to dist/ (also the CI/verification gate)
pnpm preview     # serve the built dist/ locally
```

- The build fails on broken internal links, so `pnpm build` is the real check.
- `sharp` and `esbuild` need their install scripts; they are allow-listed in
  `pnpm-workspace.yaml` (`allowBuilds`). After a fresh clone, `pnpm install`
  honors this; if builds are skipped, run `pnpm approve-builds --all`.

## Content & structure

- Docs are a Starlight collection under `src/content/docs/`. Files map to routes:
  `src/content/docs/topics/install.md` -> `/topics/install/`. The `/topics/`
  prefix is intentional and preserves the old Jekyll URLs — keep it.
- `src/content/docs/index.mdx` is the landing page (`template: splash`) at `/`.
- Pages that use Starlight components (`<Aside>`, `<Card>`, etc.) must be `.mdx`
  and import the component, e.g.
  `import { Aside } from "@astrojs/starlight/components";`. Plain prose pages
  can stay `.md`.
- The **sidebar is hand-defined** in `astro.config.mjs` (`starlight.sidebar`),
  not auto-generated. Adding a topic page requires adding it to the sidebar.
- `/topics/docs` redirects to `/` (see `redirects` in `astro.config.mjs`); the
  old Jekyll nav-index page no longer exists.
- Two image conventions coexist:
  - Optimized assets live in `src/assets/` and are imported as ESM in `.mdx`,
    then rendered via `<Image>` from `astro:assets` (e.g.
    `import pods from "../../assets/screens/pods.png"` in `index.mdx`,
    `assets/skins/dracula.png` in `topics/skins.mdx`). Logo, hero, screenshots,
    and skin shots use this path.
  - Static images served by absolute path live in `public/` (only
    `favicon.ico`, `k9s.png`, `imhotep_logo.png`).
- Astro components live in `src/components/` (e.g. `ColorSwatches.astro`, used in
  `topics/skins.mdx`). Custom CSS is `src/styles/custom.css` (wired via
  `customCss` in `astro.config.mjs`).
- Page title and description come from frontmatter; do not add an `# H1` — the
  title is rendered by Starlight.

## Deploy (GitHub Pages)

- `.github/workflows/deploy.yml` builds with the official `withastro/action@v6`
  and deploys via `actions/deploy-pages` on pushes to `master`. The action
  auto-detects pnpm from `pnpm-lock.yaml` and runs install/build itself — there
  are intentionally no explicit install/build steps in the workflow.
- Custom domain: `public/CNAME` (`k9scli.io`). `astro.config.mjs` sets
  `site: 'https://k9scli.io'` with **no `base`** (apex domain) — do not add one.
- One-time manual step (not automatable): repo **Settings -> Pages -> Source =
  GitHub Actions**.

## Conventions

- Prettier defaults are used; this repo has no custom prettier config anymore.
- The old site used a paid FontAwesome kit and Google Universal Analytics; both
  were intentionally dropped. Use Starlight's built-in icons; do not re-add UA.
