# Quandamooka Country Events Engine

Static multi-page website and Markdown builder system for public-safe event planning on Quandamooka Country.

The site is a public gateway. Build notes, source notes and maintenance instructions stay in Markdown files in `docs/`.

## Public links

- Live site: https://auraofintelligence.github.io/quandamooka-country-events-engine/
- Source repo: https://github.com/auraofintelligence/quandamooka-country-events-engine

## Open locally

From this folder:

```powershell
python -m http.server 4188
```

Then open:

```text
http://localhost:4188
```

## Public pages

- `index.html` - gateway and public boundary
- `calendar.html` - confirmed, TBC, recurring and past event atlas
- `ecosystem.html` - event ecosystem catalogue rendered through a public planning lens
- `places.html` - venues, parks, beaches and gateways
- `supply.html` - catering, artists, planners, gear, transport and support lanes
- `builders.html` - builder gateway with one card per builder set
- `builder-events.html` - event brief, resource profile, simulation brief and aftercare report builders
- `builder-run.html` - place, approval, supplier, run sheet, crew, risk, evidence, source and market intake builders
- `builder-simulation.html` - specialist simulation builders
- `builder-notices.html` - public notice, change, transport and aftercare notice builders
- `builder-assets.html` - external builder outlinks for related profile, asset, grant, legal memory, film, noticeboard and podcast builders
- `simulation.html` - crowd, transport, logistics, environment and vibe checks that link straight into the simulation builder page
- `approvals.html` - cultural, council, parks, food, traffic, safety and media gates

The idea-to-aftercare event loop now lives on the front page. The aftercare report is handled as a builder under `builder-events.html`, and the Builders menu links to focused builder-set pages instead of forcing every form onto one long page. There is no separate Operations menu; practical work is captured as `.md` run files.

## Repo notes

- [Build notes](docs/BUILD_NOTES.md)
- [Source notes](docs/SOURCE_NOTES.md)
- [Builder link map](docs/BUILDER_LINK_MAP.md)
- [Public boundary](docs/PUBLIC_BOUNDARY.md)
- [Hero image prompts](docs/HERO_IMAGE_PROMPTS.md)
- [Licence](LICENCE.md)

## Current boundary

This repo is a prototype and catalogue scaffold. It is not an official permission, cultural authority, council permit, safety approval or live emergency source.

Each event, venue, supplier, artist, notice, image, protected place and cultural reference needs direct source confirmation before operational use.
