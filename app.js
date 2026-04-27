/* Caffeine Curve — site interactions
   - IntersectionObserver-based reveal animations
   - Hero phone slow tilt parallax
   - Sets the year in footer
*/
(function () {
  // Safety net: if JS fails or is slow, make everything visible after 3s
  // so the page never gets stuck blank.
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => el.classList.add('is-visible'));
  }, 3000);

  // -------- Reveal on scroll
  const els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && els.length) {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    els.forEach((el) => io.observe(el));
  } else {
    els.forEach((el) => el.classList.add('is-visible'));
  }

  // -------- Hero phone gentle tilt on cursor
  const phone = document.querySelector('.hero__phone');
  const watch = document.querySelector('.hero__watch');
  const visual = document.querySelector('.hero__visual');
  if (visual && phone && window.matchMedia('(hover:hover)').matches) {
    visual.addEventListener('mousemove', (e) => {
      const r = visual.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      phone.style.transform = `rotate(${-4 + x * 6}deg) translate(${x * 6}px, ${y * 6}px)`;
      if (watch) watch.style.transform = `rotate(${6 - x * 4}deg) translate(${-x * 8}px, ${-y * 6}px)`;
    });
    visual.addEventListener('mouseleave', () => {
      phone.style.transform = '';
      if (watch) watch.style.transform = '';
    });
  }

  // -------- Year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
