const musicas = [
  "https://open.spotify.com/embed/track/2o2xhyri4aJUtgMGkf5P0J",
  "https://open.spotify.com/embed/track/1DLKuppSYytOuxhtI6KBGu",
  "https://open.spotify.com/embed/track/5IAx5ePf9QztrT7MqdCyDT",
  "https://open.spotify.com/embed/track/4JpKVNYnVcJ8tuMKjAj50A", // música extra
  "https://open.spotify.com/embed/track/3d9DChrdc6BOeFsbrZ3Is0"  // música extra
];

let currentIndex = 0;
const carousel = document.getElementById("carousel");

// Função para criar os slides dinamicamente
function renderSlides() {
  carousel.innerHTML = "";

  const total = musicas.length;

  // Pega o slide anterior, atual e próximo (loop circular)
  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;

  const indices = [prevIndex, currentIndex, nextIndex];

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

// Inicia ao carregar
window.onload = renderSlides;
