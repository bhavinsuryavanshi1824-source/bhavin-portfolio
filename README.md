# ⚡ Bhavin Suryavanshi — Personal Portfolio Website

> **AI Engineer | Full-Stack Developer | Cybersecurity Enthusiast**  
> *B.Tech Computer Science Engineering (IoT & Cybersecurity) — LNCT Bhopal (2023–2027)*

A production-ready, dark-themed personal portfolio website engineered with Next.js 14 App Router, TypeScript, Tailwind CSS, and Lucide React. Designed with an editorial, cyber-minimalist aesthetic inspired by modern Awwwards developer sites, Linear, and Raycast.

---

## 🌐 100% Free Deployment on Render (Static Site)

This website is configured for **Render's Free Static Site Hosting** using Next.js Static Export (`output: "export"`). It does not require a paid web service, server runtime, or subscription.

### Render Configuration Summary

| Setting | Value |
| :--- | :--- |
| **Service Type** | **Static Site** (Free forever) |
| **Build Command** | `npm install && npm run build` |
| **Publish Directory** | `out` |
| **Branch** | `main` |

### Step-by-Step GitHub & Render Deployment Guide

#### 1. Push to GitHub
If you haven't created a GitHub repository yet:
1. Go to [github.com/new](https://github.com/new) and create a new repository (e.g., `bhavin-portfolio`).
2. Run the following commands in this directory:
   ```bash
   git remote add origin https://github.com/bhavinsuryavanshi1824-source/bhavin-portfolio.git
   git branch -M main
   git push -u origin main
   ```

#### 2. Deploy on Render
1. Open [https://render.com/](https://render.com/) and sign in (or create a free account).
2. Click **New +** in the top right corner and select **Static Site**.
3. Connect your GitHub account and select your `bhavin-portfolio` repository.
4. Fill in the deployment settings:
   - **Name:** `bhavin-suryavanshi` (or your preferred site name)
   - **Branch:** `main`
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `out`
5. Click **Create Static Site**.
6. Render will automatically run the build, export the static files to `out`, and provide you with a live URL (e.g., `https://bhavin-suryavanshi.onrender.com`).

---

## 🌟 Highlights & Key Features

- **Editorial Dark Aesthetic:** Deep obsidian (`#07090E`), elevated card surfaces (`#0E131F`), electric violet (`#8B5CF6`) and cyber cyan (`#38BDF8`) accents.
- **Single Source of Truth (`src/data/portfolioData.ts`):** Easily configure personal information, GitHub handle, contact details, skills, certifications, and projects in one file without touching UI code.
- **Flagship Case Study Modal:** Deep-dive architectural breakdown for **SecureScope AI** (AI-powered security assessment platform) showcasing client-server flow, Nmap execution, rule-based risk engines, and remediation output.
- **Interactive Technical Matrix:** Categorized competencies across Programming, Generative AI & LLMs, Frameworks, Databases, Cybersecurity, and Tools (no meaningless percentage bars).
- **Curriculum & Verified Certifications:** Cisco Networking Academy (Modern AI, Junior Cybersecurity Analyst, Cybersecurity Essentials) and Udemy credentials with issuer verification badges.
- **Open-Source & GitHub Showcase:** Real repository showcase, language breakdown, and resilient fallback states.
- **Interactive Contact & Direct Reach:** Contact form with real-time validation, spam protection notice, one-click email/phone copy, and native `mailto:` launcher.
- **Interactive Resume Modal:** In-browser CV viewer with one-click download feature.
- **Accessibility & Performance:** 100% pre-rendered static content, reduced-motion compliance, semantic HTML5, and responsive down to mobile viewports.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | Next.js 14 (App Router) with Static Export (`output: "export"`) |
| **Language** | TypeScript (Strict Mode) |
| **Styling** | Tailwind CSS with custom theme extensions |
| **Icons** | Lucide React |
| **Animations** | Framer Motion & CSS custom keyframes |
| **Hosting Compatibility** | Render Free Static Site, Vercel, Netlify, GitHub Pages |

---

## 📂 Project Architecture

```
d:\portfolio website\
├── out/                             # Generated static website for Render
│   ├── index.html                   # Pre-rendered static landing page
│   ├── 404.html                     # Pre-rendered error page
│   ├── resume/                      # Static resume assets
│   └── _next/                       # Static JS, CSS, and media assets
├── public/
│   └── resume/
│       └── Bhavin_Suryavanshi_Resume.txt
├── src/
│   ├── app/
│   │   ├── globals.css              # Custom themes, glow utilities, animations
│   │   ├── layout.tsx               # Root layout, OpenGraph & SEO metadata
│   │   └── page.tsx                 # Single-page assembled portfolio
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx           # Blur header with mobile drawer
│   │   │   └── Footer.tsx           # Editorial signoff & social connect
│   │   ├── sections/
│   │   │   ├── Hero.tsx             # Striking introduction & CTAs
│   │   │   ├── About.tsx            # Split layout, education & pillars
│   │   │   ├── Skills.tsx           # Category filtered technical matrix
│   │   │   ├── FeaturedProjects.tsx # Flagship spotlight & project cards
│   │   │   ├── CaseStudyModal.tsx   # SecureScope AI deep dive modal
│   │   │   ├── Certifications.tsx   # Cisco & Udemy verifiable credentials
│   │   │   ├── GithubSection.tsx    # GitHub profile & repository showcase
│   │   │   └── Contact.tsx          # Direct contact & validated form
│   │   └── ui/
│   │       ├── AmbientBackground.tsx# Subtle grid and radial gradients
│   │       ├── Badge.tsx            # Reusable pill badge
│   │       └── ResumeModal.tsx      # CV viewer and download modal
│   ├── data/
│   │   ├── portfolioData.ts         # Central single source of truth
│   │   └── caseStudies.ts           # Architectural case study data
│   └── lib/
│       ├── types.ts                 # TypeScript type interfaces
│       └── utils.ts                 # Classname utility helpers
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.mjs                  # Configured with output: 'export'
└── .gitignore
```

---

## 🚀 Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Generate Static Export (`out/`):**
   ```bash
   npm run build
   ```
