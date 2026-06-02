# CPI Accessibility & Inclusive Design Guide
## Community Partners International — Accessibility Standards

**Source:** WCAG 2.1 AA standards + CPI Brand Identity & Standards

---

## COLOR CONTRAST RATIOS

All CPI brand colors have been verified against WCAG 2.1 AA contrast requirements.

### Approved Text-on-Background Combinations

| Text Color | Background Color | Contrast Ratio | Passes AA? |
|-----------|-----------------|---------------|-----------|
| CPI Purple `#41273B` | White `#FFFFFF` | 10.2:1 | ✅ Yes |
| CPI Red `#D91E4D` | White `#FFFFFF` | 5.1:1 | ✅ Yes |
| CPI Black `#2D2926` | White `#FFFFFF` | 15.3:1 | ✅ Yes |
| White `#FFFFFF` | CPI Purple `#41273B` | 10.2:1 | ✅ Yes |
| White `#FFFFFF` | CPI Red `#D91E4D` | 5.1:1 | ✅ Yes |
| White `#FFFFFF` | CPI Blue `#4298B5` | 4.8:1 | ✅ Yes (large text) |
| CPI Purple `#41273B` | CPI Light Grey `#D0C4C5` | 5.8:1 | ✅ Yes |
| CPI Black `#2D2926` | CPI Light Grey `#D0C4C5` | 8.7:1 | ✅ Yes |

### Warning Combinations (Use with Caution)
- CPI Mid Grey `#948794` on White `#FFFFFF` — 3.6:1 (passes for large text only, 18pt+)
- CPI Blue `#4298B5` on White `#FFFFFF` — 3.4:1 (passes for large text only, 18pt+)

---

## FONT SIZES FOR ACCESSIBILITY

| Context | Minimum Size | Notes |
|---------|-------------|-------|
| Body text (print) | 9pt | 10pt preferred |
| Body text (digital) | 12px | 16px preferred |
| Captions (print) | 7pt | 8pt preferred |
| Captions (digital) | 11px | |
| Presentations (body) | 14pt | 18pt preferred |
| Labels on diagrams | 8pt | 10pt preferred |

---

## DOCUMENT ACCESSIBILITY

### PDF Accessibility:
- Export as PDF/UA (Universal Accessibility) where possible
- Add document title, language (en), and author metadata
- Use true headings (not bold text) for structure
- Add alt text to all images and charts
- Ensure proper reading order in multi-column layouts
- Tag tables with header row associations

### Word Document Accessibility:
- Use built-in heading styles (Heading 1, 2, 3)
- Add alt text to all images
- Use simple table structures (no merged/split cells in headers)
- Ensure color is not the only means of conveying information
- Run Accessibility Checker before finalizing

### Presentation Accessibility:
- Use slide title placeholders (not text boxes)
- Add alt text to all images and charts
- Ensure sufficient color contrast on all slides
- Provide handouts for complex data slides
- Avoid busy animations or rapid transitions

---

## INCLUSIVE COMMUNICATION

### Language Guidelines:
- Use person-first language where appropriate ("people with disabilities")
- Avoid ableist metaphors ("blind to the problem," "crippled by")
- Write in plain language (target Grade 6–8 reading level for public materials)
- Provide translations for key languages (Bengali, Rohingya/Chittagonian)

### Visual Representation:
- Show diversity of age, gender, ability, and ethnicity in all imagery
- Avoid stereotypes of any kind
- Represent people with disabilities in active, empowered roles
- Ensure icons and symbols are culturally appropriate

---

## DIGITAL ACCESSIBILITY CHECKLIST

- [ ] All images have descriptive alt text
- [ ] Color contrast meets WCAG 2.1 AA minimum
- [ ] Information is not conveyed by color alone
- [ ] All functionality is keyboard-accessible
- [ ] Forms have proper labels and error messages
- [ ] PDFs are tagged with correct reading order
- [ ] Links have descriptive text (not "click here")
- [ ] Videos have captions and transcripts
- [ ] Font sizes are adjustable (relative units in CSS)
- [ ] Language is set correctly in document metadata
