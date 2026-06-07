# k9s_site

The documentation website for [k9s](https://github.com/derailed/k9s), served at
[k9scli.io](https://k9scli.io). This is the docs site only — it is **not** the
k9s Go application.

Built with [Astro](https://astro.build) +
[Starlight](https://starlight.astro.build) and deployed to GitHub Pages.

## Getting started

This project uses [pnpm](https://pnpm.io) (the `pnpm-lock.yaml` is committed).

```shell
pnpm install     # install dependencies
pnpm dev         # local dev server at http://localhost:4321
pnpm build       # production build to dist/
pnpm preview     # serve the built dist/ locally
```

`pnpm build` is the verification gate: it fails on broken internal links.

> If `sharp`/`esbuild` install scripts get skipped after a fresh clone, run
> `pnpm approve-builds --all` (they are allow-listed in `pnpm-workspace.yaml`).

## Project layout

| Path                         | Purpose                                               |
| ---------------------------- | ----------------------------------------------------- |
| `src/content/docs/`          | Starlight docs collection (one file per page)         |
| `src/content/docs/index.mdx` | Landing page (`/`)                                    |
| `src/assets/`                | Optimized images imported in `.mdx` via `<Image>`     |
| `src/components/`            | Astro components (e.g. `ColorSwatches.astro`)         |
| `src/styles/custom.css`      | Custom site styles                                    |
| `public/`                    | Static assets served by absolute path; `CNAME` domain |
| `astro.config.mjs`           | Site config, sidebar, and redirects                   |

Doc files map to routes: `src/content/docs/topics/install.md` -> `/topics/install/`.
The `/topics/` prefix is intentional and preserves the old Jekyll URLs.

## Editing docs

- Add a topic page under `src/content/docs/topics/`, then add it to the
  hand-defined `sidebar` in `astro.config.mjs` (it is not auto-generated).
- Pages using Starlight components (`<Aside>`, `<Card>`, etc.) must be `.mdx`
  and import the component; plain prose pages can stay `.md`.
- Page title/description come from frontmatter — do not add an `# H1`.

## Deployment

Pushes to `master` trigger `.github/workflows/deploy.yml`, which builds with
`withastro/action@v6` and publishes to GitHub Pages. The custom domain is set
via `public/CNAME` (`k9scli.io`).

## License

© Imhotep Software LLC. Materials licensed under
[Apache v2.0](https://www.apache.org/licenses/LICENSE-2.0).
