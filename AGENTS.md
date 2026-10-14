# Engineering Standards (pointer)

This repo follows the shared engineering standards maintained in the `.standards/`
git submodule. This file is a real file, not a symlink, on purpose: CI and Vercel
check out without initializing submodules, and a dangling `AGENTS.md` symlink
crashes `next build` (Next.js ≥ 15.5 stats `AGENTS.md` at startup and throws
ENOENT on a broken symlink).

**Agents and humans:** run `git submodule update --init --recursive`, then read
the full standards index at [.standards/AGENTS.md](.standards/AGENTS.md). The
rules that matter most in this repo:

- All changes reach `main` via pull request; direct pushes to `main` are forbidden.
- Conventional commits (`feat:`, `fix:`, `chore:`, `docs:`, `test:`, `refactor:`).
- Never commit secrets; `.envrc` and `config/*.local.env` stay gitignored.
- Styling: design tokens via the Tailwind theme / CSS variables; no inline `style` props.
- Read `.standards/docs/SPEC_PIPELINE.md` before running `/spec` or `/build`.

Project-specific design source of truth: [DESIGN.md](DESIGN.md).
