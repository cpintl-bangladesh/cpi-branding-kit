# AI AGENT QUICKSTART
## CPI-BRANDING-KIT v2.0.0 — Instant Task Routing for AI Agents

---

## STEP 1 — IDENTIFY YOUR TASK → LOAD THESE FILES

| Task Type | Load First |
|-----------|-----------|
| Any design / poster / graphic / banner | `core/brand-colors.json` + `guidelines/design-elements.md` + `core/logo-rules.md` |
| Word document / SOP / letter / field guide | `templates/document-template-guide.md` + `core/typography.md` |
| PowerPoint / slide deck | `templates/presentation-template-guide.md` + `core/brand-colors.json` |
| Social media post / email newsletter | `templates/social-media-guide.md` + `assets/copy-blocks.md` |
| Donor report / program report | `templates/report-template-guide.md` + `guidelines/stationery-specs.md` |
| Bangladesh Mission content (programs, data) | `bangladesh_mission/bangladesh-context.md` + `bangladesh_mission/camp-data.yml` |
| Any written copy / messaging | `guidelines/tone-of-voice.md` + `core/brand-voice.yml` + `assets/copy-blocks.md` |
| Name card / letterhead / envelope | `guidelines/stationery-specs.md` + `core/logo-rules.md` |
| Email signature | `templates/email-signature-templates.md` |
| M&E indicators / data report | `bangladesh_mission/program-indicators.yml` + `schemas/indicator-schema.json` |
| AI-assisted design (with prompts) | `prompts/design-prompt-templates.yml` |
| AI-assisted report writing | `prompts/report-prompt-templates.yml` |
| Social media with hashtags | `prompts/social-prompt-templates.yml` + `assets/hashtag-library.yml` |

---

## STEP 2 — MANDATORY RULES (ALWAYS APPLY, NO EXCEPTIONS)

### Colors:
```
CPI Red:          #D91E4D  ← primary accent, headers, icons
CPI Purple:       #41273B  ← logo, headings, dark panels
CPI Mid Grey:     #948794  ← secondary text, captions
CPI Light Grey:   #D0C4C5  ← backgrounds, panel fills
CPI Black:        #2D2926  ← body text
CPI Purple (sec): #615E9B  ← charts, secondary
CPI Blue/Teal:    #4298B5  ← WASH, charts series 3
White:            #FFFFFF  ← backgrounds, reversed logo
```

### Fonts:
```
Designed / printed → Raleway (Bold/SemiBold/Regular/Light)  [Google Fonts, free]
Office / email / digital → Arial (Bold/Regular)              [system font]
```

### Logo:
```
On white background → full color logo
On any colored background → white reversed logo
Minimum height: 0.5cm (primary) | 0.9cm (secondary)
Clear space: equal to x-width of "P" in logo on all 4 sides
NEVER rotate | stretch | recolor | place on busy/photo backgrounds
```

### Language:
```
Tagline (exact): "Empower communities. Transform lives."
Org name: "Community Partners International (CPI)" first mention, then "CPI"
Never: "the CPI" | "beneficiaries" | passive-victim language
Always: empowering, dignity-centered, evidence-based
```

---

## STEP 3 — BANGLADESH MISSION CONTEXT

```yaml
contact_person: Mohammad Ariful Islam
title: Health Program Manager (HPM)
email_1: ariful@cpintl.org
email_2: healthbgd@cpintl.org
phone: +8801723889843

office:
  name: Community Partners International Bangladesh Mission
  address: Rabbani Building (4th Floor), Opposite S.K. Tower, Kurushkul Bypass Road, Cox's Bazar, Bangladesh
  phone: +880 15 3420 6479
  email: healthbgd@cpintl.org

programs:
  - Health Outreach Programme (HOP)
  - Health Post (HP) — up to 200 patients/day
  - HCV (Hepatitis C) Program — WHO 90-90-90 cascade
  - CVD/NCD Program
  - WASH Services
  - Emergency Preparedness

local_partner: YPSA (Young Power in Social Action)
facility_uid: HF-418 (DHIS2)
patient_identifier: FCN (Family Composition Number)
target_population: Rohingya refugees, Cox's Bazar + host communities
camp_focus: Camp 1W (Blocks A, B), Camp 4 (Blocks D, F)
rohingya_population: ~970,000+
operation_since: 2017
```

---

## STEP 4 — OUTPUT FORMAT RULES

### For Documents (Word/PDF):
- Header: CPI logo left + thin CPI Red rule below
- Footer: website | email | page number + thin CPI Red rule above
- Table headers: CPI Purple `#41273B` background, white Arial Bold
- Section titles: Arial Bold, CPI Red `#D91E4D`
- Body: Arial Regular 11pt, CPI Black `#2D2926`

### For Presentations (PowerPoint):
- Dimensions: 1920×1080px (16:9)
- Header bar: CPI Red, full-width, 1.5cm, white title Arial Bold inside
- Footer bar: thin CPI Purple, CPI logo left, website right
- Cover: CPI Purple full fill OR photo + CPI Red bottom band

### For Social Media:
- Square: 1080×1080px | Landscape: 1200×630px
- Always include CPI logo (white reversed on dark backgrounds)
- Always include: www.cpintl.org
- Tone: empowering, dignified, accessible

### For Reports:
- Follow structure: Executive Summary → Context → Achievements → Indicators Table → Challenges → Field Story → Next Steps
- File naming: `CPI-BGD-[PROGRAM]-[TYPE]-[YYYYMM]-v[n].pdf`

---

## STEP 5 — QUICK COLOR-TYPOGRAPHY CSS

```css
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap');
:root {
  --cpi-red:         #D91E4D;
  --cpi-purple:      #41273B;
  --cpi-grey-mid:    #948794;
  --cpi-grey-light:  #D0C4C5;
  --cpi-black:       #2D2926;
  --cpi-purple-sec:  #615E9B;
  --cpi-blue:        #4298B5;
  --font-primary: 'Raleway', sans-serif;
  --font-system:  'Arial', Helvetica, sans-serif;
}
h1 { font-family: var(--font-primary); font-weight: 700; color: var(--cpi-purple); }
h2 { font-family: var(--font-primary); font-weight: 600; color: var(--cpi-red); }
p  { font-family: var(--font-primary); font-weight: 400; color: var(--cpi-black); }
.highlight { font-weight: 700; color: var(--cpi-red); }
```
