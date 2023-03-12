const panelToggle = document.getElementById('panel-toggle');
const panelTogglebtn = document.getElementById('panel-togglebtn');
const panel = document.querySelector('.panel');
const panelClose = document.querySelector('.panel-close');
const overlay = document.getElementById('overlay');
const body = document.body;


panelToggle.addEventListener('click', () => {
    panel.classList.toggle('open');
    panel.classList.toggle('show');
    overlay.classList.toggle('show');
    body.classList.add('modal-open'); // adiciona a classe "modal-open" ao elemento "body"

    
});
panelTogglebtn.addEventListener('click', () => {
  panel.classList.toggle('open');
  panel.classList.toggle('show');
  overlay.classList.toggle('show');
  body.classList.add('modal-open'); 
});
panelClose.addEventListener('click', () => {
    panel.classList.remove('open');
    panel.classList.remove('show');
    overlay.classList.remove('show');
    body.classList.remove('modal-open'); 
});

overlay.addEventListener('click', () => {
  panel.classList.remove('open');
  panel.classList.remove('show');
  overlay.classList.remove('show');
  body.classList.remove('modal-open'); 

});

function toggleCategoria(categoria) {
    var listaCategoria = document.getElementById(categoria);
    var iconeSeta = listaCategoria.previousElementSibling.querySelector('.icone-seta');
  
    if (listaCategoria.style.display === 'none') {
      listaCategoria.style.display = 'block';
      iconeSeta.classList.add('up');
    } else {
      listaCategoria.style.display = 'none';
      iconeSeta.classList.remove('up');
    }
  }


var topDiv = document.querySelector('.nav-background');
var topBtn = document.querySelector('.nav-btn');
var topBtns = document.querySelector('.nav-btns');
var topSearch = document.querySelector('.search-container');


var offset = topDiv.offsetTop;

function fixDiv() {
  if (window.pageYOffset > offset) {
    topDiv.classList.add('fixed');
    topBtn.classList.add('fixed');
    topBtns.classList.add('fixed');
    topSearch.classList.add('fixed');


  } else {
    topDiv.classList.remove('fixed');
    topBtn.classList.remove('fixed');
    topBtns.classList.remove('fixed');
    topSearch.classList.remove('fixed');

  }
}

window.addEventListener('scroll', fixDiv);


// CARROUSEL
const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slideNumber = 0;

nextBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber++;

  if(slideNumber > (numberOfSlides - 1)){
    slideNumber = 0;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
});

prevBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber--;

  if(slideNumber < 0){
    slideNumber = numberOfSlides - 1;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
});

var playSlider;

var repeater = () => {
  playSlider = setInterval(function(){
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
      slideIcon.classList.remove("active");
    });

    slideNumber++;

    if(slideNumber > (numberOfSlides - 1)){
      slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
  }, 4000);
}
repeater();

slider.addEventListener("mouseover", () => {
  clearInterval(playSlider);
});

slider.addEventListener("mouseout", () => {
  repeater();
});

// CAIXA DE PESQUISA
const form = document.querySelector('.search-container');
const input = form.querySelector('input');
const searchButton = form.querySelector('button[type="submit"]');
const clearButton = form.querySelector('.clear-search');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(`Pesquisando por: ${input.value}`);
    // Adicione aqui a lógica para a pesquisa
});

input.addEventListener('input', () => {
    if (input.value.length > 0) {
        clearButton.style.display = 'block';
        searchButton.style.display = 'none';
    } else {
        clearButton.style.display = 'none';
        searchButton.style.display = 'block';
    }
});

clearButton.addEventListener('click', () => {
    input.value = '';
    clearButton.style.display = 'none';
    searchButton.style.display = 'block';
    input.focus();
});

