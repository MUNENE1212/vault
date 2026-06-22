/* EMENTECH portfolio project catalog.
   Edit entries here to re-order, re-tag, or add/remove projects.
   Statuses: "live" | "wip" | "sleeping" | "planning"
   Tiers control ranking inside each section (lower = earlier). */

const PROJECTS = [
  /* ============================================================
     LIVE & DEPLOYED — production systems running on the VPS
     ============================================================ */
  {
    name: "DumuWaks",
    path: "ementech-portfolio/dumuwaks",
    status: "live",
    tier: 1,
    tagline: "AI-powered technician marketplace.",
    desc: "Full-stack MERN platform connecting skilled technicians with customers across Kenya. AI matching, real-time messaging, M-Pesa STK push and B2C payouts, 99+ service types in 12 categories, escrow booking-fee system.",
    stack: ["MERN", "M-Pesa Daraja", "Socket.IO", "JWT", "MongoDB 7", "React 18", "TypeScript", "Vite", "Tailwind", "PM2", "Nginx", "GitHub Actions"],
    url: "https://dumuwaks.ementech.co.ke",
    repo: "https://github.com/MUNENE1212/dumuwaks",
    notes: "Production. Zero-downtime CI/CD on master."
  },
  {
    name: "TomTin ERP",
    path: "ementech-portfolio/tomtin",
    status: "live",
    tier: 2,
    tagline: "Multi-business POS for water, laundry, retail, LPG.",
    desc: "Mobile-first, offline-first PWA. Owner / Accountant / Operator roles. IndexedDB via Dexie.js, Django 5 + DRF + Postgres, Chart.js analytics, VAT 16% + Kenya income tax, audit trail.",
    stack: ["React 18", "Vite", "Django 5", "DRF", "PostgreSQL 15", "Dexie.js", "Chart.js", "CSS Modules"],
    url: "https://tomtin.ementech.co.ke",
    notes: "Live. Frontend complete; backend modules still landing endpoints."
  },
  {
    name: "Baitech Storefront",
    path: "newbaitech",
    status: "live",
    tier: 3,
    tagline: "E-commerce storefront + admin.",
    desc: "Next.js 16 + TS storefront with native MongoDB driver, Cloudinary media, custom JWT auth, and a WhatsApp checkout flow.",
    stack: ["Next.js 16", "TypeScript", "MongoDB", "Cloudinary", "JWT", "WhatsApp"],
    url: "https://baitech.co.ke",
    notes: "v2.0.0. Pair with baitech-dashboard for pricing engine."
  },
  {
    name: "Emen Engineering (ementech.co.ke)",
    path: "ementech/ementech-website",
    status: "live",
    tier: 4,
    tagline: "Mother company website + chat assistant.",
    desc: "React 19 + Vite + TS SPA, Express + Socket.IO API, MongoDB Atlas, Postfix/Dovecot mail, OpenAI-powered chatbot.",
    stack: ["React 19", "Vite", "Express", "Socket.IO", "MongoDB Atlas", "Postfix", "OpenAI"],
    url: "https://ementech.co.ke",
    repo: "https://github.com/MUNENE1212/ementech-website",
    notes: "Production. Security audit + remediation complete."
  },
  {
    name: "Baitech Infra",
    path: "baitech-infra",
    status: "live",
    tier: 5,
    tagline: "VPS deployment configs for 69.164.244.165.",
    desc: "Evolution API WhatsApp CRM, OpenClaw AI PA, Typebot, InfluxDB + Grafana. Docker Compose + Nginx + systemd.",
    stack: ["Docker Compose", "Nginx", "InfluxDB", "Grafana", "ZhiPu", "OpenAI"],
    repo: "https://github.com/MUNENE1212/baitech-infra",
    notes: "Production. Watch the CREDENTIALS.md — rotate regularly."
  },
  {
    name: "PLP Portfolio (cyberpunk)",
    path: "PLP/PLP_portfolio",
    status: "live",
    tier: 6,
    tagline: "Earlier cyberpunk personal site.",
    desc: "Static HTML portfolio + Dockerfile, deployed at munene1212.github.io. The spiritual predecessor to this index.",
    stack: ["HTML", "CSS", "Docker"],
    url: "https://munene1212.github.io",
    repo: "https://github.com/MUNENE1212/MUNENE1212.github.io",
    notes: "Superseded by this vault but still served."
  },
  {
    name: "Image Generator",
    path: "image_generator",
    status: "live",
    tier: 7,
    tagline: "Identity-preserving AI portraits.",
    desc: "Streamlit app — 6 generation strategies × SDXL/FLUX backbones, parallel Strategy Lab, automated metrics (ArcFace/SigLIP/LAION/LPIPS), Experiments sweeps with CSV export, LoRA training via Replicate.",
    stack: ["Python 3.12", "Streamlit", "Pydantic v2", "DuckDB", "Replicate", "Fal.ai"],
    url: "https://image-generator.ementech.co.ke",
    repo: "https://github.com/MUNENE1212/image-generator",
    notes: "Live. Research-grade comparison surface."
  },

  /* ============================================================
     IN THE FORGE — actively worked or planned for 2026
     ============================================================ */
  {
    name: "TransitTag / Transii (INVENTING)",
    path: "INVENTING",
    status: "wip",
    tier: 1,
    tagline: "IoT matatu transport PWA — ride · pay · vibe.",
    desc: "tt_monitor (C + libmosquitto + libwebsockets) and tt_transit (PWA). M-Pesa flows, music voting, gamification. Demo mode at ?demo=1. IP filed.",
    stack: ["C", "libmosquitto", "libwebsockets", "cJSON", "PWA", "M-Pesa"],
    repo: "https://github.com/MUNENE1212/transittag",
    notes: "Hardware + PWA. Demo build available."
  },
  {
    name: "ArdaLink Engine",
    path: "JHUB/ardalink-engine",
    status: "wip",
    tier: 2,
    tagline: "Biophysical brain — satellite + NDVI scoring.",
    desc: "Python 3.12 + FastAPI. geopandas + networkx for journey planning, Google Earth Engine, Postgres. 8-doc docs/ tree.",
    stack: ["Python 3.12", "FastAPI", "geopandas", "networkx", "Earth Engine", "Postgres"],
    repo: "https://github.com/MUNENE1212/ardalink-engine",
    notes: "Active MVP build for Red Bull Basement."
  },
  {
    name: "ArdaLink AI",
    path: "JHUB/ardalink-ai",
    status: "wip",
    tier: 3,
    tagline: "Voice calls herders when NDVI drops >15%.",
    desc: "Node 24 + TS + Express 5 monorepo. Azure OpenAI Realtime, Africa's Talking, Cosmos DB, pnpm workspaces.",
    stack: ["Node 24", "TypeScript", "Express 5", "Azure OpenAI Realtime", "Africa's Talking", "Cosmos DB", "pnpm"],
    repo: "https://github.com/MUNENE1212/ardalink-ai",
    notes: "Sister repos: ardalink-api, ardalink-web."
  },
  {
    name: "ArdaLink API",
    path: "JHUB/ardalink-api",
    status: "wip",
    tier: 4,
    tagline: "Standalone voice/intelligence pipeline API.",
    desc: "Node 24 + TS + Express 5. OpenAPI contract-first design.",
    stack: ["Node 24", "TypeScript", "Express 5", "OpenAPI"],
    repo: "https://github.com/MUNENE1212/ardalink-api",
    notes: "Standalone API for the ArdaLink family."
  },
  {
    name: "ArdaLink Web",
    path: "JHUB/ardalink-web",
    status: "wip",
    tier: 5,
    tagline: "Operator dashboard + public Talk voice app.",
    desc: "React 19 + Vite 7 + Tailwind. pnpm workspaces monorepo.",
    stack: ["React 19", "Vite 7", "Tailwind", "pnpm workspaces"],
    repo: "https://github.com/MUNENE1212/ardalink-web",
    notes: "Companion UI for ArdaLink."
  },
  {
    name: "iPhone OnlineDuka Shop",
    path: "2026/iphone.onlineduka.shop",
    status: "wip",
    tier: 6,
    tagline: "iPhone e-com storefront + admin (74 seeded SKUs).",
    desc: "Next.js 16, Prisma + PostgreSQL, Cloudinary, Tailwind v4, iron-session. Vitest + Playwright. KES / USD / RMB.",
    stack: ["Next.js 16", "Prisma", "PostgreSQL", "Tailwind v4", "Cloudinary", "iron-session"],
    repo: "https://github.com/MUNENE1212/ionline-phones",
    notes: "Seeded. Tests scaffolded. Fork of upstream."
  },
  {
    name: "OnlineDuka (multi-shop)",
    path: "2026/onlineduka",
    status: "wip",
    tier: 7,
    tagline: "Multi-shop e-commerce parent platform.",
    desc: "Architectural umbrella for per-shop storefronts (parent of iphone.onlineduka.shop). Nginx + ecosystem config.",
    stack: ["Next.js", "Prisma", "Nginx"],
    repo: "https://github.com/MUNENE1212/onlineduka",
    notes: "Now on GitHub (private) — initial commit + ARCHITECTURE.md."
  },
  {
    name: "Baitech Pricing Dashboard",
    path: "2026/baitech-dashboard",
    status: "wip",
    tier: 8,
    tagline: "Reverse-engineer selling price from margin target.",
    desc: "Next.js 16 + SQLite + Prisma, Tailwind v4, shadcn/ui, Recharts, NextAuth. Handles WHT, ToT, VAT for Kilimall / Jumia / Own-site channels.",
    stack: ["Next.js 16", "SQLite", "Prisma", "Tailwind v4", "shadcn/ui", "Recharts", "NextAuth"],
    repo: "https://github.com/MUNENE1212/baitech-dashboard",
    notes: "Login: admin@baitech.co.ke / baitech2026."
  },
  {
    name: "Kuku Egg Tracker",
    path: "2026/zebray/kuku-egg-tracker",
    status: "live",
    tier: 8,
    tagline: "Poultry/egg production tracker w/ Firestore realtime.",
    desc: "Next.js 16, Firebase Firestore (client-only), bcrypt PIN login per member. Daily egg logs, sales, expenses, loans, weekly contributions, meeting minutes, forum.",
    stack: ["Next.js 16", "Firebase Firestore", "Tailwind CSS v4", "Recharts", "bcryptjs", "PWA"],
    url: "https://zebra.ementech.co.ke",
    repo: "https://github.com/MUNENE1212/kuku-egg-tracker",
    notes: "Live at zebra.ementech.co.ke. Firebase project: zebra-youth."
  },
  {
    name: "KEROMA",
    path: "keroma",
    status: "live",
    tier: 7,
    tagline: "Recipes that remember. African heritage recipe AI.",
    desc: "Heritage-modern recipe platform (Next.js 15 full-stack). Marketing site, 12 curated recipes w/ JSON-LD, 4 long-form heritage articles, AI generation w/ multi-provider fallback (Anthropic → OpenAI → Google → mock), M-Pesa premium via IntaSend, full design system (Fraunces + Inter + JetBrains Mono).",
    stack: ["Next.js 15", "TypeScript", "Tailwind v3", "Fraunces", "Inter", "Vercel AI SDK", "Mongoose", "NextAuth v5", "IntaSend"],
    url: "https://keroma.ementech.co.ke",
    repo: "https://github.com/MUNENE1212/keroma",
    notes: "Brand rebuild of KE-ROMA-AI. Works out of the box (mock AI). Live AI + payments feature-flagged until keys supplied."
  },
  {
    name: "Jaseci Refill System",
    path: "2026/jaseci-refill-system",
    status: "wip",
    tier: 10,
    tagline: "Refill system written in Jaseci.",
    desc: ".jac source with companion frontend. PROJECT_PLAN, VERIFICATION, and SIMPLIFIED_UI docs.",
    stack: ["Jaseci (.jac)", "Frontend"],
    repo: "https://github.com/MUNENE1212/jaseci-refill-system",
    notes: "Now on GitHub (private)."
  },
  {
    name: "GreenRent",
    path: "PROJ25/green_rent",
    status: "wip",
    tier: 11,
    tagline: "AI-powered flexible rental mgmt.",
    desc: "Rent Wallet micro-savings, virtual tours, IntaSend payments. Node 20 + Express, Mongo + Mongoose, Next.js 14 + TS, Redis.",
    stack: ["Node 20", "Express", "MongoDB", "Mongoose", "Next.js 14", "TypeScript", "Redis", "IntaSend"],
    repo: "https://github.com/MUNENE1212/green_rent",
    notes: "Phase 1 partial."
  },
  {
    name: "Prompt Wizard",
    path: "PROJ25/prompt-wizard",
    status: "wip",
    tier: 12,
    tagline: "Tiered SaaS prompt-engineering platform.",
    desc: "Guided / Enhancement / Quick modes. Python 3.11 + FastAPI, MongoDB 7, Redis, multi-provider (OpenAI / Claude / Gemini).",
    stack: ["Python 3.11", "FastAPI", "MongoDB 7", "Redis", "OpenAI", "Claude", "Gemini"],
    repo: "https://github.com/MUNENE1212/prompt_wizard",
    notes: "Full PROMPT_WIZARD_DOCUMENTATION.md."
  },
  {
    name: "Agentic Rev",
    path: "PROJ25/Agentic_rev",
    status: "wip",
    tier: 13,
    tagline: "Agentic AI experiments w/ Gradio UI + tool calls.",
    desc: "Python + Gradio + Google APIs. Tool-call orchestration playground.",
    stack: ["Python", "Gradio", "Google APIs"],
    notes: "WARNING: credentials.json + token.pickle checked in. Rotate immediately."
  },
  {
    name: "Multi-Business Project",
    path: "multi_bs_project",
    status: "sleeping",
    tier: 13.5,
    tagline: "Multi-business mgmt platform (Python + React).",
    desc: "Python backend + React frontend. Bundled Python 3.11.0 source.",
    stack: ["Python 3.11", "React", "venv"],
    repo: "https://github.com/MUNENE1212/PROJ-0",
    notes: "WARNING: README opens with <<<<<<< HEAD merge conflict. Resolve before reuse."
  },
  {
    name: "KE-ROUMA (PLP hack2)",
    path: "PLP/hack2",
    status: "wip",
    tier: 14,
    tagline: "African heritage AI recipe app.",
    desc: "FastAPI + MongoDB Atlas + IntaSend. Multi-AI (OpenAI / Gemini / HF / Cohere). React Native client.",
    stack: ["FastAPI", "MongoDB Atlas", "IntaSend", "React Native", "OpenAI", "Gemini"],
    repo: "https://github.com/MUNENE1212/KE-ROMA-AI",
    notes: "Hackathon build."
  },
  {
    name: "SafeVoice (PLP hack3)",
    path: "PLP/hack3",
    status: "wip",
    tier: 15,
    tagline: "GBV safety platform — hold-to-record SOS.",
    desc: "MERN + Vite PWA + Tailwind + Zustand. Whisper transcription, Twilio SMS, community fund voting, LLM caching.",
    stack: ["MERN", "Vite", "PWA", "Tailwind", "Zustand", "Whisper", "Twilio"],
    notes: "DEPLOYMENT.md + LLM_CACHING_GUIDE.md included."
  },
  {
    name: "Baitech LED Branding",
    path: "ADVERTISEMENT/baitech-led-branding",
    status: "wip",
    tier: 16,
    tagline: "64×16 LED matrix shop display.",
    desc: "ESP32 + FastLED C++ firmware. Wokwi simulation. Python + pygame simulator. 6 animation patterns for 11 services.",
    stack: ["ESP32", "FastLED", "C++", "Wokwi", "Pygame"],
    repo: "https://github.com/MUNENE1212/baitech-led-branding",
    notes: "Logo: assets/baitech_logo.png."
  },
  {
    name: "RGB Branding",
    path: "ADVERTISEMENT/rgb-branding",
    status: "wip",
    tier: 17,
    tagline: "Companion RGB LED branding project.",
    desc: "Firmware + simulator. PROJECT_STATUS.md tracks current state.",
    stack: ["ESP32", "Firmware", "Simulator"],
    repo: "https://github.com/MUNENE1212/rgb-branding",
    notes: "Companion to baitech-led-branding."
  },
  {
    name: "Email Daemon",
    path: "email-daemon",
    status: "wip",
    tier: 18,
    tagline: "Single-file email monitor script.",
    desc: "Node emailMonitor.js. Operational script for inbox automation.",
    stack: ["Node.js"],
    notes: "No git repo. Quick utility."
  },

  /* ============================================================
     ON THE BLUEPRINT — locked plans, not yet built
     ============================================================ */
  {
    name: "Access Control (2026)",
    path: "2026/access_control",
    status: "planning",
    tier: 1,
    tagline: "Multi-tenant biometric access + surveillance.",
    desc: "FastAPI + Postgres 16 + pgcrypto, Qdrant, Jetson Orin edge, InsightFace. Duress-PIN, anti-passback. 23 ADRs, full mvp/plan/architecture/bom/security/legal docs.",
    stack: ["FastAPI", "Postgres 16", "pgcrypto", "Qdrant", "InsightFace", "Jetson Orin"],
    repo: "https://github.com/MUNENE1212/biometric-access-control",
    notes: "2026-09-30 deadline. Zero code yet — docs only."
  },
  {
    name: "Pejan Inventory (multi-shop)",
    path: "2026/pejan_inv",
    status: "planning",
    tier: 2,
    tagline: "Multi-business mgmt + delivery storefront for 3 shops.",
    desc: "Retail / gas+water / cyber under one platform. PLAN.md is locked. Phase 0 blocked on owner-supplied creds.",
    stack: ["Django 5", "DRF", "Postgres", "React", "Vite", "Next.js", "Celery", "Redis"],
    repo: "https://github.com/MUNENE1212/pejan-inventory",
    notes: "Locked plan. mockup.html available. Now on GitHub."
  },

  /* ============================================================
     SLEEPING GIANTS — dormant repos waiting to be woken
     ============================================================ */
  {
    name: "ZYG",
    path: "ementech-portfolio/ZYG",
    status: "sleeping",
    tier: 1,
    tagline: "Placeholder for the next big bet.",
    desc: "Empty directory under the portfolio. Reserved slot — the shape of what's next is undecided.",
    stack: ["TBD"],
    notes: "Empty. Awaiting thesis."
  },
  {
    name: "SmartBiz POS",
    path: "PROJ25/smartbiz",
    status: "sleeping",
    tier: 2,
    tagline: "POS / business manager v1 + v2.",
    desc: "Python + Mongo. Notes interleaved as Pasted image*.png — original design sketches.",
    stack: ["Python", "MongoDB"],
    notes: "Superseded by TomTin ERP. Archive-grade."
  },
  {
    name: "Liquor Store",
    path: "PROJ25/liquor_store-main",
    status: "sleeping",
    tier: 3,
    tagline: "Liquor store mgmt system.",
    desc: "Python. Has sec.txt, new_modules, rejects folders. May contain useful modules.",
    stack: ["Python"],
    notes: "WARNING: sec.txt — review before sharing."
  },
  {
    name: "Baitech Catalogue",
    path: "PROJ25/Baitech_catalogue",
    status: "sleeping",
    tier: 4,
    tagline: "Static catalogue HTML + zip.",
    desc: "HTML catalogue page for the Baitech range. Likely superseded by newbaitech storefront.",
    stack: ["HTML"],
    notes: "Archive."
  },
  {
    name: "Zach Academix",
    path: "PROJ25/zach_academix",
    status: "sleeping",
    tier: 5,
    tagline: "Static academic writing services site.",
    desc: "HTML static site for academic writing services.",
    stack: ["HTML"],
    notes: "Niche project. Archive."
  },
  {
    name: "DEKILA",
    path: "PROJ25/DEKILA",
    status: "sleeping",
    tier: 6,
    tagline: "Brand folder.",
    desc: "logo.jpg present. Brand assets in waiting.",
    stack: ["Brand"],
    notes: "Brand-only. No product code."
  },
  {
    name: "Prudcr",
    path: "PROJ25/prudcr",
    status: "sleeping",
    tier: 7,
    tagline: "YouTube downloader + audio filter experiments.",
    desc: "Pydub-based audio processing. downloadyt.py + speech processing pipeline. output_audio_filtered.wav present.",
    stack: ["Python", "Pydub", "YouTube"],
    notes: "Experiments folder. Salvage the audio pipeline."
  },
  {
    name: "PROJ25 Portfolio",
    path: "PROJ25/portfolio",
    status: "sleeping",
    tier: 8,
    tagline: "HTML portfolio + admin.",
    desc: "Earlier portfolio iteration with admin panel. Superseded.",
    stack: ["HTML"],
    notes: "Archive."
  },
  {
    name: "Online Shops (PROJ25)",
    path: "PROJ25/online_shops",
    status: "sleeping",
    tier: 9,
    tagline: "Empty placeholder.",
    desc: "Empty directory — likely an early multi-shop idea that landed in onlineduka.",
    stack: ["TBD"],
    notes: "Empty."
  },
  {
    name: "WS2812B.pretty (KiCad)",
    path: "ADVERTISEMENT/WS2812B.pretty",
    status: "sleeping",
    tier: 10,
    tagline: "KiCad footprint library for WS2812B LEDs.",
    desc: "WS2812B.kicad_mod + Schematic-Symbol + push.sh helper.",
    stack: ["KiCad"],
    notes: "Reusable library. Pair with baitech-led-branding."
  },
  {
    name: "Political Campaign '27 (MCA Vaite)",
    path: "ADVERTISEMENT/political-campaigns/2027-mca-vaite",
    status: "sleeping",
    tier: 11,
    tagline: "Political campaign assets folder.",
    desc: "Branding + collateral for upcoming MCA Vaite campaign.",
    stack: ["Brand assets"],
    notes: "Activate closer to cycle."
  },
  {
    name: "Embedded Labs",
    path: "Embedded systems/embedded_labs",
    status: "sleeping",
    tier: 12,
    tagline: "Embedded systems lab work.",
    desc: "lab1 only. Coursework-grade.",
    stack: ["Embedded C"],
    notes: "Coursework archive."
  },
  {
    name: "Polar (codes + Proteus)",
    path: "polar",
    status: "sleeping",
    tier: 13,
    tagline: "Polar codes (Matlab) + Proteus trial.",
    desc: "Academic EEE work. trial1PEJAN Proteus project, nested WORK folder.",
    stack: ["Matlab", "Proteus"],
    notes: "Coursework archive."
  },
  {
    name: "EEE Coursework",
    path: "eee",
    status: "sleeping",
    tier: 14,
    tagline: "EEE heavy coursework dump.",
    desc: "Proteus projects, ASM, .pdsprj, .exe outputs. SUN PROJ + FINAL-MICROP-2-PROJECTS.rar.",
    stack: ["Proteus", "ASM"],
    notes: "Archive. Search before discard."
  },
  {
    name: "DSAI Notebooks",
    path: "DSAI",
    status: "sleeping",
    tier: 15,
    tagline: "Data Science / ML notebooks.",
    desc: "Churn, Fraudster, ASL, RAG pipeline notebooks. JupyterLab caches.",
    stack: ["Jupyter", "Python", "ML"],
    notes: "Pick best notebooks for portfolio highlights."
  },
  {
    name: "JKUAT Coursework",
    path: "JKUAT",
    status: "sleeping",
    tier: 16,
    tagline: "JKUAT coursework archive.",
    desc: "PDFs, zips, lecture notes.",
    stack: ["Docs"],
    notes: "Reference only."
  },
  {
    name: "WORK (mixed personal)",
    path: "WORK",
    status: "sleeping",
    tier: 17,
    tagline: "Mixed personal/work subdirs.",
    desc: "ENGINEER (photos+projects), FACIAL RECOGNITION (empty), FUNDI (firmware tools + d.light manuals), POS (xlsx + login.py + pos), SIGNET (TV station spreadsheets), TREASURY Y&A, ZEBRA CLASSIC (Proteus + Zebra doc), baiweb (HTML drafts).",
    stack: ["Mixed"],
    notes: "Triage — promote useful modules, archive rest."
  },
  {
    name: "Online.shop (2026)",
    path: "2026/online.shop",
    status: "sleeping",
    tier: 18,
    tagline: "Empty placeholder.",
    desc: "Empty directory — likely an earlier onlineduka stub.",
    stack: ["TBD"],
    notes: "Empty."
  },
  {
    name: "VPS Infra (2026)",
    path: "2026/vps_infra",
    status: "sleeping",
    tier: 19,
    tagline: "Two design docs, no infra yet.",
    desc: "INFRASTRUCTURE_BLUEPRINT.md + STUDY_NOTES.md. Reference material.",
    stack: ["Docs"],
    repo: "https://github.com/MUNENE1212/vps-infra",
    notes: "Now on GitHub (private) — design notes + blueprint."
  },
  {
    name: "Content Guru",
    path: "2026/Content_guru",
    status: "sleeping",
    tier: 20,
    tagline: "Articles + docs only.",
    desc: "Just articles/ and docs/ subdirs.",
    stack: ["Docs"],
    notes: "Likely source material for content drops."
  },
  {
    name: "KCSE Past Papers",
    path: "2026/KCSE",
    status: "sleeping",
    tier: 21,
    tagline: "KCSE past papers.",
    desc: "PDF reference archive.",
    stack: ["PDF"],
    notes: "Reference only."
  },
  {
    name: "Quantum Env",
    path: "QUANTUM",
    status: "sleeping",
    tier: 22,
    tagline: "Empty quantum_env placeholder.",
    desc: "Just quantum_env subdir.",
    stack: ["TBD"],
    notes: "Empty."
  },
  {
    name: "Biophysical Engine (legacy)",
    path: "JHUB/biophysical-engine",
    status: "sleeping",
    tier: 23,
    tagline: "Legacy ArdaLink umbrella (superseded).",
    desc: "Docs only. References the canonical ardalink-engine + ardalink-ai repos.",
    stack: ["Docs"],
    notes: "Superseded by ardalink-engine. Keep as archive."
  }
];

const STATUS_ORDER = ["live", "wip", "sleeping", "planning"];
const STATUS_LABEL = {
  live: "Live",
  wip: "In Forge",
  sleeping: "Sleeping",
  planning: "On Blueprint"
};
const STATUS_TONE = {
  live: "live",
  wip: "wip",
  sleeping: "sleeping",
  planning: "planning"
};

if (typeof module !== "undefined") {
  module.exports = { PROJECTS, STATUS_ORDER, STATUS_LABEL, STATUS_TONE };
}