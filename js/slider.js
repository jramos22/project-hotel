// Guardamos las imagenes en constante,
// tambien agregamos una constate para manejar los dot

const images = document.querySelectorAll(".image-slide");
const dots = document.querySelectorAll(".dot");
let position = 0;

// Iteramos para ir agregando la clase que ocultaria los slides

images.forEach((img) => {
  img.classList.add("js-content-hidden");
});

// Removemos la clase para ocultar a lo que
// se va a mostrar en pantalla de primera mano
images[0].classList.remove("js-content-hidden");

// La función chaImage2 activa los botones de siguiente,
//  lo que hace exactamente esta función es utilizar el index
// de las imagenes para saber cual es la imagen que sigue ya sea
// para la izquiersa o para la derecha, usa la misma logina que la función del slide

function changeImage2(right, index = null) {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.add("js-content-hidden");
    dots[i].classList.remove("dot-active");
  }
  if (index) {
    position = index;
  } else {
    if (right) {
      if (position < 2) {
        position++;
      } else {
        position = 0;
      }
    } else {
      if (position == 0) {
        position = 2;
      } else {
        position--;
      }
    }
  }
  images[position].classList.remove("js-content-hidden");
  dots[position].classList.add("dot-active");
}

// con document llamamos los arrow que contienen la imagen de derecha e izquierda,
// la intención de hacerlo
// asi es poder identificar cuando ocurre el evento de click
// y aplicar la función que itera con el index

// la función changeImageByDot permite que los dots
//  se salten el index y se activen de acuedo a cual se le da click,
// tambien oculta al que se activa cuando se da click, esta función esta
// activa directamente en el index.

function changeImageByDot(index, obj) {
  dots.forEach((point) => {
    point.classList.remove("dot-active");
  });
  // for (let i = 0; i < dots.length; i++) {
  //   dots[i].classList.remove('dot-active');
  // }
  obj.classList.add("dot-active");
  changeImage2(null, index);
}

function changeImage() {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.add("js-content-hidden");
    dots[i].classList.remove("dot-active");
  }
  if (position < 2) {
    position++;
  } else {
    position = 0;
  }
  images[position].classList.remove("js-content-hidden");
  dots[position].classList.add("dot-active");
}

window.setInterval(changeImage, 4500);
