# Min Gao — Design Portfolio

A bilingual French / English design portfolio by Min Gao. The site presents selected work across spatial, critical, digital, graphic and product design through a multi-page case-study structure.

## Structure

| Route | Purpose |
| --- | --- |
| `#/` | Selected projects and portfolio introduction |
| `#/projects` | Complete project index |
| `#/projects/:slug` | Individual project case study |
| `#/writing` | Writing and research index |
| `#/about` | Profile, education and design focus |
| `#/contact` | Contact details and portfolio download |

The site uses hash routing so individual portfolio pages work on GitHub Pages without a server rewrite rule.

## Local development

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Run a production check before publishing changes:

```bash
pnpm check
pnpm build
```

## Static media

All website media lives in `client/public/assets/` so the GitHub Pages build is independent from third-party storage.

- `assets/min-gao-wall-light-hero.png` — home page image
- `assets/pages/` — original portfolio pages used as project visuals
- `assets/documents/` — downloadable portfolio PDF

## GitHub Pages

Every push to the `main` branch runs `.github/workflows/deploy.yml`, builds the Vite static site and deploys the `dist/` directory to GitHub Pages.

The Vite base path is set for this repository at `/min-gao-portfolio/`. The expected Pages URL is:

`https://mingao-design.github.io/min-gao-portfolio/`

## Updating the live site

1. Make content or design changes in a local checkout or in the source project.
2. Copy any new media into `client/public/assets/` and reference it through `import.meta.env.BASE_URL` or the shared asset helper in `client/src/data/portfolio.ts`.
3. Run `pnpm check && pnpm build`.
4. Commit and push to `main`. GitHub Pages publishes the update automatically.

## License

All portfolio text, visual work and media remain the property of Min Gao. Do not reuse them without permission.
