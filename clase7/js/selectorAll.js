//ubicamos elementos dentro del DOM
const contenedores = document.querySelectorAll('.contenedores');
const articulos = document.querySelectorAll('.contenedores article');
console.log( contenedores );

contenedores[0].style.backgroundColor = '#000';
contenedores[1].style.backgroundColor = '#000';

articulos[0].classList.add('sobre');
articulos[1].classList.add('sobre');
articulos[2].classList.add('sobre');
articulos[3].classList.add('sobre');
articulos[4].classList.add('sobre');
articulos[5].classList.add('sobre');