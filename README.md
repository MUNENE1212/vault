# Emen // Vault of Giants

A private, internal index of every project under the **EMENTECH** umbrella — production systems, works-in-progress, and the sleeping giants waiting to be woken.

> **Engineering the future, one giant at a time.**

## What's inside

A single-page static site (`index.html` + `styles.css` + `app.js` + `projects.js`) that catalogs projects in three tiers:

- **Live & Deployed** — production systems running on the VPS
- **In the Forge** — actively worked or planned for 2026
- **Sleeping Giants** — dormant repos waiting to be revived

Each card shows status, tagline, description, stack tags, repo path, and live URL where applicable. Filter by status or search by name / stack / domain.

## Run it locally

No build step. Just open it:

```bash
# Option 1 — open directly
xdg-open index.html        # Linux
open index.html            # macOS

# Option 2 — serve over localhost
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Visibility — private by design

The vault is the **internal** index: honest statuses, action items and dormant work.
Keep this repository **private**. The public, client-facing view is the portfolio at
<https://munene1212.github.io>, whose catalogue (`assets/data/projects.js` in
`MUNENE1212.github.io`) is curated from this file by hand.

Even though the repo is private, never write secrets here — no passwords, API keys,
tokens or server IPs. Reference "the password manager" instead.

The Pages workflow is manual-only (`workflow_dispatch`); it no longer publishes on push.

## Keeping it current

- New repo or status change → update `projects.js` here first.
- Project goes live or becomes client-worthy → add a curated entry to the portfolio.
- Repo hygiene tasks (descriptions, topics, archiving) → `HOUSEKEEPING.md`.

## Re-ordering & editing

All catalog data lives in **`projects.js`**. To re-order, edit the `tier` field (lower = earlier inside its section). To add a project, append an entry following the same shape:

```js
{
  name: "Project Name",
  path: "relative/path/from/repo/root",
  status: "live" | "wip" | "sleeping" | "planning",
  tier: 1,                     // sort key within section
  tagline: "One-line headline.",
  desc: "Longer description.",
  stack: ["Tag", "Tag"],
  url: "https://...",          // optional
  notes: "Anything else."      // optional
}
```

Then re-commit and refresh — no build step.

## File layout

```
vault/
├── index.html        # markup + hero + filters
├── styles.css        # dark theme, EMENTECH tokens (mahogany, charcoal, circuit-blue)
├── app.js            # render + filter + search logic
├── projects.js       # the catalog (edit this to re-order)
├── assets/
│   └── favicon.svg   # E-M circuit mark
└── README.md
```

## Design tokens

Pulled from the DumuWaks design system (`CLAUDE.md`) so the vault feels native to the rest of EMENTECH:

| Token       | Value     | Use                              |
|-------------|-----------|----------------------------------|
| Mahogany    | `#8b3a2e` | Brand accent, dividers           |
| Charcoal    | `#1a1d22` | Surface alt                      |
| Circuit     | `#3aa3ff` | Live indicators, links           |
| Wrench      | `#8a5cff` | Planning tier                    |
| Bone        | `#f1ece4` | Soft text                        |
| Steel       | `#7a8696` | Body copy                        |

Status colors:

- `live` — green pulse
- `wip` — amber
- `sleeping` — muted grey
- `planning` — wrench purple

## License

MIT for the code (see `LICENSE`). The catalogue content is internal — do not redistribute.