window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('light');
  const icon = document.getElementById('theme-icon');
  icon.src = 'img/icon1.png'; // иконка для светлой темы

  if (window.location.hash) {
    history.replaceState(null, null, window.location.pathname);
  }
});
  function toggleTheme() {
    document.body.classList.toggle('light');
    const icon = document.getElementById('theme-icon');
    const isLight = document.body.classList.contains('light');
    icon.src = isLight ? 'img/icon1.png' : 'img/icon2.png';
  }
  function toggleMobileNav() {
    const nav = document.getElementById('mobileNav');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  }
  function toggleReviews() {
    const list = document.getElementById('reviewList');
    list.style.display = list.style.display === 'none' ? 'block' : 'none';
  }
  