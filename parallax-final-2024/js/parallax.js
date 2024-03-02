
/*===========mouse moving=============*/


document.addEventListener("DOMContentLoaded", function () {
    const parallaxContainer = document.getElementById("vengadores");
  
    parallaxContainer.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;
      const { offsetWidth, offsetHeight } = parallaxContainer;
  
      const centerX = offsetWidth / 2; //centro en x del contenedor parallax
      const centerY = offsetHeight / 2; //centro en y del contenedor parallax
  
      const moveX = (clientX - centerX) / 20;
      const moveY = (clientY - centerY) / 20;
  
      const chica = document.querySelector(".mujerElastica");
      const puma = document.querySelector(".pumaNegro");
      const hulk = document.querySelector(".hulk");
    
      puma.style.transform = `translateX(${moveX * -0.5}px) translateY(${moveY * -0.7}px) rotate(4deg)`;
      hulk.style.transform = `translateX(${moveX * -1.4}px) translateY(${moveY * -1.7}px)`;
      chica.style.transform = `translateX(${moveX * 1}px) translateY(${moveY * -2.2}px) rotate(-5.483deg)`;
    });
  });
  

  /*-------duende verde----*/
  
  let duende = document.getElementById('duende');
  let contenedorDuende = document.getElementById('contenedorDuende');
  
  window.addEventListener('scroll', function(e){
      let rect = contenedorDuende.getBoundingClientRect();
      if (rect.top+300 <= window.innerHeight && rect.bottom-600 >= 0) {
          // Obtener el valor de desplazamiento vertical (scroll)
          let scrollTop = window.scrollY;
          duende.style.transform = 'translate(0, calc(-50% + ' + scrollTop / 2 + 'px)) scale(0.9)';
      }
  });
  

  /*---------------------desenfoque de spiders--------------*/
  
  let spiderBlanco = document.getElementById('spider-blanco');
let spiderRojo = document.getElementById('spider-rojo');
let spiderNegro = document.getElementById('spider-negro');
let spiders = document.getElementById('spiders');

let popupStacy = document.getElementById("popupStacy");
let popupPeter = document.getElementById("popupPeter");
let popupMorales = document.getElementById("popupMorales");

let closePopup1 = document.getElementById("close1");
let closePopup2 = document.getElementById("close2");
let closePopup3 = document.getElementById("close3");




spiderBlanco.addEventListener('click', function(){
    spiders.style.backgroundImage = 'none';
    popupStacy.classList.add('show');
});

spiderRojo.addEventListener('click', function(){
    spiders.style.backgroundImage = 'none';
    popupPeter.classList.add('show');
});

spiderNegro.addEventListener('click', function(){
    spiders.style.backgroundImage = 'none';
    popupMorales.classList.add('show');
});
 

closePopup1.addEventListener('click', function(){
    popupStacy.classList.remove('show');
});

closePopup2.addEventListener('click', function(){
    popupPeter.classList.remove('show');
});

closePopup3.addEventListener('click', function(){
    popupMorales.classList.remove('show');
        
});


spiderBlanco.addEventListener('mouseover', function(){
    spiders.style.backgroundImage = 'url("img/pink_bground.png")';
    spiders.style.backgroundSize = '100% 880px';
    spiders.style.backgroundRepeat = 'no-repeat';
    spiderBlanco.style.transform = 'scale(1.05)';
    spiderBlanco.style.filter= 'blur(0)';
    spiderRojo.style.transform = 'scale(0.7)';
    spiderRojo.style.filter= 'blur(5px)';
    spiderNegro.style.transform = 'scale(0.7)';
    spiderNegro.style.filter= 'blur(5px)';
});

spiderRojo.addEventListener('mouseover', function(){
    spiders.style.backgroundImage = 'url("img/blue_bground.png")';
    spiders.style.backgroundSize = '100% 880px';
    spiders.style.backgroundRepeat = 'no-repeat';
    spiderRojo.style.transform= 'scale(1.1)';
    spiderRojo.style.filter= 'blur(0)';
    spiderBlanco.style.transform = 'scale(0.7)';
    spiderBlanco.style.filter= 'blur(5px)';
    spiderNegro.style.transform = 'scale(0.7)';
    spiderNegro.style.filter= 'blur(5px)';

});

spiderNegro.addEventListener('mouseover', function(){
    spiders.style.backgroundImage = 'url("img/grey_bground.png")';
    spiders.style.backgroundSize = '100% 880px';
    spiders.style.backgroundRepeat = 'no-repeat';
    spiderNegro.style.transform ='scale(1.1)';
    spiderNegro.style.filter= 'blur(0)';
    spiderBlanco.style.transform = 'scale(0.7)';
    spiderBlanco.style.filter= 'blur(5px)';
    spiderRojo.style.transform = 'scale(0.7)';
    spiderRojo.style.filter= 'blur(5px)';

});


/*--------------seccion rutas--------*/

let card1 = document.getElementById('ruta1');
let card2 = document.getElementById('ruta2');
let card3 = document.getElementById('ruta3');

let rutas = document.getElementById('rutas');



window.addEventListener('scroll', function(e){
    let rect = rutas.getBoundingClientRect();
    if (rect.top+100 <= window.innerHeight && rect.bottom-100 >= 0) {
        // Obtener el valor de desplazamiento vertical (scroll)
        let scroll = window.scrollY;
        //card1.style.transform = 'translate(0, calc(-50% + ' + scroll / 12 + 'px))';
        card1.style.transform = 'translateX(calc(-65% + ' + scroll *0.15 + 'px))';
        card2.style.transform = 'translateX(calc(-65% + ' + scroll *0.15 + 'px))';
        card3.style.transform = 'translateX(calc(-65% + ' + scroll *0.15 + 'px))';
        
        //card2.style.transform = 'translate(0, calc(-50% + ' + scroll / 12 + 'px))';
       // card3.style.transform = 'translate(0, calc(-50% + ' + scroll / 12 + 'px))';
 }
});

card1.addEventListener('mouseenter', function() {
    card1.style.transform = 'skewY(7deg)';
    card1.style.transition = 'all 0.5s ease-in-out';
});

card1.addEventListener('mouseleave', function() {
    card1.style.transform = 'none';
    card1.style.transition = 'none';
});

card2.addEventListener('mouseenter', function() {
    card2.style.transform = 'skewY(7deg)';
    card2.style.transition = 'all 0.5s ease-in-out';
});

card2.addEventListener('mouseleave', function() {
    card2.style.transform = 'none';
    card2.style.transition = 'none';
});

card3.addEventListener('mouseenter', function() {
    card3.style.transform = 'skewY(7deg)';
    card3.style.transition = 'all 0.5s ease-in-out';
});

card3.addEventListener('mouseleave', function() {
    card3.style.transform = 'none';
    card3.style.transition = 'none';
});