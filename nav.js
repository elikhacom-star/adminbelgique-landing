// AdminBelgique — Menu mobile (burger)
// Ouvre / ferme la navigation sous 768px. Le CSS masque .nav par défaut sur mobile.

(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('siteNav');
  if (!toggle || !nav) return;

  function closeMenu() {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Fermer après le choix d'un lien
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') closeMenu();
  });

  // Fermer au clic à l'extérieur
  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target) && e.target !== toggle) closeMenu();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });
})();
