// CPI Branding Kit - Main JS

document.addEventListener('DOMContentLoaded', function() {
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

  // Color swatch click to copy hex
  document.querySelectorAll('.color-swatch').forEach(swatch => {
    swatch.addEventListener('click', function() {
      const hex = this.dataset.hex || this.querySelector('.color-hex')?.textContent?.trim();
      if (hex) {
        navigator.clipboard.writeText(hex).then(() => {
          this.classList.add('copied');
          setTimeout(() => this.classList.remove('copied'), 1000);
        }).catch(() => {
          // Fallback
          const textarea = document.createElement('textarea');
          textarea.value = hex;
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
          this.classList.add('copied');
          setTimeout(() => this.classList.remove('copied'), 1000);
        });
      }
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

  // Version badge
  const version = document.querySelector('.version-badge');
  if (version) {
    version.textContent = 'v' + version.textContent.replace(/[^0-9.]/g, '1.0.0' || '1.0.0');
  }
});
