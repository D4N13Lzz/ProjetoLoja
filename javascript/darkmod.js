const navbar = document.querySelector('.navbar');
const navbackground = document.querySelector('.nav-background');
const headertopo = document.querySelector('.header-topo');
const backgroundall = document.querySelector('.backgroundAll');
const cards = document.querySelector('.cards-section');
const footer = document.querySelector('.footer');
const footerfim = document.querySelector('.footer-fim');
const carrousel = document.querySelector('.carousel-container');
const login = document.querySelector('.user-form');
const painel = document.querySelector('.panel');



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

    darkModeText.style.display = 'inline';
    lightModeText.style.display = 'none';
    
  } else {
    iconMode.classList.remove('dark');
    iconMode.classList.add('light');

    darkModeText.style.display = 'none';
    lightModeText.style.display = 'inline';
  }
});

function updateTheme(theme) {
  if (theme === 'dark') {
    navbar.classList.add('dark');
    navbackground.classList.add('dark');
    headertopo.classList.add('dark');
    backgroundall.classList.add('dark');
    cards.classList.add('dark');
    footer.classList.add('dark');
    footerfim.classList.add('dark');
    carrousel.classList.add('dark');
    login.classList.add('dark');
    painel.classList.add('dark');

    iconMode.classList.add('dark');
    moonIcon.style.display = 'inline';
    sunIcon.style.display = 'none';
    
    darkModeText.style.display = 'inline';
    lightModeText.style.display = 'none';
  } else {
    navbar.classList.remove('dark');
    navbackground.classList.remove('dark');
    headertopo.classList.remove('dark');
    backgroundall.classList.remove('dark');
    cards.classList.remove('dark');
    footer.classList.remove('dark');
    footerfim.classList.remove('dark');
    carrousel.classList.remove('dark');
    login.classList.remove('dark');
    painel.classList.remove('dark');


    iconMode.classList.remove('dark');
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'inline';
    darkModeText.style.display = 'none';
    lightModeText.style.display = 'inline';
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





