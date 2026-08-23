# Build context — harikrishna-portfolio

Handoff notes from the session that created this project, so a later Claude session can pick up
without re-deriving anything.

- **Created:** 2026-08-23
- **First commit:** `70c0660` — "feat: portfolio built from the manixh theme spec" (109 files)
- **Built by:** Claude Opus 5, from the manixh template spec

---

## 1. What this project is and where it came from

It's a personal portfolio for **HariKrishna V Shetty**, built to the
[manixh](https://github.com/ig-imanish/manixh) portfolio theme specification.

The critical thing to understand: **manixh ships specs, not code.** Running `npx manixh-portfolio`
installs five markdown documents (`AGENTS.md`, `ARCHITECTURE.md`, `COMPONENTS.md`,
`CONTENT_SCHEMA.md`, `DESIGN.md`) and nothing else. There is no upstream source repo to fork or
diff against — every file here was written from scratch to satisfy those specs.

The template clone the session started in lives at `C:\Users\harik\Documents\Projects\manixh`.
It was **not modified** — this project was built in a clean sibling directory.

Those five specs were copied into `docs/` here (converted from UTF-16 to UTF-8 along the way, since
the originals are UTF-16LE and read as mojibake otherwise). **Treat `docs/` as the source of
truth for the theme.**

---

## 2. Decisions the user made

Asked and answered at the start of the build:

| Question | Answer |
|----------|--------|
| Where to build | New folder `Documents/Projects/harikrishna-portfolio`, own git repo |
| How much of the spec | **Everything** — all 8 routes, including the analytics dashboard and the full blog system |
| Which projects to feature | **Pull from GitHub** (`harikrishna8121999`) rather than hand-listing |

---

## 3. Where the content actually came from

Nothing here was invented. Sources, in case you need to re-derive or extend:

**Resume PDF** — `C:\Users\harik\Documents\Projects\portfolio\harikrishna\assets\pdf\HarikrishnaShetty_Resume_V2.pdf`

This is the source for every experience bullet (Poppulo / Sacumen / Synechron), the professional
summary, and the skills list. It's a Google Docs (Skia) PDF with subset fonts, so `strings` and
naive stream extraction produce glyph IDs, not text. `pdftoppm` is not installed on this machine.
The session extracted it by inflating the content streams, parsing every `ToUnicode` CMap
(`beginbfchar` / `beginbfrange`) into a global glyph→unicode map, then replaying the `Tj`
operators. **Caveat:** the digit glyph mapping is off by a constant — `0` decodes as `2`, so dates
came out as "Jul 2224" for "Jul 2024". These were corrected by cross-referencing the old site.
If you re-extract, expect the same quirk.

**Existing Jekyll site** — `C:\Users\harik\Documents\Projects\portfolio\harikrishna\`

Source of the avatar (`assets/img/hari.jpeg` → `public/images/profile/pfp-latest.jpg`), the resume
PDF, the LinkedIn URL, phone/email, and the EmailTestLab + CleanupAI descriptions. Still on disk;
this project does not replace or touch it.

**GitHub API** — `https://api.github.com/users/harikrishna8121999/repos`

19 repos. Featured four by stars/recency: antigravity-workflows (177★, npm),
cleanup-ai-online (live at cleanupai.online), email-design-mcp (npm), jobpilot-ai. Four more on
`/projects`: EmailTestLab (no public repo → flagged `isPrivate`), redditclone, amazon-clone1,
JavaDesignPatterns. npm download counts were checked via `api.npmjs.org` (~109/mo and ~69/mo at
build time — the blog post cites "roughly 70 monthly installs", update if it drifts).

---

## 4. Hard constraints from `docs/AGENTS.md`

These are the template's rules. They were followed throughout and should keep being followed:

- **Never modify color values or design tokens.** Everything in `src/App.css` `:root` is copied
  verbatim from `DESIGN.md`. Do not invent new tokens.
- **Never change the 700px container width** or remove the responsive breakpoints
  (700 / 420 / 400 / 360 / 354px).
- **Never remove animations** — marquee 60s, heart-beat 2s, pulse-dot 1.2s, drift 20s, etc.
- **Never add npm packages.** The dependency list is deliberately minimal.
- **Never use `any`.** TypeScript strict mode with `noUnusedLocals` / `noUnusedParameters` /
  `verbatimModuleSyntax` / `erasableSyntaxOnly`.
- **Home page section order is fixed:** Hero → Skills → Experience → Projects → Uses → Analytics →
  Contact → Footer.
- **Prefer data files over hardcoding**, and existing CSS classes over inline styles. (Two
  deliberate exceptions: `style={{ color: link.color }}` for brand colors and the calendar tooltip's
  `left`/`top` — both are data-driven values, not styling decisions.)

---

## 5. Stack and layout

React 19.1.1 · Vite 7.3.6 · TypeScript 5.8.3 · React Router 7.8.2 · plain CSS · react-icons 5.5.0 ·
echarts 6.1.0 · react-github-calendar 4.5.10 · @vercel/analytics 1.5.0

Node v22.17.0. pnpm is pinned to **9.15.4** via the `packageManager` field — corepack auto-switches
inside this directory even though the machine's global pnpm is 10.x, so just run `pnpm` normally.

```
.claude/docs/    ← this file
docs/            ← the five manixh spec files (UTF-8, source of truth for the theme)
api/analytics.ts ← Vercel serverless proxy for Web Analytics
public/          ← images, og, resume, robots.txt, sitemap.xml
src/
  components/    ← navbar, loading, tooltip, sectionTitle, ClickSpark, heroSection,
                   skillSection, experience, calendar, projects, uses, analytics,
                   analyticsSection, contactMe, footer, blogs/
  data/          ← projects.ts, socialLinks.tsx, uses.ts, images.ts, analytics.ts
  hooks/         ← useAnalytics.ts
  utils/         ← ImageDecoration.ts
  pages/         ← home, blogs, uses, resume, analytics, notFound, ProjectsLayout
```

Content location map is in `README.md` and in full detail in `docs/CONTENT_SCHEMA.md`.

---

## 6. Non-obvious implementation notes

Things that will look wrong or arbitrary without the reasoning:

**`withMinDelay` in `src/App.tsx`** — the home route has a deliberate 2.5s artificial minimum load
time so the loading animation always plays through. This is specified in `ARCHITECTURE.md`
("Key Architectural Decisions" #4), not an accident. Don't "optimize" it away.

**echarts is imported modularly, not as a barrel.** `import * as echarts from 'echarts'` produces a
1.13 MB chunk. `AnalyticsChart.tsx` imports only `echarts/core` + `LineChart` + the three
components it needs + `SVGRenderer`, and the chart itself is `lazy()`-loaded inside
`AnalyticsDashboard` so echarts is never fetched until analytics data actually resolves. Result:
521 kB, in its own chunk. `vite.config.ts` raises `chunkSizeWarningLimit` to 600 with a comment
explaining why — that's not hiding a problem, the chunk is isolated and lazy.

**`use` is aliased to `registerECharts`.** eslint's `react-hooks/rules-of-hooks` sees echarts'
`use()` as a React hook called at module top level and errors. The alias is the fix; don't rename
it back.

**Image skeletons check `img.complete` via a ref.** In `ProjectCard.tsx` and `HeroSection.tsx`, a
cached image finishes loading before React attaches `onLoad`, so the skeleton would stay up
forever. This was a real observed bug (the antigravity-workflows banner rendered as a grey box).
The ref callback plus `onError` covers it. Keep all three handlers.

**`useAnalytics` treats a non-JSON response as `not_configured`.** Outside a Vercel deployment
there's no serverless runtime, so the SPA fallback answers `/api/analytics` with `index.html`.
Checking `content-type` before parsing turns that into the honest "not wired up yet" state instead
of a scary error.

**Project banners are GitHub OG URLs**, not local files — `opengraph.githubassets.com/1/<user>/<repo>`
via the `ghSocial()` helper in `src/data/images.ts`. They stay in sync with the repos' READMEs.
Only EmailTestLab uses a local hand-drawn SVG, since it has no public repo.

**Generated assets.** The QR code was made with a one-off `npx qrcode` (not a project dependency).
The OG PNG was rasterized from `public/og/og-image.svg` with a one-off `npx sharp-cli` — if you
edit the SVG, re-run that to regenerate the PNG. Decoration SVGs and company monograms were
hand-written.

---

## 7. Validation status

At the time of the first commit:

- `pnpm typecheck` — clean
- `pnpm lint` — clean
- `pnpm build` — clean, **no warnings**
- `pnpm format` — applied

Verified in Chrome against `pnpm preview`: all 8 routes plus 404 render; GitHub calendar pulls real
data (308 contributions); blog components (code block, terminal, tip/warn/dont alerts, highlights)
render correctly; console clean apart from the expected "Vercel Web Analytics failed to load
script" notice, which is normal outside a Vercel deployment.

**Not verified:** mobile rendering at the narrow breakpoints. The browser extension screenshots at a
fixed width and `resize_window` had no effect on the captured viewport. The media queries are
written per `DESIGN.md` but were never seen. **Worth checking first if you touch layout.**

---

## 8. Open items

Carried in `README.md` under "Still to personalise" as well:

1. **Domain** — `https://harikrishna.dev` is a placeholder. It appears in `index.html`
   (canonical, OG, Twitter, JSON-LD), `public/sitemap.xml`, and `public/robots.txt`. The user has
   not confirmed a real domain.
2. **Hardware list** in `src/data/uses.ts` — placeholders with a `TODO` comment. The software list
   is real (derived from the actual stack); the desk setup was never established.
3. **Navbar star link** — `src/components/navbar/Navbar.tsx` points at
   `github.com/harikrishna8121999/harikrishna-portfolio`. The repo has no remote yet.
4. **Company logos** — `public/images/misc/{poppulo,sacumen,synechron}.svg` are monogram
   placeholders, not official marks.
5. **Analytics env vars** — `/analytics` stays in its "not configured" state until `VERCEL_TOKEN`
   and `VERCEL_PROJECT_ID` (plus `VERCEL_TEAM_ID` for team projects) are set in the Vercel
   dashboard. Never put these in `.env`; see `.env.example`.
6. **No git remote, never deployed.** One local commit on `main`.

---

## 9. Things not done that were never asked for

Flagged so you don't assume they exist: no tests (the spec defines no test setup), no CMS, no
light mode (`DESIGN.md` is explicitly dark-only), no click sound effect (the spec's `public/audio/`
was skipped rather than fabricate a binary — `ClickSpark` is visual-only), and only one blog post.
