
// mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
toggle?.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  menu.classList.toggle('open');
});

// dark mode toggle with localStorage
const mode = document.querySelector('.mode-toggle');
const preferred = localStorage.getItem('theme') || 'light';
if (preferred === 'dark') document.body.classList.add('theme-dark');

mode?.addEventListener('click', () => {
  document.body.classList.toggle('theme-dark');
  const now = document.body.classList.contains('theme-dark') ? 'dark' : 'light';
  localStorage.setItem('theme', now);
});

// dynamic year
document.getElementById('year').textContent = new Date().getFullYear();
``
