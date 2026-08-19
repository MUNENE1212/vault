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

**Identity baseline for all four pitches below:** early-career (0–2 yrs) full-stack
engineer, based in Nairobi, Kenya, who runs EMENTECH — not "years of experience"
as the headline, but *scope and realness* of what's been shipped solo. That's the
actual differentiator at this career stage: most early-career engineers have
tutorials and class projects; this portfolio has production traffic and real
money moving through it.

Facts pulled straight from `projects.js` — no invented metrics:
- **DumuWaks** — live AI-matching technician marketplace, MERN + M-Pesa STK push/payouts, 99+ service types across 12 categories, zero-downtime CI/CD.
- **TomTin ERP** — offline-first POS (Dexie.js/IndexedDB) for water/laundry/retail/LPG businesses, Django 5 + DRF + Postgres, handles Kenyan VAT/income tax + audit trail.
- **KEROMA** — AI recipe platform with multi-provider fallback (Anthropic → OpenAI → Google → mock) so it degrades gracefully instead of breaking.
- **TransitTag/Transii** — IoT matatu transport PWA (C + MQTT/WebSockets hardware side), IP filed.
- **ArdaLink** — satellite/NDVI-driven livestock alert system built for Red Bull Basement, voice calls herders via Azure OpenAI Realtime + Africa's Talking.
- Several more live systems (Emen Engineering site w/ chatbot, e-commerce storefronts, a poultry-cooperative tracker) plus a deep backlog of WIP/planned work (biometric access control, multi-shop inventory).

Four versions below — same person, same facts, different ask at the end. Swap the
`[bracketed]` bits for the specific role/investor/client in front of you.

### Draft A — Job hunting (interviews, career fairs, recruiter calls)

> I'm Munene, a full-stack engineer based in Nairobi. I'm early in my career, but
> instead of just coursework and tutorials, I've spent the last [X months/years]
> building and shipping production software on my own through EMENTECH — a
> technician marketplace with AI matching and live M-Pesa payments, an
> offline-first POS system that four different Kenyan businesses actually use for
> tax-compliant sales, and an AI platform that automatically falls back across
> three model providers so it never just breaks.
>
> That means when I say I know React, Django, or Node, I don't mean "built a
> to-do app with it" — I mean I've debugged it in production, at 2am, when a
> payment webhook failed. I own things end-to-end: frontend, backend, deployment,
> the integrations most junior devs never get close to.
>
> I'm looking for a [role, e.g. junior/mid full-stack] role where a team will let
> me keep owning real problems, ideally somewhere working with [fintech / AI
> products / consumer platforms] — that's where I already have the reps in.

### Draft B — Raising / investors (funding EMENTECH, finding co-founders)

> I'm Munene, founder of EMENTECH, a Nairobi-based studio building software for
> businesses the big platforms skip — technicians who need customers to find
> them, shop owners who need a POS that survives a bad network day.
>
> In under [X] years I've shipped and deployed [N] production systems solo,
> without a team: DumuWaks, an AI-matched technician marketplace live with real
> M-Pesa transactions; TomTin, an offline-first ERP handling Kenyan tax rules for
> four business types; and KEROMA, an AI platform engineered to degrade
> gracefully instead of going down when one provider fails. Every one of these
> is running in production today, not a pitch deck.
>
> What makes EMENTECH different is that I build for the failure case first —
> offline mode, provider fallback, zero-downtime deploys — because that's what
> the market I'm building for actually needs. I'm looking for [seed
> capital / a technical co-founder / early design partners] to take one of these,
> most likely [DumuWaks / TomTin], from one builder's solo output to a team that
> can scale it.

### Draft C — Client / freelance (businesses hiring EMENTECH to build something)

> I'm Munene, I run EMENTECH — I design and build production software for small
> and mid-size businesses, end-to-end: the app, the payments, the deployment, and
> what happens after launch.
>
> I'm not pitching you a portfolio of demos. TomTin is a POS system real business
> owners use daily for water, laundry, retail, and LPG sales, and it still works
> offline and reconciles VAT and income tax automatically. DumuWaks is a live
> marketplace processing real M-Pesa payments end-to-end, from STK push to
> payout. If your business needs software that has to actually work when the
> internet drops or a payment provider hiccups, that's exactly the kind of
> problem I build for by default, not as an afterthought.
>
> If you've got a process that's still running on spreadsheets or WhatsApp, or an
> existing system that breaks under real usage, I'd like to talk about [what
> you're building] and what it'd take to get it live.

### Draft D — General networking / LinkedIn "About" (no fixed ask yet)

> Full-stack engineer based in Nairobi, early in my career but with a portfolio
> that doesn't read that way — through EMENTECH, I've independently designed and
> shipped multiple production systems: an AI-matched marketplace with live M-Pesa
> payments, an offline-first ERP used by real small businesses, and an AI
> platform built to keep working even when a model provider goes down. I care
> about software that survives contact with real users, not just demos — offline
> mode, fallback paths, zero-downtime deploys, by default. Open to full-time
> roles, collaborators, and interesting problems in fintech, AI products, or
> infrastructure — always happy to talk shop.

---

## Open questions (needed to finalize)

These are the last honest gaps — facts only you can supply:

1. **Timeframe** — how long has EMENTECH/this body of work actually taken
   (`[X months/years]` appears in Drafts A and B)? Get this right; it's the
   first thing a sharp listener will sanity-check.
2. **One real number you're comfortable citing** — users, transactions,
   revenue, uptime, business count for TomTin, anything verifiable. All four
   drafts deliberately avoid inventing stats that aren't in the project data.
3. **For Draft A** — the specific role/company type you're currently applying to,
   so the ask lands as targeted rather than generic.
4. **For Draft B** — actual raise stage/amount (or "not raising money yet, just
   looking for a co-founder") and which project is the flagship you'd lead with.
5. **For Draft C** — do you have a rate/engagement model (fixed-price builds,
   retainer, etc.) to fold into the ask, or is that a separate conversation?
