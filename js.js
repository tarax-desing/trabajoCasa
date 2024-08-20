 // Array de frases motivadoras
 const frases = [
    "Apasionada de las últimas tendencias digitales.",
    "Esa pasión, me permite desarrollar estrategias digitales innovadoras.",
    "Experiencia en creación de contenido, gestión de redes sociales y seo.",
    "Creación de clases audiovisuales para gimnasios.",
    "Cuentos infantiles y su promoción."
];

// Función para mostrar una frase aleatoria
function mostrarFrase() {
    // Genera un índice aleatorio basado en la longitud del array
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    // Actualiza el contenido del párrafo con la frase seleccionada
    document.getElementById("frase").innerText = frases[indiceAleatorio];
}

function cambiarImagen(src) {
    document.getElementById('imagenGrande').src = src;
}

let index = 0; // Índice de la imagen actual
const items = document.querySelector('.carousel-items');
const totalItems = items.children.length;

// Ajusta el tamaño del carrusel
function updateCarousel() {
    const offset = ((index - 1) * 40); // Desplazamiento para centrar la imagen activa
    items.style.transform = `translateX(-${offset}%)`;
}

// Botón de Previous
document.getElementById('carousel-prev-btn').addEventListener('click', () => {
    index = (index > 0) ? index - 1 : totalItems - 1; // Decrementa el índice o vuelve al fin
    updateCarousel();
});

// Botón de Next
document.getElementById('carousel-next-btn').addEventListener('click', () => {
    index = (index < totalItems - 1) ? index + 1 : 0; // Incrementa el índice o vuelve al inicio
    updateCarousel();
});

const images = document.querySelectorAll('.carousel-items img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-image');
const closeBtn = document.getElementsByClassName('close')[0];

images.forEach(img => {
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
  }
});

closeBtn.onclick = function() {
  modal.style.display = "none";
}