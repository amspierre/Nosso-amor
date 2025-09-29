let index = 0;
const slides = document.getElementById("slides");
const total = slides.children.length;

function showSlide(i) {
  index = (i + total) % total;
  slides.style.transform = `translateX(${-index * 100}%)`;
}

function next() {
  showSlide(index + 1);
}

function prev() {
  showSlide(index - 1);
}
