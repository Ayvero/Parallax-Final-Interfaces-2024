// Obtenemos el contenedor de la imagen y la posición donde debería aparecer
let logo = document.getElementById('logo');
let triggerHeight = 150; // Ajusto este valor para que aparezca el logo chiquito cuando yo quiero

// Agrega un evento de scroll
window.addEventListener('scroll', function() {
  // Obtengo la posición actual de desplazamiento vertical
  let scrollPosition = window.scrollY || window.pageYOffset;

  // Verifica si la posición de desplazamiento alcanza el punto de activación
  if (scrollPosition > triggerHeight) {
    // Agregamos la clase 'visible' para hacer visible la imagen
    logo.classList.add('pequeño');
  } else {
    // Removemos la clase 'visible' si la posición de desplazamiento está por debajo del punto de activación
    logo.classList.remove('pequeño');
  }
});



 // Función para manejar el efecto parallax
 function parallax() {
  var scrolled = window.scrollY;

  // Efecto parallax para Spidermans
  document.querySelector('.spideyBlanco').style.left = -(scrolled * 0.1) +40 + 'px';
  document.querySelector('.spideyBlanco').style.top = -(scrolled * 0.3) - 890 + 'px';

  document.querySelector('.spideyNormal').style.top = -(scrolled * 0.3) -870 + 'px';
  
  document.querySelector('.spideyNegro').style.left = (scrolled * 0.1) -150 + 'px';
  document.querySelector('.spideyNegro').style.top = -(scrolled * 0.3) -930 + 'px';

  // Efecto parallax para telarañas
  document.querySelector('.telaIzquierda').style.top = -(scrolled * 0.3) - 1367 + 'px';

  document.querySelector('.telaDerecha').style.left = (scrolled * 0.1) +230 + 'px';
  document.querySelector('.telaDerecha').style.top = -(scrolled * 0.3) - 1350 + 'px';
  
    // Efecto parallax para edificios

    //Edificio izquierdo
    document.querySelectorAll('.edificios .edifIzquierdo').forEach(function (edificio, index) {
      var transformValue = 'translateX(' + -(scrolled * 0.04 * (index + 1)) + 'px)';
      edificio.style.transform = transformValue;
  });

    //Edificio derecho
    document.querySelectorAll('.edificios .edifDerecho').forEach(function (edificio, index) {
      var transformValue = 'translateX(' + (scrolled * 0.04 * (index + 1)) + 'px)';
      edificio.style.transform = transformValue;
  });

  
    // Efecto parallax para nubes
    var nubesTransformValue = 'translateY(' + -(scrolled * 0.05) + 'px)';
    document.querySelector('.fondoNubes img').style.transform = nubesTransformValue;

}

// Función para manejar la animación de entrada
function animateOnScroll() {
  var windowHeight = window.innerHeight;
  var scrollPosition = window.scrollY;

  // Agregamos clase 'visible' cuando el elemento está en la pantalla
  document.querySelectorAll('.spidermansPortada, .telarañas').forEach(function (element) {
      var offset = element.getBoundingClientRect().top + scrollPosition;

      if (scrollPosition + windowHeight > offset) {
          element.classList.add('visible');
      }
  });
}

// Llama a las funciones al cargar la página y al hacer scroll
document.addEventListener('DOMContentLoaded', function () {
  parallax();
  animateOnScroll();
});

window.addEventListener('scroll', function () {
  parallax();
  animateOnScroll();
});


/* Efecto fade in de las 3 cards */

//ESTO ES PARA LAS CARDS
document.addEventListener('scroll', function() {
  var spidermansRecuadros = document.querySelector('.spidermansRecuadros');
  var position = spidermansRecuadros.getBoundingClientRect();

   // Verificar si la sección está completamente visible en la pantalla
   if (position.top >= 0 && position.bottom <= window.innerHeight) {
    // Verificar si la clase 'visible' ya está presente
    if (!spidermansRecuadros.classList.contains('visible')) {
        spidermansRecuadros.classList.add('visible');
    }
} else {
    // Si la sección ya no es visible, quitar la clase 'visible'
    spidermansRecuadros.classList.remove('visible');
}
});

//ESTO ES PARA EL TEXTO DE CADA
document.addEventListener('scroll', function() {
  var spidermansRecuadrosTexto = document.querySelector('.spidermansRecuadrosTexto');
  var position = spidermansRecuadrosTexto.getBoundingClientRect();

     // Verificar si la sección está completamente visible en la pantalla
   if (position.top >= 0 && position.bottom <= window.innerHeight) {
    // Verificar si la clase 'visible' ya está presente
    if (!spidermansRecuadrosTexto.classList.contains('visible')) {
        spidermansRecuadrosTexto.classList.add('visible');
    }
} else {
    // Si la sección ya no es visible, quitar la clase 'visible'
    spidermansRecuadrosTexto.classList.remove('visible');
}
});


/*Movimiento de rutas */

window.addEventListener('scroll', function () {
  // Calcula la posición de desplazamiento
  var scrollPosition = window.scrollY;


  var ruta1 = document.querySelector('.ruta1');
  ruta1.style.top = 20 + 0.05 * scrollPosition -920 + 'px';  /* El 0.05 varia la velocidad de la ruta1*/

  var ruta2 = document.querySelector('.ruta2');
  ruta2.style.top = 20 + 0.05 * scrollPosition -1230 + 'px';  /* El 0.05 varia la velocidad de la ruta2*/
  // Ajusta la posición del duende verde
  var ruta3 = document.querySelector('.ruta3');
  ruta3.style.top = 20 + 0.05 * scrollPosition -1580 + 'px';  /* El 0.05 varia la velocidad de la ruta3*/ 
});

/*ESTO ES PARA QUE VAYAN APARECIENDO LAS IMAGENES */

let img1 =  document.querySelector("#imagen1");
let img2 =  document.querySelector("#imagen2");
let img3 =  document.querySelector("#imagen3");
let img4 =  document.querySelector("#imagen4");


document.addEventListener('scroll', function () {
  if (window.scrollY < 4200) {
    img1.style.opacity = 0;
    img2.style.opacity = 0;
    img3.style.opacity = 0;
    img4.style.opacity = 0;
   
}
else if (window.scrollY > 4200 && window.scrollY < 4500) {
    img1.style.opacity = 1;
   
    img2.style.opacity = 0;
    
}
else if (window.scrollY > 4700 && window.scrollY < 5100) {
    img1.style.opacity = 0;
   
    img2.style.opacity = 1;
    
    img3.style.opacity = 0;
    
}
else if (window.scrollY > 5100 && window.scrollY < 5500) {
    img2.style.opacity = 0;
    
    img3.style.opacity = 1;
    
    img4.style.opacity = 0;
   
}
else if (window.scrollY > 5500 && window.scrollY < 5700) {
    img3.style.opacity = 0;
    
    img4.style.opacity = 1;
  
} 
else {
  img1.style.opacity = 0;
  img2.style.opacity = 0;
  img3.style.opacity = 0;
  img4.style.opacity = 0;
   
 }
});


/* ESTO ES PARA QUE VAYAN APARECIENDO LOS PARRAFOS */
document.addEventListener('scroll', function () {
  var parrafos = document.querySelectorAll('.textoCambiante');
  parrafos.forEach(function (parrafo, index) {
      var bounding = parrafo.getBoundingClientRect();
      if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
          parrafo.classList.add('parrafo-visible');
          parrafo.classList.remove('parrafo-oculto');
      } else {
          parrafo.classList.add('parrafo-oculto');
          parrafo.classList.remove('parrafo-visible');
      }
  });
});