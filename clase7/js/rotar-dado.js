//ubicamos elementos dentro del DOM
const caja = document.querySelector('#caja');
/*  
    generar un número aleatorio
    entre el 1 y el 6 SIN DECIMALES

    insertar en el contenedor #caja
    una imagen de una cara de un dado (random)

    reproducir audio
*/

function getNumero()
{
    let numeroAleatorio = Math.random();
    // un número aleatorio entre 0 ~ 1 (con decimales)
    console.log( numeroAleatorio );

    let numeroPor5 = numeroAleatorio * 5;
    /* al multiplicar por 5  obtengo numero entre 0 ~ 5 */
    console.log( numeroPor5 )

    let numero = Math.round( numeroPor5 );
    // redondeamos 
    console.log( numero );
    // sumamos 1
    numero = numero + 1 ;
    console.log( numero );
    return numero;
}
/*  Math.round( Math.random()  *5  +1)  */


function mostrarImagen( numero )
{
    caja.innerHTML = '<img src="red/dice-'+ numero + '.png">';
}

function sonido()
{
    let sonidoDado = new Audio('audio/dice.mp3');
    sonidoDado.play();
}

function tirarDado()
{
    let numero = getNumero();
    mostrarImagen(numero);
    sonido();
}