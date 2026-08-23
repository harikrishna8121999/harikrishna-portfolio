# CLAUDE.md

Personal portfolio for HariKrishna V Shetty, built to the
[manixh](https://github.com/ig-imanish/manixh) theme specification.

## Read first

**[`.claude/docs/BUILD_CONTEXT.md`](.claude/docs/BUILD_CONTEXT.md)** — full handoff notes from the
build: where every piece of content came from, why the non-obvious code looks the way it does,
what's verified, and what's still open. Read it before making changes.

`docs/` holds the five manixh spec files (`AGENTS.md`, `ARCHITECTURE.md`, `COMPONENTS.md`,
`CONTENT_SCHEMA.md`, `DESIGN.md`). **They are the source of truth for the theme** — this project
was written to satisfy them, and there is no upstream source repo to diff against.

## Hard constraints (from `docs/AGENTS.md`)

- Never change color values or design tokens — `:root` in `src/App.css` is copied verbatim from
  `DESIGN.md`. Don't invent new tokens.
- Never change the 700px container width or drop the breakpoints (700 / 420 / 400 / 360 / 354px).
- Never remove animations.
- Never add npm dependencies.
- Never use `any` — strict TS with `noUnusedLocals`, `noUnusedParameters`, `verbatimModuleSyntax`.
- Home section order is fixed: Hero → Skills → Experience → Projects → Uses → Analytics → Contact →
  Footer.
- Put content in `src/data/` where the schema allows it; use existing CSS classes over inline styles.

## Commands

```bash
pnpm dev         # localhost:3000
pnpm build       # tsc -b && vite build
pnpm lint
pnpm typecheck
pnpm format
```

pnpm is pinned to 9.15.4 via `packageManager`; corepack switches automatically.

Before reporting any change done: `pnpm typecheck && pnpm lint && pnpm build` must all be clean,
with no build warnings.

## Gotchas

These look like bugs but are deliberate — `BUILD_CONTEXT.md` §6 explains each:

- The 2.5s artificial load delay on `/` is specified, not accidental.
- echarts must stay modular + lazy-loaded; `use` is aliased to `registerECharts` for eslint.
- Image skeletons need the `ref` + `onLoad` + `onError` trio to survive cached images.
- `https://harikrishna.dev` is a placeholder domain, not confirmed.
