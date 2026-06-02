// CPI Branding Kit - Main JS

const BRAND_COLORS = [
  { name: 'Brand Magenta', hex: '#D91E4D', rgb: '217, 30, 77', cmyk: '0, 86, 65, 15', detail: 'Primary brand color. Use for CTAs, accents, headlines.' },
  { name: 'Deep Navy', hex: '#000000', rgb: '0, 0, 0', cmyk: '0, 0, 0, 100', detail: 'Primary text and dark backgrounds.' },
  { name: 'Vibrant Teal', hex: '#7BDCB5', rgb: '123, 220, 181', cmyk: '44, 0, 18, 14', detail: 'Secondary accent. Use sparingly for highlights.' },
  { name: 'Coral Pink', hex: '#F78DA7', rgb: '247, 141, 167', cmyk: '0, 43, 32, 3', detail: 'Soft accent for cards and illustrations.' },
  { name: 'Warm Orange', hex: '#FF6900', rgb: '255, 105, 0', cmyk: '0, 59, 100, 0', detail: 'Energy accent. Use for alerts and highlights.' },
  { name: 'Secondary Blue', hex: '#007CBA', rgb: '0, 124, 186', cmyk: '100, 33, 0, 27', detail: 'Link color. Use for hyperlinks and info accents.' },
  { name: 'Off White', hex: '#EEEEEE', rgb: '238, 238, 238', cmyk: '0, 0, 0, 7', detail: 'Subtle background for alternating sections.' },
  { name: 'Medium Gray', hex: '#DDDDDD', rgb: '221, 221, 221', cmyk: '0, 0, 0, 13', detail: 'Borders and dividers.' },
  { name: 'Dark Gray', hex: '#ABABC3', rgb: '171, 171, 195', cmyk: '12, 12, 0, 24', detail: 'Secondary text and captions.' },
  { name: 'Near Black', hex: '#222222', rgb: '34, 34, 34', cmyk: '0, 0, 0, 87', detail: 'Body text on light backgrounds.' },
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

  // Code block copy buttons
  document.querySelectorAll('.code-block').forEach(block => {
    const btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.textContent = 'Copy';
    btn.addEventListener('click', function() {
      const code = block.textContent.replace('Copy', '').trim();
      navigator.clipboard.writeText(code).then(() => {
        btn.textContent = 'Copied!';
        setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
      });
    });
    block.appendChild(btn);
  });
});
