const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const carouselDots = document.querySelectorAll('.carousel-dot');
const carouselPrev = document.querySelector('.carousel-prev');
const carouselNext = document.querySelector('.carousel-next');

let slideIndex = 0;
let timer;

// Set active dot
function setActiveDot(index) {
  carouselDots.forEach(dot => {
    dot.classList.remove('active');
  });
  carouselDots[index].classList.add('active');
}

// Set slide position with animation
function setSlidePosition(index) {
    // Remove 'hidden' class from all images
    carouselImages.forEach((image) => {
      image.classList.remove('hidden');
    });
  
    // Calculate translateX value to display all images on the screen
    const slideWidth = carouselSlide.offsetWidth / carouselImages.length;
    const translateX = -(index * slideWidth);
  
    // Set transform property to slide to the corresponding position
    carouselSlide.style.transform = `translateX(${translateX}px)`;
  
    // Set active class to the corresponding dot
    setActiveDot(index);
  }
  

// Next slide with animation
// Next slide with animation
function nextSlide() {
  slideIndex++;
  if (slideIndex >= carouselImages.length) {
    slideIndex = 0;
    // display all images until last image
    for (let i = 0; i <= slideIndex; i++) {
      carouselImages[i].classList.remove('hidden');
    }
    setSlidePosition(slideIndex);
    setActiveDot(slideIndex);
  } else {
    setSlidePosition(slideIndex);
    setActiveDot(slideIndex);
  }
}



// Previous slide with animation
function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = carouselImages.length - 1;
    }
    setSlidePosition(slideIndex);
    setActiveDot(slideIndex);
  }
  
  // Click on dot to go to corresponding slide with animation
  function dotClick(index) {
    slideIndex = index;
    setSlidePosition(slideIndex);
    setActiveDot(slideIndex);
  }
  
  // Start automatic slide transition with animation
  function startTimer() {
    timer = setInterval(() => {
      nextSlide();
    }, 5000);
  }
  
  // Stop automatic slide transition when mouse is over slide
  function stopTimer() {
    clearInterval(timer);
  }
  
  // Event listeners
  carouselNext.addEventListener('click', nextSlide);
  carouselPrev.addEventListener('click', prevSlide);
  
  carouselDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      dotClick(index);
    });
  });
  
  carouselSlide.addEventListener('mouseover', stopTimer);
  carouselSlide.addEventListener('mouseout', startTimer);
  
  // Start automatic slide transition on page load
  startTimer();
  
