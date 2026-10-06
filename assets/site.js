const toggle = document.querySelector('.theme-toggle');
const preference = window.matchMedia('(prefers-color-scheme: dark)');
function isDark() {
  return document.documentElement.dataset.theme
    ? document.documentElement.dataset.theme === 'dark'
    : preference.matches;
}
function updateToggle() {
  toggle.setAttribute('aria-pressed', String(isDark()));
  toggle.setAttribute('aria-label', isDark() ? 'Switch to light mode' : 'Switch to dark mode');
}
toggle.hidden = false;
updateToggle();
preference.addEventListener('change', updateToggle);
toggle.addEventListener('click', () => {
  const theme = isDark() ? 'light' : 'dark';
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem('theme', theme); } catch {}
  updateToggle();
});
