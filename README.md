# harikrishna-portfolio

Personal portfolio for **HariKrishna V Shetty** — Full-Stack Software Engineer (SDE-2), Bengaluru.

Built on the [manixh](https://github.com/ig-imanish/manixh) portfolio theme spec. The visual
system (colors, typography, spacing, animation) follows `docs/DESIGN.md` exactly; all content is
mine.

## Stack

React 19 · Vite 7 · TypeScript 5.8 (strict) · React Router 7 · plain CSS · echarts · Vercel

No CSS framework, no state-management library, no data-fetching library — see
`docs/ARCHITECTURE.md` for why.

## Commands

```bash
pnpm install
pnpm dev           # localhost:3000
pnpm build         # tsc -b && vite build → dist/
pnpm preview       # serve the production build
pnpm lint          # eslint
pnpm typecheck     # tsc --noEmit
pnpm format        # prettier --write
```

## Routes

| Path | Page |
|------|------|
| `/`, `/home` | Hero, skills, experience + GitHub calendar, projects, uses, analytics, contact |
| `/projects` | Every project |
| `/blogs` | Post listing (links out to dev.to) |
| `/uses` | Full software + hardware list |
| `/resume` | Inline PDF viewer |
| `/analytics` | Traffic dashboard |
| `*` | 404 |

## Where the content lives

| Content | File |
|---------|------|
| Projects | `src/data/projects.ts` |
| Social links | `src/data/socialLinks.tsx` |
| Software & gear | `src/data/uses.ts` |
| Image paths | `src/data/images.ts` |
| Name, bio, status, location, email | `src/components/heroSection/HeroSection.tsx` |
| Skills & tools | `src/components/skillSection/SkillSection.tsx` |
| Work history | `src/components/experience/Experience.tsx` |
| GitHub username (calendar) | `src/components/calendar/Calendar.tsx` |
| Footer quote | `src/components/footer/Footer.tsx` |
| Blog listing | `src/pages/blogs/BlogLayout.tsx` |
| SEO / OG / JSON-LD | `index.html` |

Full schema reference: `docs/CONTENT_SCHEMA.md`.

## Still to personalise

- **Domain** — every canonical/OG URL and `public/sitemap.xml` currently use
  `https://harikrishna.dev`. Search and replace once the real domain is decided.
- **Hardware in `src/data/uses.ts`** — placeholders, marked with a `TODO`.
- **Navbar star link** — points at `github.com/harikrishna8121999/harikrishna-portfolio`; update if
  the repo is named differently.
- **Company logos** — `public/images/misc/*.svg` are monogram placeholders, not official marks.

## Analytics

`/analytics` reads from `api/analytics.ts`, a Vercel serverless function that proxies Vercel Web
Analytics so the API token never reaches the browser. Set these in the Vercel dashboard:

| Variable | Required |
|----------|----------|
| `VERCEL_TOKEN` | yes |
| `VERCEL_PROJECT_ID` | yes |
| `VERCEL_TEAM_ID` | only for team projects |

Without them the endpoint returns 503 and the dashboard shows a "not wired up yet" state rather
than an error. Running `pnpm preview` locally does the same, since there is no serverless runtime.

## Deployment

Vercel. `vercel.json` rewrites all routes to `index.html` (SPA) and passes `/api/*` through to the
serverless function. CI runs lint + build on every push and PR to `main`.

## License

[MIT](./LICENSE) — theme derived from the MIT-licensed manixh template.
