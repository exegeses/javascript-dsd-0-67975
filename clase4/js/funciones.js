//ubicamos elemento dentro del DOMO
//const caja = document.getElementById('caja');
const caja = document.querySelector('#caja');
const selector = document.querySelector('#selector');
/*
const h1 = document.querySelector('h1');
h1.innerText = 'h1 modificado';
const losA = document.querySelectorAll('nav a');
losA[1].style.backgroundColor = 'cyan';
*/

//declaración de funciones
function pintarVerde()
{
    caja.style.backgroundColor = '#060';
    caja.innerText = 'Verde';
}
function pintarNaranja()
{
    caja.style.backgroundColor = '#f60';
    caja.innerText = 'Naranja';
}
function pintarVioleta()
{
    caja.style.backgroundColor = '#909';
    caja.innerText = 'Violeta';
}

/* color picker */
function seleccionarColor()
{
    //obtenemos el color seleccionado
    let codigo = selector.value;
    caja.style.backgroundColor = codigo;
    caja.innerText = codigo;
}

