// AdminBelgique — Landing page JS
// Modal + smooth nav

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
