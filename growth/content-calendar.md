# Content calendar — first 4 weeks

One main piece a week, cut for every channel. Numbers only from Admin → Traction, with a date. Consent for any person shown.

| Week | Main piece (YouTube) | LinkedIn | X | Facebook (DumuWaks page) |
| --- | --- | --- | --- | --- |
| 1 | "Why I'm building DumuWaks" (3–4 min, talking to camera) | Post A1 | Thread X1 | Post F1 (Swahili + English) |
| 2 | "How escrow on M-Pesa works" (5–7 min screen walkthrough) | Post A2 (links the write-up) | Thread X2 | Post F2 explainer graphic |
| 3 | "DumuWaks in 3 minutes" booking demo | Post A3: first pilot numbers | Clip + numbers | Fundi spotlight #1 |
| 4 | "A fundi's day" (field video, with consent) | Post A4: lessons from 20 interviews | Thread: 5 things fundis told me | Fundi spotlight #2 + referral offer |

## Drafts

### A1 — LinkedIn, week 1
I'm building the digital rails for Kenya's informal service businesses, starting with one problem.

Finding a fundi runs on word of mouth. Paying one is a risk for both sides: the customer fears unfinished work, the fundi fears not being paid.

DumuWaks fixes the second part first. The customer pays the agreed price by M-Pesa, the money is held in escrow, and the fundi is paid when the job is done.

Over the next 12 weeks I'm piloting it in one area with electricians, plumbers and appliance repairers — and publishing the numbers every week, good or bad.

Follow along: munene1212.github.io/building.html

### X1 — thread, week 1
1/ Building DumuWaks in public: verified fundis + M-Pesa escrow. Numbers every Friday.
2/ The problem: customers fear unfinished work, fundis fear unpaid work. Both are about money changing hands at the wrong time.
3/ The fix: pay first, but into escrow. Released when the customer confirms, or 3 days after completion if nobody complains.
4/ Pilot: one area, 3 trades, every fundi onboarded in person. Live numbers → munene1212.github.io/building.html

### F1 — Facebook, week 1
**Kiswahili:** Umewahi kulipa fundi kabla kazi ikamilike, ukakosa kuona tena? Au fundi, umewahi kufanya kazi bila kulipwa? DumuWaks inashikilia malipo yako ya M-Pesa hadi kazi ikamilike. Tunaanza na mafundi wa umeme, maji na vifaa vya nyumbani. dumuwaks.co.ke
**English:** Ever paid a fundi upfront and never seen them again? Or done a job and never been paid? DumuWaks holds your M-Pesa payment until the job is done. Starting with electricians, plumbers and appliance repairers. dumuwaks.co.ke

### A2 — LinkedIn, week 2
Money code fails in boring ways: a webhook arrives twice, a customer double-taps "Pay", a network call times out halfway.

For DumuWaks' M-Pesa escrow I used four rules: an append-only ledger reconciled every morning; the payment provider as the source of truth; exactly-once status changes; and a payout recorded before it's sent, so a timeout goes to a human instead of being paid twice.

Full write-up: munene1212.github.io/escrow-on-mpesa.html

### A3 / A4 — outlines
- A3: first pilot numbers (dated), one chart screenshot, one thing that broke and how it was fixed.
- A4: the 3 most common problems from 20 interviews, 2 quotes (with permission), what changed in the product.

## Video scripts

### V1 — "Why I'm building DumuWaks" (3–4 min)
1. Hook (10 s): "Have you ever paid a fundi and not seen them again?"
2. Who I am (20 s): electrical engineer, founder of Emen, building for how Kenya works.
3. The problem (60 s): both sides' risk; a short story from an interview (with permission).
4. The idea (60 s): verified fundis + escrow; show the booking screen with *Held*.
5. The pilot (40 s): one area, three trades, numbers every Friday.
6. Call to action (15 s): fundis — join; customers — book your next repair; link.

### V2 — "How escrow on M-Pesa works" (5–7 min, screen)
Walk through the diagram from the write-up: STK push → escrow wallet → release / refund / dispute. Then the four rules with one real example each. End on the write-up link.

### V3 — "DumuWaks in 3 minutes" (demo)
Phone screen recording: search → choose a verified fundi → fundi accepts → pay → *Held* → job done → confirm → fundi paid. Voice-over, no music under speech, captions on.
