const navbar = document.querySelector('.navbar');
const navbackground = document.querySelector('.nav-background');
const headertopo = document.querySelector('.header-topo');
const body = document.querySelector('body');
// const footer = document.querySelector('.footer');
// const scrollDark = document.querySelector('.scrollDark');
// const navbar = document.querySelector('.navbar');

const iconMode = document.querySelector('.iconMode');
const moonIcon = iconMode.querySelector('.moon-icon');
const sunIcon = iconMode.querySelector('.sun-icon');
const darkModeText = iconMode.querySelector('.dark-mode-text');
const lightModeText = iconMode.querySelector('.light-mode-text');

// Obtém o valor armazenado no localStorage
const storedTheme = localStorage.getItem('theme');
let currentTheme = localStorage.getItem('theme') || 'light';
if (storedTheme) {
  currentTheme = storedTheme;
}
updateTheme(currentTheme);

iconMode.addEventListener('click', () => {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);
  // Define o tema atual na página
  updateTheme(currentTheme);

  // Atualiza o texto do botão de acordo com o tema atual
  if (currentTheme === 'dark') {
    iconMode.classList.remove('light');
    iconMode.classList.add('dark');
    darkModeText.style.display = 'none';
    lightModeText.style.display = 'inline';
  } else {
    iconMode.classList.remove('dark');
    iconMode.classList.add('light');
    darkModeText.style.display = 'inline';
    lightModeText.style.display = 'none';
  }
});

function updateTheme(theme) {
  if (theme === 'dark') {
    navbar.classList.add('dark');
    navbackground.classList.add('dark');
    headertopo.classList.add('dark');
    body.classList.add('dark');
    // footer.classList.add('dark');
    // scrollDark.classList.add('dark');
    // navbar.classList.add('dark');

    iconMode.classList.add('dark');
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'inline';
    darkModeText.style.display = 'none';
    lightModeText.style.display = 'inline';
  } else {
    navbar.classList.remove('dark');
    navbackground.classList.remove('dark');
    headertopo.classList.remove('dark');
    body.classList.remove('dark');
    // footer.classList.remove('dark');
    // scrollDark.classList.remove('dark');
    // navbar.classList.remove('dark');

    iconMode.classList.remove('dark');
    moonIcon.style.display = 'inline';
    sunIcon.style.display = 'none';
    darkModeText.style.display = 'inline';
    lightModeText.style.display = 'none';
  }
}

window.addEventListener('resize', () => {
  const iconMode = document.querySelector('.iconMode');
  const iconWidth = iconMode.offsetWidth;
  const iconHeight = iconMode.offsetHeight;
  const iconTop = iconMode.offsetTop;
  const iconLeft = iconMode.offsetLeft;

  const darkModeText = iconMode.querySelector('.dark-mode-text');
  const lightModeText = iconMode.querySelector('.light-mode-text');
  const textWidth = darkModeText.offsetWidth;
  const textHeight = darkModeText.offsetHeight;
  const textTop = iconTop + (iconHeight - textHeight) / 2 + 'px';
  const textLeft = iconLeft + iconWidth + 10 + 'px';

  darkModeText.style.top = textTop;
  darkModeText.style.left = textLeft;
  lightModeText.style.top = textTop;
  lightModeText.style.left = textLeft;
});





