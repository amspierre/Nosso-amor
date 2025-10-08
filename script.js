const musicas = [
  "https://open.spotify.com/embed/track/2o2xhyri4aJUtgMGkf5P0J",
  "https://open.spotify.com/embed/track/1DLKuppSYytOuxhtI6KBGu",
  "https://open.spotify.com/embed/track/5IAx5ePf9QztrT7MqdCyDT",
  "https://open.spotify.com/embed/track/4JpKVNYnVcJ8tuMKjAj50A",
  "https://open.spotify.com/embed/track/3d9DChrdc6BOeFsbrZ3Is0"
];

let currentIndex = 0;
const carousel = document.getElementById("carousel");

function renderSlides() {
  carousel.innerHTML = "";

  const total = musicas.length;

  const indices = [
    (currentIndex - 1 + total) % total,
    currentIndex,
    (currentIndex + 1) % total
  ];

  indices.forEach((i, idx) => {
    const slide = document.createElement("div");
    slide.classList.add("slide");
    if (idx === 1) slide.classList.add("middle");

    const iframe = document.createElement("iframe");
    iframe.src = musicas[i];
    iframe.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
    iframe.loading = "lazy";

    slide.appendChild(iframe);
    carousel.appendChild(slide);
  });
}

function next() {
  currentIndex = (currentIndex + 1) % musicas.length;
  renderSlides();
}

function prev() {
  currentIndex = (currentIndex - 1 + musicas.length) % musicas.length;
  renderSlides();
}

window.onload = () => {
  renderSlides();
  setupTouchEvents();
};

// ================================
// 💡 TOQUE PARA MÓVEIS (SWIPE)
// ================================

function setupTouchEvents() {
  let startX = 0;
  let endX = 0;

  const threshold = 50; // distância mínima para contar como swipe

  carousel.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  carousel.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
  });

  function handleSwipe() {
    const diff = startX - endX;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // swipe para a esquerda
        next();
      } else {
        // swipe para a direita
        prev();
      }
    }
  }
}
