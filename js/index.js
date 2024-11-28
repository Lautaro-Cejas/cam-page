const heartsContainer = document.querySelector(".hearts-container");
const centerName = document.querySelector(".center-name");

// Número de corazones
const totalHearts = 250; // Aumenté el número de corazones para que se vean más

// Función para ajustar el tamaño de los corazones
function adjustHeartSize() {
  const width = window.innerWidth;
  const heartSize = Math.min(width * 0.08, 150); // Ajusta el tamaño con un máximo de 150px
  document.querySelectorAll(".heart").forEach((heart) => {
    heart.style.width = `${heartSize}px`;
    heart.style.height = `${heartSize}px`;
  });
}

// Generar corazones
for (let i = 0; i < totalHearts; i++) {
  const heart = document.createElement("div");
  heart.className = "heart";

  // Calcula el tamaño de los corazones después de que se ajuste
  const heartSize = Math.min(window.innerWidth * 0.08, 150);

  // Asignar una posición aleatoria
  const top = Math.random() * 100;
  const left = Math.random() * 100;

  // Asigna posiciones
  heart.style.top = `${top}%`;
  heart.style.left = `${left}%`;

  // Asigna una rotación aleatoria
  const rotation = `${Math.random() < 0.5 ? "-" : ""}${Math.random() * 360}deg`;
  heart.style.setProperty("--rotate", rotation);

  // Coloca los corazones detrás del texto
  heart.style.zIndex = -1;

  heartsContainer.appendChild(heart);
}

// Ajusta el tamaño de los corazones cuando se cambia el tamaño de la ventana
window.addEventListener("resize", adjustHeartSize);

// Ajusta el tamaño al cargar la página
window.onload = adjustHeartSize;
