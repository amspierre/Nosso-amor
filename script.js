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

  // Pegamos 3 músicas (anterior, atual e próxima)
  const indices = [
    (currentIndex - 1 + total) % total,
    currentIndex,
    (currentIndex + 1) % total
  ];

  indices.forEach((i, idx) => {
    const slide = document.createElement("div");
    slide.classList.add("slide");
    if (idx === 1) slide.classList.add("middle"); // música do meio

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

// Iniciar ao carregar a página
window.onload = renderSlides;
