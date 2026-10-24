/* ============================================================
   PORTFÓLIO DAVYD EDUARDO (Davyd Dev) — script.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Menu Mobile ---
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMobile = document.getElementById('nav-mobile');

  if (hamburgerBtn && navMobile) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = hamburgerBtn.classList.contains('open');
      if (isOpen) {
        hamburgerBtn.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        navMobile.classList.remove('open');
      } else {
        hamburgerBtn.classList.add('open');
        hamburgerBtn.setAttribute('aria-expanded', 'true');
        navMobile.classList.add('open');
      }
    });

    navMobile.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        navMobile.classList.remove('open');
      });
    });
  }

  // --- 2. Filtro de Projetos ---
  const filterButtons = document.querySelectorAll('.filter-btn[data-filter]');
  const projectCards = document.querySelectorAll('.card-projeto[data-category]');

  if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filterValue = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
          const cats = (card.getAttribute('data-category') || '').split(' ');
          if (filterValue === 'all' || cats.includes(filterValue)) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // --- 3. Filtro de Certificados (Página Sobre Mim) ---
  const certButtons = document.querySelectorAll('.filter-btn[data-cert-filter]');
  const certCards = document.querySelectorAll('.cert-card[data-cert-cat]');
  const certSearch = document.getElementById('cert-search');

  function filterCerts() {
    const activeBtn = document.querySelector('.filter-btn[data-cert-filter].active');
    const activeCat = activeBtn ? activeBtn.getAttribute('data-cert-filter') : 'all';
    const query = certSearch ? certSearch.value.trim().toLowerCase() : '';

    certCards.forEach(card => {
      const cat = card.getAttribute('data-cert-cat') || '';
      const text = card.textContent.toLowerCase();
      const matchCat = activeCat === 'all' || cat.includes(activeCat);
      const matchText = !query || text.includes(query);
      card.style.display = (matchCat && matchText) ? 'flex' : 'none';
    });
  }

  if (certButtons.length > 0) {
    certButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        certButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterCerts();
      });
    });
  }

  if (certSearch) {
    certSearch.addEventListener('input', filterCerts);
  }

  // --- 4. Ano dinâmico no Footer ---
  const yearSpan = document.getElementById('footer-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
