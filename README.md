# EMENTECH // Vault of Giants

A personal, private-friendly index of every project under the **EMENTECH** umbrella — production systems, works-in-progress, and the sleeping giants waiting to be woken.

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

## Deploy to GitHub Pages

1. Push this folder to a GitHub repo (e.g. `ementech-vault`).
2. **Settings → Pages → Build & deployment → Source: `Deploy from a branch`.**
3. Branch: `main`, folder: `/ (root)`.
4. GitHub will publish at `https://<user>.github.io/ementech-vault/`.

That's it — no bundler, no CI, no Node runtime needed.

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
portfolio/
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

Private index. Do not redistribute.