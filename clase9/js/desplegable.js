const boton = document.querySelector('#boton');
const desplegable = document.querySelector('#desplegable');

//estado inicial: desplegable oculto
desplegable.classList.add('ocultar');
boton.addEventListener(
        'mouseover',
        function(){
            boton.classList.add('resaltar');
            desplegable.classList.remove('ocultar');
            desplegable.classList.add('desplegar');
        }
);
desplegable.addEventListener(
        'mouseout',
        function(){
            boton.classList.remove('resaltar');
            desplegable.classList.remove('desplegar');
            desplegable.classList.add('ocultar');
        }
);