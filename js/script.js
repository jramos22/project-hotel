// Variables que obtinenen los enlaces de miniaturas y el div contenedor con la imagen en grande
const mini = document.querySelectorAll('.miniatura');
const bigImage = document.getElementById('big-image');
const atras = document.getElementById('atras');
const adelante = document.getElementById('adelante');
const contenido = document.querySelector('.oculto');

// Funcion principal de la Galeria
for (let i = 0; i < mini.length; i += 1) {
  mini[i].addEventListener('click', (event) => {
    event.preventDefault();
    const url = event.currentTarget.getAttribute('src');
    bigImage.src = `${url}`;
  });
}
// Funcion para desplazar el carrucel de miniaturas
adelante.addEventListener('click', (event) => {
  event.preventDefault();
  contenido.classList.add('ocultar');
});
// Funcion para desplazar el carrucel de miniaturas
atras.addEventListener('click', (event) => {
  event.preventDefault();
  contenido.classList.remove('ocultar');
});
