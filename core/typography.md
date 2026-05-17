# CPI Typography System
## Community Partners International — Official Font Standards

**Source:** CPI Brand Identity & Standards Designer's Guide (Official)

---

## PRIMARY TYPEFACE — RALEWAY
> Use Raleway for ALL external-facing printed and designed communications materials unless a system font is required.

**Download:** Google Fonts — https://fonts.google.com/specimen/Raleway  
**License:** Open Font License (free for commercial & nonprofit use)

### Raleway Weight Hierarchy

| Use Case | Weight | Style | Size Guidance |
|----------|--------|-------|---------------|
| Primary Title / Hero Headline | Bold (700) | Upright | 24–48pt |
| Section Heading | Semi-Bold (600) | Upright | 16–24pt |
| Sub-heading / Label | Light (300) | Upright | 12–16pt |
| Body / Paragraph | Regular (400) | Upright | 9–12pt |
| Highlight / Emphasis | Bold (700) | Upright | Same as body, in **CPI Red (#D91E4D)** |
| Tagline | Medium (500) | Upright | Proportional to context |
| Name Card Name | Bold (700) | Upright | 8pt |
| Name Card Details | Regular (400) + Semi-Bold (600) | Upright | 6pt |
| Letterhead Details | Regular (400) + Semi-Bold (600) | Upright | 6.5pt |
| Folder Details | Regular (400) + Semi-Bold (600) | Upright | 9pt |

### Raleway Color Rules
- **Headings:** CPI Purple `#41273B` on white; OR White `#FFFFFF` on dark/colored backgrounds
- **Body text:** CPI Black `#2D2926` or CPI Purple `#41273B`
- **Highlighted text:** CPI Red `#D91E4D` Bold (never italic for highlight)
- **Subheadings / Captions:** CPI Mid Grey `#948794`
- **Tagline text:** CPI Purple, CPI Red, OR White (on brand color backgrounds)

---

## SYSTEM FONT — ARIAL
> Use Arial for ALL digital/screen contexts: email, Microsoft Office (Word, PowerPoint, Excel), Google Docs, and any platform requiring consistent display across multiple devices.

**Always available on:** Windows, macOS, Linux  
**No download required**

### Arial Weight Hierarchy

| Use Case | Weight | Color |
|----------|--------|-------|
| Title / Heading | Bold | CPI Purple `#41273B` or CPI Red `#D91E4D` |
| Body / Paragraph | Regular | CPI Black `#2D2926` |
| Highlight / Emphasis | Bold | CPI Red `#D91E4D` |

### Arial Usage Examples
- **Microsoft Word reports & letters** → Arial 12pt Regular body; Arial 16–20pt Bold headings
- **PowerPoint presentations** → Arial 28–40pt Bold titles; Arial 18–24pt body
- **Email signatures** → Arial 10–11pt Regular; Bold for name (CPI Purple or Black)
- **Excel data tables** → Arial 10pt; Bold headers

---

## FONT PAIRING RULES

### For Designed/Printed Materials (Raleway only):
```
HEADLINE          → Raleway Bold, 28–48pt, CPI Purple or White
Sub-headline      → Raleway Semi-Bold, 18–24pt, CPI Red
Section label     → Raleway Light, 12–14pt, CPI Mid Grey
Body paragraph    → Raleway Regular, 10–12pt, CPI Black
Pull quote        → Raleway Semi-Bold Italic, 14–16pt, CPI Purple
Caption           → Raleway Regular, 8–9pt, CPI Mid Grey
Highlight word    → Raleway Bold, same size, CPI Red
```

### For Digital/Office Materials (Arial):
```
Document Title    → Arial Bold, 20–28pt, CPI Purple #41273B
Section Heading   → Arial Bold, 14–16pt, CPI Red #D91E4D
Body Text         → Arial Regular, 11–12pt, #2D2926
Table Headers     → Arial Bold, 10pt, White on CPI Purple background
Caption/Footer    → Arial Regular, 9pt, CPI Mid Grey #948794
Hyperlinks        → Arial Regular, 11pt, CPI Blue #4298B5
```

---

## TYPOGRAPHY DON'TS
- ❌ Never use decorative or script fonts (Comic Sans, Papyrus, Brush Script, etc.)
- ❌ Never use ALL CAPS for body text (only acceptable for short labels/buttons)
- ❌ Never use font sizes below 6pt in any printed material
- ❌ Never use Raleway Italic for body text — use Regular for readability
- ❌ Never mix Raleway and Arial in the same designed piece
- ❌ Never change the logotype font (it is not Raleway — it is part of the logo artwork)
- ❌ Never use bold red highlight on dark backgrounds (use white bold instead)

---

## LINE SPACING & LAYOUT

| Element | Line Spacing | Letter Spacing |
|---------|-------------|---------------|
| Headlines (24pt+) | 1.1–1.2x | –0.5 to 0 |
| Subheadings (14–20pt) | 1.2–1.3x | 0 |
| Body text (10–12pt) | 1.4–1.6x | 0 to +0.2 |
| Captions (8–9pt) | 1.3x | +0.3 |
| All-caps labels | 1.0x | +1.0 to +2.0 |

---

## QUICK-COPY FONT CSS (for web/digital designers)

```css
/* CPI Primary Font Stack */
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap');

:root {
  --font-primary: 'Raleway', sans-serif;
  --font-system: 'Arial', Helvetica, sans-serif;
  
  --color-purple: #41273B;
  --color-red: #D91E4D;
  --color-grey-mid: #948794;
  --color-grey-light: #D0C4C5;
  --color-black: #2D2926;
  --color-purple-sec: #615E9B;
  --color-blue: #4298B5;
}

h1, h2, h3 { font-family: var(--font-primary); font-weight: 700; color: var(--color-purple); }
h2 { font-weight: 600; color: var(--color-red); }
p  { font-family: var(--font-primary); font-weight: 400; color: var(--color-black); }
.highlight { font-weight: 700; color: var(--color-red); }
.tagline { font-weight: 500; font-family: var(--font-primary); }
```
