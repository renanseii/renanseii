# Emerson Renan Seii - Professional Career Portfolio & Resume Landing Page

A modern, high-performance landing page presenting Emerson Renan Seii's career in Business Intelligence, Microsoft Fabric, and Power Platform. Built with the requested `#f5f5ff` background and `#6c6aab` accent palette, complete with dual-language support (Portuguese and English), quantifiable impact metrics, interactive project filters, contact mechanisms, and an instant downloadable CV with print preview.

## User Review & Critical Decisions

> [!IMPORTANT]
> The following key decisions were confirmed through interactive clarification and incorporated into the design:
> - **Portfolio Presentation**: Modern interactive portfolio combining headline impact KPIs (55% order delay reduction, 50% ETL speedup, 60% dashboard refresh boost) with interactive skill and tool filtering across roles.
> - **Contact & Outreach**: Dual-channel contact center featuring a validated message form that generates an instant formatted email draft alongside direct 1-click WhatsApp and LinkedIn actions.
> - **CV Download Experience**: Integrated client-side PDF document generator and print preview modal matching the active language (Portuguese or English), mirroring the attached official resume.

- **Confirmed Decision 1**: Dual-language toggle (PT-BR / EN-US) switching all profile narrative, company roles, educational credentials, and downloadable CV views dynamically.
- **Confirmed Decision 2**: Brand color system strictly adhering to background `#f5f5ff`, primary text and brand accent `#6c6aab`, supported by deep readable slate for high-contrast typography (WCAG AA compliant).

---

## 1. Overview & Core Concept

- **What It Does**: Presents Emerson Renan Seii's professional profile as a Business Intelligence & Data Engineering / Power Platform Specialist. Visitors can explore his career trajectory across AlmapBBDO, Ajinomoto, and Certiphic, examine key technological competencies, review quantified business outcomes, trigger direct outreach via email and WhatsApp, and generate or print a formatted PDF CV in Portuguese or English.
- **Target Audience / Persona**: Tech recruiters, engineering managers, BI heads, and enterprise stakeholders seeking senior expertise in Microsoft Fabric, Power BI, SQL, Python, Power Apps, and data pipelines.
- **Key Value**: Replaces static paper resumes with an interactive, verified showcase of end-to-end analytics engineering, reducing friction for hiring managers while providing instant downloadable documents.

---

## 2. User Experience & Visual Design

### Key User Flows

1. **Header & Language Switch**: Visitor lands on the page and can immediately switch between Portuguese (`PT`) and English (`EN`) using the clean language flag toggle in the top bar. Smooth section jumps take them to Experience, Impact, Skills, Education, and Contact.
2. **Hero & Professional Identity**: Displays Emerson's headline, role, location (Santo André - SP, Brasil), executive summary, quick action buttons ("Get in Touch", "Download CV"), and a clean professional avatar container.
3. **Quantifiable Impact Metrics**: A focused metrics bar displaying verified milestones from Emerson's career:
   - **-55%** in delayed orders via Power BI Supply Chain models (Ajinomoto)
   - **-50%** in data loading latency by migrating to Fabric Notebooks (AlmapBBDO)
   - **-60%** dashboard refresh and processing time (Certiphic)
   - **1 hr/day** saved in manual feedback entry through Power Apps
   - **4+ Years** delivering end-to-end BI and data architecture
4. **Interactive Career Experience & Technology Filter**:
   - Filter bar: All Technologies, Power BI, Microsoft Fabric, Power Apps & Automate, SQL & Python, SAP & SharePoint.
   - Chronological role cards (AlmapBBDO, Ajinomoto, Certiphic) with bulleted achievements, company context, and clean unboxed technology tags.
5. **Education, Courses & Languages**:
   - Academic degree: Bacharelado em Engenharia de Produção (Centro Universitário FEI, 2017–2022).
   - Certified professional courses: Power Apps, Python, Power BI, Advanced Excel.
   - Language proficiencies: Portuguese (Native), English (Advanced), Spanish (Intermediate).
6. **Downloadable CV & Print Preview**:
   - Clicking "Download CV" opens a high-fidelity modal showing a formatted, print-optimized replica of Emerson's CV matching the active language.
   - Includes one-click `window.print()` trigger and direct download action.
7. **Contact Form & Quick Connect**:
   - Contact form with name, email, company, and message.
   - Interactive options to dispatch via email client or initiate a direct WhatsApp conversation (+55 11 94175-1989) with prefilled message context.
   - Quick copy buttons for email (`emersonrenan.seii@gmail.com`) and phone.

### Visual Identity & Theme

- **Color Palette & Atmosphere**:
  - Background: `#f5f5ff` (soft lavender mist neutral canvas)
  - Primary Accent & Brand: `#6c6aab` (refined slate violet for buttons, active indicators, borders, and brand accents)
  - Surfaces: `#ffffff` for elevated cards with soft borders (`rgba(108, 106, 171, 0.15)`) and subtle elevation
  - Text: Deep `#2d2b52` for crisp headline readability and `#6c6aab` for subtitles/secondary text
- **Typography & Scale**:
  - Sans-serif typography (`Plus Jakarta Sans` / clean geometric system sans) for clarity and executive poise.
  - Tabular numerals (`tabular-nums font-mono`) for all quantitative KPIs and timeframes.
- **Anti-Slop Discipline**:
  - Zero static pill boxes for metadata: categories and dates rendered with subtle dot/dash separators (`·`).
  - No fake execution counters or arbitrary scores; all numbers are authentic metrics from Emerson's resume.
  - Strict Top Bar Contract with clean 3-zone layout: Brand wordmark, concise navigation links, and primary action.

---

## 3. Key Product Decisions & Trade-Offs

- **Bilingual Content Architecture**:
  - *Chosen Approach*: Comprehensive in-memory localized dictionary (`pt` and `en`) containing all verified text from Page 1 (Portuguese) and Page 2 (English) of Emerson's resume.
  - *Why*: Guarantees instant, zero-latency toggling without external translation API delays or inaccurate machine translations.
- **Client-Side Printable CV Engine**:
  - *Chosen Approach*: A dedicated print-stylesheet component and browser-native PDF print dialog alongside downloadable text/HTML document formatting.
  - *Why*: Allows pixel-perfect print-to-PDF rendering on any desktop or mobile device without external server dependencies or broken PDF canvas fonts.
- **Dual Direct Outreach Handlers**:
  - *Chosen Approach*: Contact form supporting both formatted email dispatch (`mailto:` with encoded subject/body) and direct WhatsApp API redirection (`https://wa.me/5511941751989`).
  - *Why*: Empowers recruiters who prefer instant messaging as well as corporate HR teams using formal email.

---

## 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                          App Container                                 │
│  - Active Language State ('pt' | 'en')                                 │
│  - Technology Filter State ('all' | 'powerbi' | 'fabric' | ...)        │
│  - CV Preview Modal State (open / closed)                              │
│  - Toast Notification State (copied / message sent)                    │
└────────────────────────────────────┬───────────────────────────────────┘
                                     │
       ┌─────────────────────────────┼─────────────────────────────┐
       ▼                             ▼                             ▼
┌──────────────┐             ┌──────────────┐              ┌──────────────┐
│  TopNavBar   │             │ Hero Section │              │ Impact KPIs  │
│ - Brand Name │             │ - Summary    │              │ - 55% Orders │
│ - 4 Nav Links│             │ - CTAs       │              │ - 50% ETL    │
│ - Lang Switch│             │ - Avatar     │              │ - 60% Refresh│
└──────────────┘             └──────────────┘              └──────────────┘
       │                             │                             │
       ▼                             ▼                             ▼
┌──────────────┐             ┌──────────────┐              ┌──────────────┐
│ Career List  │             │ Education &  │              │ Contact &    │
│ - Role Cards │             │ Courses      │              │ Direct Links │
│ - Tech Filter│             │ - FEI Degree │              │ - Form       │
│ - Achievements             │ - Languages  │              │ - WhatsApp   │
└──────────────┘             └──────────────┘              └──────────────┘
                                     │
                                     ▼
                      ┌──────────────────────────────┐
                      │    CV Print / PDF Modal      │
                      │ - Formatted localized resume │
                      │ - Print to PDF / Save        │
                      └──────────────────────────────┘
```

### Data Model & Localized Content

- `ResumeData`: Typed structure containing:
  - `personal`: Name, title, email, phone, location, LinkedIn.
  - `about`: Executive summary in PT and EN.
  - `kpis`: Metrics with numerical value, unit, and localized description.
  - `experiences`: Array of company, role, period, bullet achievements, and technologies.
  - `education`: University, degree, timeframe.
  - `courses`: Array of courses with date ranges.
  - `languages`: Language items with proficiency ratings.
  - `skills`: Categorized technical toolsets (BI, Cloud/ETL, Automation, Languages, Databases).

### Verification Plan

- Check TypeScript compilation with `compile_applet`.
- Verify responsive layout across mobile and desktop (1440px).
- Verify instant switching between Portuguese and English across all components.
- Verify technology filtering updates the displayed career items dynamically.
- Verify contact form submission and WhatsApp link generation.
- Verify CV preview modal and print formatting.
