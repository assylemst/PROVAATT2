const btn = document.getElementById('theme-toggle');
btn.addEventListener('click', toggleTheme);


function toggleLanguage() {
  const elements = document.querySelectorAll('[data-pt][data-en]');
  elements.forEach(el => {
    if (el.innerText === el.getAttribute('data-pt')) {
      el.innerText = el.getAttribute('data-en');
    } else {
      el.innerText = el.getAttribute('data-pt');
    }
  });
}

