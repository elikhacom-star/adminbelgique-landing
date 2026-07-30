// AdminBelgique — Landing page JS
// Modal + smooth nav + lead magnet

// Lead magnet form handler
const lmForm = document.getElementById('leadmagnetFormEl');
if (lmForm) {
  lmForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('leadmagnetEmail').value;
    if (!email) return;
    const leads = JSON.parse(localStorage.getItem('ab-leads') || '[]');
    leads.push({ email, ts: Date.now() });
    localStorage.setItem('ab-leads', JSON.stringify(leads));
    document.getElementById('leadmagnetForm').style.display = 'none';
    document.getElementById('leadmagnetSuccess').style.display = 'block';
    console.log('Lead captured:', email);
  });
}

function openDemoModal() {
  const modal = document.getElementById('demoModal');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeDemoModal() {
  const modal = document.getElementById('demoModal');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// Fermer avec Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeDemoModal();
});

// Header shadow on scroll
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.style.boxShadow = '0 4px 20px rgba(0, 61, 122, 0.10)';
  } else {
    header.style.boxShadow = 'none';
  }
});

// Animation d'apparition (IntersectionObserver)
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.pain-card, .feature, .case-card, .price-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity .6s ease, transform .6s ease';
    observer.observe(el);
  });
}
