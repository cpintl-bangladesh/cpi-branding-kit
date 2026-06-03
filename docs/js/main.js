// CPI Branding Kit - Main JS

const BRAND_COLORS = [
  { name: 'CPI Red', hex: '#D91E4D', rgb: '217, 30, 77', cmyk: '10, 100, 65, 0', detail: 'Primary accent. Use for CTAs, headers, icons, section titles.' },
  { name: 'CPI Purple', hex: '#41273B', rgb: '65, 39, 59', cmyk: '55, 80, 35, 55', detail: 'Logo, headings, dark panel backgrounds, table headers.' },
  { name: 'CPI Mid Grey', hex: '#948794', rgb: '148, 135, 148', cmyk: '52, 47, 35, 5', detail: 'Secondary text, captions, photo credits, footer text.' },
  { name: 'CPI Light Grey', hex: '#D0C4C5', rgb: '207, 199, 204', cmyk: '18, 19, 13, 0', detail: 'Panel backgrounds, table alternate rows, light tints.' },
  { name: 'CPI Black', hex: '#2D2926', rgb: '45, 41, 38', cmyk: '0, 0, 0, 87', detail: 'Body text on light backgrounds.' },
  { name: 'CPI Purple Sec', hex: '#615E9B', rgb: '97, 94, 155', cmyk: '37, 39, 0, 39', detail: 'Charts, secondary accent, data visualization.' },
  { name: 'CPI Blue/Teal', hex: '#4298B5', rgb: '66, 152, 181', cmyk: '63, 16, 0, 29', detail: 'WASH, water, data series 3, hyperlinks.' },
  { name: 'White', hex: '#FFFFFF', rgb: '255, 255, 255', cmyk: '0, 0, 0, 0', detail: 'Backgrounds, reversed logo, text on dark panels.' },
];

function renderColorSwatches() {
  const grid = document.getElementById('colorsGrid');
  if (!grid) return;
  grid.innerHTML = BRAND_COLORS.map(c => {
    const textColor = isLight(c.hex) ? '#000000' : '#FFFFFF';
    return `<div class="color-swatch" data-hex="${c.hex}" style="background:${c.hex};color:${textColor}">
      <div class="copy-badge">Click to copy</div>
      <div class="color-name">${c.name}</div>
      <div class="color-hex">${c.hex}</div>
      <div class="color-detail">${c.detail}</div>
    </div>`;
  }).join('');

  // Attach click handlers
  grid.querySelectorAll('.color-swatch').forEach(swatch => {
    swatch.addEventListener('click', function() {
      const hex = this.dataset.hex;
      if (!hex) return;
      navigator.clipboard.writeText(hex).then(() => {
        this.classList.add('copied');
        setTimeout(() => this.classList.remove('copied'), 1000);
      }).catch(() => {
        const ta = document.createElement('textarea');
        ta.value = hex;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        this.classList.add('copied');
        setTimeout(() => this.classList.remove('copied'), 1000);
      });
    });
  });
}

function isLight(hex) {
  const c = hex.replace('#','');
  const r = parseInt(c.substr(0,2), 16);
  const g = parseInt(c.substr(2,2), 16);
  const b = parseInt(c.substr(4,2), 16);
  return (r*299 + g*587 + b*114) / 1000 > 155;
}

document.addEventListener('DOMContentLoaded', function() {
  renderColorSwatches();

  // Mobile hamburger menu
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }

  // Close mobile menu on link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
      navLinks.classList.remove('active');
    });
  });
});
