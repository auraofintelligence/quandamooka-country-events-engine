# Build Notes

These notes are for maintainers and agents. They are not displayed on public-facing pages.

## Local pattern used

The site borrows three proven local patterns:

- Strange But True style language: deep ink base, aqua/gold/coral/violet accents, strong headings, compact navigation, 8px radius, public/private boundary notes.
- Straddie Noticeboard Network data shape: public entity categories, screen-safe notice flow, approval owner, expiry and device profiles.
- Straddie Content Assets Kit builder pattern: browser-only forms that export plain `.md` files.

## File shape

- Public pages are small HTML shells.
- `assets/site-data.js` holds public page copy, event records, source links, process steps, approval gates and builder definitions.
- `assets/noticeboard-data.js` is copied from the existing noticeboard prototype as the comprehensive public entity seed.
- `assets/app.js` renders the pages and builders.
- `assets/styles.css` holds the shared visual system.

## Design rules carried forward

- Public pages must not contain build advice.
- Public pages must not speak to a private individual.
- Every page has a hero image.
- Every page has a floating back-to-top button.
- Every page has contextual bottom navigation based on `DATA.pageSequence`.
- Builder forms export Markdown and include clear reset behaviour.
- Public notices must separate approved public content from private planning data.
- Empty folders should not be kept as fake architecture.

## Hero assets

Generated images were copied from the Codex generated-images folder into `assets/images/` and converted to WebP with Pillow.

Used assets:

- `hero-engine.webp`
- `hero-calendar.webp`
- `hero-ecosystem.webp`
- `hero-builders.webp`
- `hero-simulation.webp`

The original generated PNGs remain in the Codex generated-images folder.
