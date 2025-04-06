const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');


if (navToggle) {
navToggle.addEventListener('click', () => {
  navMenu.classList.add('show-menu');
});
}


if (navClose) {
navClose.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
});
}


let currentImageIndex = 2;
const images = ['images/img1.png', 'images/img2.png', 'images/img3.png'];

function changeImage(imageSrc) {
  document.getElementById('hero-image').src = imageSrc;
  currentImageIndex = images.indexOf(imageSrc);
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  document.getElementById('hero-image').src = images[currentImageIndex];
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  document.getElementById('hero-image').src = images[currentImageIndex];
}