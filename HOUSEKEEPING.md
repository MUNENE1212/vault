# GitHub housekeeping — October 2026

Settings changes the automation could not make (repo settings, visibility, archiving).
Tick them off as you go. Items are ordered by urgency.

## 1. Security — do today

- [ ] **Make `vault` private** — Settings → General → Danger Zone → Change visibility.
      While it was public (and on GitHub Pages) it exposed an admin login, the VPS IP and
      pointers to credential files. Those are removed from the current files but remain in
      git history, so making the repo private is the real fix.
- [ ] **Rotate the Baitech pricing-dashboard admin password** (the old one was public).
- [ ] **Revoke and reissue the Google credentials** used by Agentic Rev (`credentials.json`, `token.pickle`).
- [ ] Review `sec.txt` (Liquor store) and `CREDENTIALS.md` (baitech-infra) — make sure neither is committed in any repo.
- [ ] Unpublish the vault's GitHub Pages site: Settings → Pages → unpublish (the workflow is now manual-only).

## 2. Profile settings (github.com/settings/profile)

- [ ] **Bio:** `Founder & CTO, Emen · Software, applied AI and connected hardware for Kenyan businesses`
- [ ] **Company:** `Emen` · **Location:** `Nairobi, Kenya` · **Website:** `https://munene1212.github.io`
- [ ] **Public email:** `munene@ementech.co.ke`
- [ ] **Pinned repositories (6)**, in this order:
      `dumuwaks`, `keroma`, `ardalink-engine`, `transittag`, `lectern`, `image-generator`
- [ ] Add a professional headshot to the portfolio (`assets/img/headshot.jpg`, set it in `profile.js`)
      and use the same image as the GitHub avatar.

## 3. Archive (read-only, still visible)

Coursework and superseded work — keeps the repo list focused on products.

- [ ] `pos` (2024, superseded by TomTin / SmartBiz)
- [ ] `PROJ-0` (README opens with an unresolved merge conflict — fix first or archive as-is)
- [ ] `PLP_Python`, `Frameworks_Assignment`, `Task_Management_sql_wk8`, `GROUP0_PLP`, `Ubuntu_Requests`
- [ ] `plp-final-web-project`, `react-frontend-dev`, `css3-animations`, `mern-final`, `mern-testing`, `devops-essentials`
- [ ] `baitech-led-branding`, `rgb-branding` (descriptions already say "superseded by emen-signage")
- [ ] `maternal-risk-api` (superseded by `mama-guardian`)
- [ ] The six public `PLP-WebTechnologies/july-2025-*` classroom repos — archive, or ask the org to; they show on your profile as forks.

## 4. Descriptions, names and defaults

- [ ] Add descriptions: `muthwani-ward`, `maternal-risk-api`, `data-science`.
- [ ] Fix `PROJ-0` description (`MULTI BUSINESS PLATFORM` → sentence case).
- [ ] Rename for clarity (GitHub redirects old URLs):
      `Baitech_website` → `emen-shop`, `Liquor_` → `liquorlink`, `CHURN_repo` → `churn-prediction`.
- [ ] `DEKILA`: change the default branch from `claude/dekila-website-setup-…` to `main`.
- [ ] Standardise default branches on `main` (currently mixed `master` / `main`).
- [ ] Delete merged or stale branches:
      `vault` → `claude/churn-f5xjza`, `claude/elevator-pitch-guide-q9391p`;
      `MUNENE1212` → `claude/enhance-munene1212-decorations-bCsY9`;
      `MUNENE1212.github.io` → `claude/fix-responsive-portfolio-011CUpzSXbUHCn3wbtPhLv7G`.

## 5. Topic taxonomy

Use the same topics everywhere so the profile filters cleanly:

| Topic | Use on |
| --- | --- |
| `emen` | every Emen repo |
| `emen-tech` / `emen-lighting` / `emen-shop` | the line it belongs to |
| `kenya`, `m-pesa` | where relevant |
| `template` | reusable starter repos (see below) |

Repos tagged only `emen, emen-tech` today and worth fuller topics: `tomtin`, `Smartbiz`,
`baitech-dashboard`, `baitech-infra`, `emensense`.

## 6. Reusable modules — consolidation plan

The same building blocks are rewritten across projects. Extracting them makes every new
client project faster and gives the profile a few clean, reusable repos to point at.

| Module | Currently duplicated in | Proposal |
| --- | --- | --- |
| **Payments** (M-Pesa Daraja STK/B2C, IntaSend) | dumuwaks, keroma, Smartbiz, transittag, green_rent | `emen-payments` package with a tested Daraja client and webhook handling |
| **AI provider fallback** (Anthropic → OpenAI → Google → mock) | keroma, prompt_wizard, ardalink | `emen-ai-router` — one interface, ordered fallbacks, mock for tests |
| **Group finance** (contributions, loans, governance) | the-ambitious, kuku-egg-tracker | Shared core used by both PWAs |
| **Web starter** | baitech-dashboard ("the reference stack") | Mark as a GitHub **template repository**: `emen-web-template` |
| **Embedded HAL** | emensense (already) | Keep as the single base for all firmware; publish versioned releases |
| **ESP32 labs** | LED, I2C, SPI, serial-comms | One `esp32-labs` monorepo with a folder per bus |
| **CI workflows** | per repo | Reusable workflows in a `MUNENE1212/.github` repo |

**Overlapping SME products to consolidate:** TomTin ERP, SmartBiz, online-shop (archived),
pejan-inventory, PROJ-0 and onlineduka all cover inventory and sales for small businesses.
Pick one as the canonical Emen Tech SME platform and make the others either clients of it
or archives.
