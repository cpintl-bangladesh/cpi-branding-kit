# AI AGENT QUICK-START GUIDE
## CPI-BRANDING-KIT — How to Use This Skill

**For:** Any AI agent, LLM assistant, or AI-powered design tool  
**Purpose:** Produce 100% CPI brand-compliant materials instantly  
**Maintained by:** Mohammad Ariful Islam | ariful@cpintl.org | CPI Bangladesh

---

## STEP 1 — IDENTIFY THE TASK

When a user asks you to create ANY material for CPI (Community Partners International), first determine:

| User Request Type | Files to Load First |
|-------------------|---------------------|
| Any design, poster, graphic, banner | `core/brand-colors.json` + `guidelines/design-elements.md` + `core/logo-rules.md` |
| Word document, report, letter, SOP | `templates/document-template-guide.md` + `core/typography.md` |
| PowerPoint, slide deck, presentation | `templates/presentation-template-guide.md` + `core/brand-colors.json` |
| Social media post, email | `templates/social-media-guide.md` + `assets/copy-blocks.md` |
| Donor report, program report | `templates/report-template-guide.md` + `guidelines/stationery-specs.md` |
| Bangladesh-specific content | `bangladesh_mission/bangladesh-context.md` + `bangladesh_mission/key-contacts.md` |
| Any written content / copy | `guidelines/tone-of-voice.md` + `assets/copy-blocks.md` |
| Name card, letterhead, envelope | `guidelines/stationery-specs.md` + `core/logo-rules.md` |

---

## STEP 2 — APPLY THESE RULES ALWAYS

No matter what material you are creating, these rules are non-negotiable:

### Colors (always from brand-colors.json):
```
Primary Red:    #D91E4D   (CPI Red — main accent)
Primary Purple: #41273B   (CPI Purple — text/headings)
Mid Grey:       #948794   (secondary text, captions)
Light Grey:     #D0C4C5   (backgrounds, panels)
Near-Black:     #2D2926   (body text)
Sec. Purple:    #615E9B   (charts, secondary)
Blue/Teal:      #4298B5   (WASH, water, charts)
White:          #FFFFFF   (backgrounds, reversed logo)
```

### Fonts:
```
Designed/printed materials:  Raleway (Google Fonts, free)
Office/digital/email:        Arial (system font)
```

### Logo:
```
On white/light bg:  Full color logo
On colored bg:      White/reversed logo
Minimum height:     0.5cm (primary) | 0.9cm (secondary)
Clear space:        = width of "P" in logo, on all sides
NEVER:  rotate | distort | recolor | busy background | wrong-colored bg
```

### Tagline (exact text, always):
```
Empower communities. Transform lives.
```

### Organization name:
```
First mention: Community Partners International (CPI)
Subsequent:    CPI
Never:         "the CPI" | lowercase | "community partners"
```

---

## STEP 3 — BANGLADESH MISSION SPECIFICS

When creating materials for the Bangladesh Mission:

```
Contact Person:   Mohammad Ariful Islam
Title:            Health Program Manager (HPM)
Email:            ariful@cpintl.org | healthbgd@cpintl.org
Phone:            +8801723889843

Office Address:
  Community Partners International Bangladesh
  Rabbani Building (4th Floor), Opposite S.K. Tower
  Kurushkul Bypass Road, Cox's Bazar, Bangladesh
  Tel: +880 15 3420 6479

Programs:
  - Health Outreach Programme (HOP) — CHW-based outreach
  - Health Post (HP) Program — Static facility, 200 patients/day
  - HCV Program — WHO 90-90-90 cascade
  - CVD/NCD Program — Hypertension, diabetes screening & care
  - WASH Services
  - Emergency Preparedness

Local Partner: YPSA (Young Power in Social Action)
Target Population: Rohingya refugees, Cox's Bazar camps
Secondary: Bangladeshi host communities
Key Camp Areas: Camp 1W (Blocks A&B), Camp 4 (Blocks D&F)
```

---

## STEP 4 — COMMON OUTPUTS CHEATSHEET

### Creating a Word Report:
```
Font: Arial | Colors: CPI Red headings, CPI Purple subheadings
Header: CPI Logo left + thin CPI Red rule below
Footer: website | email | page number + thin CPI Red rule above
Table header: CPI Purple background, white Arial Bold
See: templates/document-template-guide.md
```

### Creating a PowerPoint Deck:
```
Font: Arial | Dimensions: 1920×1080px (16:9)
Header bar: CPI Red, full-width, 1.5cm, white title inside
Footer: CPI Purple, thin, CPI logo left + website right
Cover: CPI Purple or photo + CPI Red bottom band
See: templates/presentation-template-guide.md
```

### Creating a Social Media Post:
```
Square: 1080×1080px | Landscape: 1200×630px
Logo: always present, white version on dark bg
Fonts: Raleway (if designed) or Arial (if quick digital)
Always include: cpintl.org or www.cpintl.org
See: templates/social-media-guide.md
```

### Writing a Report or Document:
```
Tone: Empowering, respectful, accessible, evidence-based
Never: "beneficiaries", passive victims language
Always: credit local staff, use specific numbers
Use copy blocks from: assets/copy-blocks.md
Follow: guidelines/tone-of-voice.md
```

### Creating a Poster or Infographic:
```
Font: Raleway (designed) — load from Google Fonts
Colors: CPI color palette only
Images: Real community photos in dignity (no stock clichés)
Key shapes: rounded corners, color overlays, watermark
See: guidelines/design-elements.md
```

---

## FILE DIRECTORY (complete)

```
CPI_BRANDING_KIT/
│
├── SKILL.md                              ← Master reference (START HERE)
├── AI_AGENT_QUICKSTART.md                ← This file
│
├── core/
│   ├── brand-colors.json                 ← ALL color values (hex/RGB/CMYK)
│   ├── typography.md                     ← Fonts, sizes, weights
│   └── logo-rules.md                     ← Logo usage, placement, misuse
│
├── guidelines/
│   ├── tone-of-voice.md                  ← Language, messaging, copy standards
│   ├── design-elements.md                ← Shapes, overlays, watermarks, photos
│   └── stationery-specs.md               ← Name card, letterhead, envelopes, folder
│
├── templates/
│   ├── document-template-guide.md        ← Word/PDF/Google Docs
│   ├── presentation-template-guide.md    ← PowerPoint/Google Slides
│   ├── social-media-guide.md             ← Social posts, email newsletters
│   └── report-template-guide.md         ← Program/donor/field reports
│
├── assets/
│   ├── copy-blocks.md                    ← Ready-to-use text and copy
│   ├── icon-descriptions.md             ← Icon system and usage
│   ├── CPI_LOGO_CIRCLE.png
│   ├── CPI_logo_h_r_CMYK__negative black_transparent.ai
│   ├── CPI_logo_h_RGB.png
│   ├── CPI_logo_white.svg
│   ├── How_to_use_YPSA-Logo.md
│   ├── YPSA-LOGO.ai
│   ├── YPSA-LOGO-JPG.jpg
│   ├── YPSA-LOGO-PNG.png
│   └── YPSA_logo_white.svg
│
└── bangladesh_mission/
    ├── bangladesh-context.md             ← Programs, context, data, messaging
    └── key-contacts.md                   ← Directory and contact
```

---

## QUICK COLOR REFERENCE CARD

```
┌─────────────────────────────────────────────────────────────┐
│              CPI BRAND COLOR QUICK REFERENCE                │
├────────────────────┬──────────┬─────────────────────────────┤
│ Name               │ Hex      │ Use                         │
├────────────────────┼──────────┼─────────────────────────────┤
│ CPI Red            │ #D91E4D  │ Accents, headers, icons, CTA│
│ CPI Purple (dark)  │ #41273B  │ Logo, headings, dark panels │
│ CPI Mid Grey       │ #948794  │ Secondary text, captions    │
│ CPI Light Grey     │ #D0C4C5  │ Backgrounds, tints          │
│ CPI Near-Black     │ #2D2926  │ Body text                   │
│ CPI Purple (sec.)  │ #615E9B  │ Charts, secondary accent    │
│ CPI Blue/Teal      │ #4298B5  │ WASH, water, secondary data │
│ White              │ #FFFFFF  │ Backgrounds, reversed logo  │
└────────────────────┴──────────┴─────────────────────────────┘
```
