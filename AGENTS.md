# AGENTS.md

## Project overview

Multi-page static personal website (CV site) for Piotr Henryk Siwy. No build step, package manager, dependencies, tests, linters, or CI. Do not introduce tooling unless asked.

## Pages

- `index.html` — home / landing page (short welcome)
- `about.html` — summary + technical skills
- `projects.html` — projects
- `education.html` — education
- `experience.html` — work experience, volunteering & interests
- `contact.html` — contact data
- `style.css` — shared stylesheet, linked from every page
- `fonts/` — `Inter-Variable.woff2`, the self-hosted Inter font (SIL Open Font License, latin subset, variable weight 100–900), declared once in `style.css`; falls back to Arial if missing.
- `wave.js` — ocean-wave text effect: wraps every word in a span and bobs it out of phase (paired with the `.wave-word` CSS in `style.css`); included via `<script>` on every page; applies only to the nav links
- `mugshot.jpeg` — photo shown only on the landing page, beside the welcome text (must sit next to `index.html`; filename matching is case-sensitive)

Every page repeats the same header (nav only) and the `wave.js` script include — keep them in sync when editing.

## Running / verifying

- Open pages directly in a browser, or serve statically from the repo root: `python3 -m http.server 8000`
- No test/lint commands exist. Verify changes by viewing the pages in a browser.

## Conventions

- Dark theme: white text on black (`#000` background, `#fff` text). All styling lives in `style.css`; add new CSS there, not in per-page `<style>` blocks.
- Content links are light blue (`a { color: #6cf; }`); nav links override this to stay white — preserve that override.
- Dates and institutions use the `.meta` class; grouped entries (projects, jobs, education) use `.entry` blocks (see `education.html`).

## Known pre-existing issues

- Nav `<li>` elements are direct children of `<nav>` with no `<ul>` wrapper — invalid HTML but renders as intended.
