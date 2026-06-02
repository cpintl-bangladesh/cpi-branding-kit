# CPI-BRANDING-KIT — Master Skill Reference
## Community Partners International | Complete Brand Identity & Design System

**Skill ID:** `CPI-BRANDING-KIT`  
**Version:** 1.0.0  
**Entry Point for AI Agents:** See `AI_AGENT_QUICKSTART.md`  
**Developer:** Mohammad Ariful Islam | Health Program Manager | CPI Bangladesh Mission  
**Contact:** ariful@cpintl.org | healthbgd@cpintl.org | +8801723889843  
**Updated:** June 2026

---

## ORGANIZATION IDENTITY

| Field | Value |
|-------|-------|
| Full Name | Community Partners International |
| Short Name | CPI |
| Type | 501(c)(3) International Nonprofit NGO |
| Founded | 1998 |
| Tagline | *Empower communities. Transform lives.* |
| Mission | Community Partners International empowers vulnerable communities in Asia affected by conflict, disasters, and poverty to meet their essential health, humanitarian, and sustainable development needs. |
| Vision | Communities in Southeast Asia have the resources, capacity and information necessary to meet their own health, learning and development needs. |
| Website | www.cpintl.org |
| Email | info@cpintl.org |
| Facebook | communitypartnersinternational |
| Countries | Myanmar, Bangladesh, Thailand, Nepal |
| People Served | 3+ million annually |
| Local Workforce | 97% from countries of operation |
| Program Spend | 95% of expenses go directly to programs |

---

## THREE IMPACT AREAS

**Health:** *"We empower communities to build and strengthen essential health services and access good nutrition to achieve health for all."*

**Humanitarian Relief:** *"We empower communities to prepare and respond to humanitarian emergencies caused by conflict and natural disasters."*

**Well-Being:** *"We empower communities to sustainably improve their quality of life on their own terms."*

---

## BRAND COLORS — QUICK REFERENCE

| Name | Hex | Use |
|------|-----|-----|
| CPI Red | `#D91E4D` | Accent, headers, icons, CTAs |
| CPI Purple | `#41273B` | Logo, headings, dark panels |
| CPI Mid Grey | `#948794` | Secondary text, captions |
| CPI Light Grey | `#D0C4C5` | Backgrounds, table alternates |
| CPI Black | `#2D2926` | Body text |
| CPI Purple (Secondary) | `#615E9B` | Charts, secondary accent |
| CPI Blue/Teal | `#4298B5` | WASH, water, data series 3 |
| White | `#FFFFFF` | Backgrounds, reversed logo |

→ Full color specs (Pantone, CMYK, RGB, HSL): `core/brand-colors.json`

---

## TYPOGRAPHY — QUICK REFERENCE

| Context | Font | Weight |
|---------|------|--------|
| All designed/printed materials | **Raleway** (Google Fonts) | Bold/SemiBold/Regular |
| Office, email, Word, PowerPoint | **Arial** (system font) | Bold/Regular |
| Tagline | Raleway Medium | 500 |
| Body text | Raleway/Arial Regular | 400 |
| Headings | Raleway/Arial Bold | 700 |
| Highlight | Raleway/Arial Bold | 700, in **CPI Red** |

→ Full specs: `core/typography.md`

---

## LOGO — QUICK REFERENCE

| Rule | Detail |
|------|--------|
| Primary logo (horizontal) | Default for most contexts |
| With tagline | Official letterheads and stationery |
| Secondary logo (vertical) | Space-constrained contexts |
| White/reversed version | On any CPI-brand colored background |
| Min size (primary) | 0.5 cm |
| Min size (secondary) | 0.9 cm |
| Clear space | = x-width of "P" in logo on all sides |
| Approved backgrounds | White, CPI Purple, Red, Grey, Blue, Black only |

→ Full rules: `core/logo-rules.md`

---

## NEVER DO (CRITICAL RULES)

1. ❌ Never alter logo colors, proportions, rotation, or font
2. ❌ Never place logo on busy/photo backgrounds or unapproved colors
3. ❌ Never use fonts other than Raleway (designed) or Arial (office)
4. ❌ Never use colors outside the approved CPI palette
5. ❌ Never depict communities as passive recipients or victims
6. ❌ Never refer to people as "beneficiaries" — use "communities" or specific terms
7. ❌ Never write "the CPI" — write "CPI" or "Community Partners International"

---

## FILE DIRECTORY

```
CPI_BRANDING_KIT/
│
├── skill.yml                              ← AI skill manifest (YAML)
├── metadata.yml                           ← Skill metadata for agent discovery
├── SKILL.md                               ← This master reference
├── AI_AGENT_QUICKSTART.md                 ← AI agent routing guide
├── README.md                              ← GitHub readme
├── .gitignore                             ← Git ignore rules
│
├── core/
│   ├── brand-colors.json                  ← All color values (hex/RGB/CMYK/Pantone/HSL)
│   ├── brand-voice.yml                    ← Official statements, vocabulary, tone rules
│   ├── typography.md                      ← Font system, weights, sizes
│   └── logo-rules.md                      ← Logo variations, placement, misuse
│
├── guidelines/
│   ├── tone-of-voice.md                   ← Language, messaging, brand voice
│   ├── design-elements.md                 ← Shapes, overlays, watermarks, photography
│   ├── stationery-specs.md                ← Name card, letterhead, envelope, folder
│   └── accessibility.md                   ← Color contrast, inclusive design
│
├── templates/
│   ├── document-template-guide.md         ← Word/PDF/Google Docs
│   ├── presentation-template-guide.md     ← PowerPoint/Google Slides
│   ├── social-media-guide.md              ← Social posts, email newsletters
│   ├── report-template-guide.md           ← Monthly/quarterly/annual reports
│   ├── email-signature-templates.md       ← Email signatures (HTML + plain text)
│   └── field-tools-guide.md               ← KoboToolbox, CHW tools, field forms
│
├── assets/
│   ├── copy-blocks.md                     ← Ready-to-use brand copy
│   ├── icon-descriptions.md               ← Icon system and usage
│   ├── hashtag-library.yml                ← Approved social media hashtags
│   └── abbreviations-glossary.yml         ← Standard abbreviations and terms
│
├── bangladesh_mission/
│   ├── bangladesh-context.md              ← Programs, population, operational data
│   ├── key-contacts.md                    ← Contact directory
│   ├── program-indicators.yml             ← M&E indicators by program
│   └── camp-data.yml                      ← Camp population and geographic data
│
├── prompts/
│   ├── design-prompt-templates.yml        ← AI prompts for design tasks
│   ├── report-prompt-templates.yml        ← AI prompts for documents/reports
│   └── social-prompt-templates.yml        ← AI prompts for social content
│
├── examples/
│   ├── example-report-structure.md        ← Annotated example report
│   ├── example-slide-structure.md         ← Annotated example slide deck
│   └── example-social-posts.md            ← Example social media posts
│
└── schemas/
    ├── indicator-schema.json              ← Standard indicator data schema
    ├── report-metadata.json               ← Report metadata schema
    └── contact-schema.json                ← Contact record schema
```
