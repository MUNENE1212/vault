# Elevator Pitch — Guide & Working Drafts

Source: [Elevator Pitch walkthrough](https://youtu.be/f_N3PGvnVKg) + framework notes.
This file has two parts: **(1)** a condensed reference guide, and **(2)** working
drafts built from the real project data in `projects.js`. Part 2 is a first pass —
see "Open questions" at the bottom before treating any draft as final.

---

## 1. The framework (reference)

**What it is:** a 30–60 second summary of who you are, what you do, and what you
want — built to survive a real conversation (networking event, career fair,
interview, LinkedIn "About" section), not a monologue.

**The 5 questions:**

1. **Who are you** — current title/role + industry or company context.
2. **What do you do** — key skills (general, not a tool list) + accomplishments.
3. **How do you add value** — the impact of your work on the people around it.
4. **What makes you distinctive** — your USP; the thing that makes you memorable.
5. **What are you looking for** — specific enough to act on, flexible enough to not sound demanding.

**The formula:** *"I help **X** achieve **Y** by doing **Z**."*
- X = your audience
- Y = the value you bring them
- Z = how you deliver it

**It's a story, not a resume.** Don't list features/tools you've touched — describe
a situation: the problem, why you were the one to solve it, what you did, and the
result. People connect with narratives, not bullet points.

**Non-linear background?** That's an asset, not a gap to explain away. Frame it as
a connection, not a choice between paths: *"I'm a [target role] with a background
in [previous field], which means I [unique advantage]."*

**No formal work experience?** Projects, hackathons, freelance work, and coursework
all count as long as the outcome is honestly stated (even an estimate) — "built and
shipped" beats "learned about."

---

## 2. Working drafts for Munene Denis (EMENTECH)

Built from what's actually in this vault: multiple **production** systems (not
side projects) across fintech payments (M-Pesa Daraja, IntaSend), AI integration
(OpenAI/Claude/Gemini with fallback chains), full-stack web (MERN, Django, Next.js),
and even embedded/IoT (ESP32, C). Based in Nairobi, Kenya.

Facts pulled straight from `projects.js` — no invented metrics:
- **DumuWaks** — live AI-matching technician marketplace, MERN + M-Pesa STK push/payouts, 99+ service types across 12 categories, zero-downtime CI/CD.
- **TomTin ERP** — offline-first POS (Dexie.js/IndexedDB) for water/laundry/retail/LPG businesses, Django 5 + DRF + Postgres, handles Kenyan VAT/income tax + audit trail.
- **KEROMA** — AI recipe platform with multi-provider fallback (Anthropic → OpenAI → Google → mock) so it degrades gracefully instead of breaking.
- **TransitTag/Transii** — IoT matatu transport PWA (C + MQTT/WebSockets hardware side), IP filed.
- **ArdaLink** — satellite/NDVI-driven livestock alert system built for Red Bull Basement, voice calls herders via Azure OpenAI Realtime + Africa's Talking.
- Several more live systems (Emen Engineering site w/ chatbot, e-commerce storefronts, a poultry-cooperative tracker) plus a deep backlog of WIP/planned work (biometric access control, multi-shop inventory).

### Draft A — Founder / technical-builder pitch (networking, investors, partners)

> I'm Munene, a full-stack engineer and founder running EMENTECH out of Nairobi.
> I build production software for businesses that Kenya's tooling usually
> underserves — technicians who need customers to find them, shop owners who need
> a POS that works when the internet doesn't, recipe platforms that shouldn't
> die if one AI provider goes down.
>
> Concretely: I've shipped and deployed a technician marketplace with AI matching
> and native M-Pesa payments, an offline-first ERP that handles Kenyan tax rules
> for four different business types, and an AI platform with automatic fallback
> across three model providers so it never just breaks. All live, all in
> production, all built solo end-to-end — backend, frontend, infra, and the
> payments integration most teams outsource.
>
> What makes me different is that I don't stop at "it works in the demo" — I
> design for the failure case first: offline mode, provider fallback,
> zero-downtime deploys. Right now I'm looking for [investors / technical
> co-founders / clients] who want that same bias toward things that survive
> contact with real users.

### Draft B — Job-seeker / employer-facing pitch (interviews, career fairs)

> I'm a full-stack software engineer with hands-on production experience across
> the whole stack — React/Next.js and MERN on the frontend, Django and Node/Express
> on the backend, and everything in between: payments (M-Pesa, IntaSend), AI
> integration (OpenAI, Claude, Gemini), and deployment (Docker, Nginx, CI/CD).
>
> Over the past [X years], I've built and shipped multiple production systems on
> my own — from a marketplace app processing real M-Pesa transactions to an
> offline-first POS system used by real small businesses. That means I don't just
> know how to write code that passes a code review; I know how to build things
> that keep running after a bad network day or a downed API.
>
> I'm looking for a [role] where I can bring that end-to-end ownership to a team —
> ideally somewhere building [fintech / AI products / infrastructure], where
> shipping something that actually works matters as much as shipping it fast.

### Draft C — 60-second / LinkedIn "About" version

> Full-stack engineer and founder (EMENTECH, Nairobi) building production
> software for underserved markets — AI-matched marketplaces, offline-first ERPs,
> and payment-integrated platforms that keep working when the network doesn't.
> I design for the failure case first, not last, and I've shipped it solo:
> backend, frontend, infra, payments. Currently exploring [goal — funding /
> collaborators / a full-time role] with people who care as much about resilience
> as they do about velocity.

---

## Open questions (needed to finalize)

These drafts are a first pass built entirely from what's verifiable in the repo.
To sharpen them, I need from you:

1. **Primary audience/goal right now** — job hunting, raising for EMENTECH,
   finding clients, or something else? (Changes which draft is "the" pitch.)
2. **Years of experience** and how you'd describe your current title (founder?
   freelance engineer? both?).
3. **One number you're comfortable citing** — users, transactions, revenue,
   uptime, anything real — even an estimate. The drafts above deliberately avoid
   inventing metrics like "50% engagement boost" that aren't in the project data.
4. Any specific role/company/investor type you're pitching next, so I can tailor
   the ask in the last line.
