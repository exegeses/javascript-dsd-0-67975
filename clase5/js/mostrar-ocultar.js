//ubicamos elemento dentro del DOM
const caja = document.querySelector('#caja');

//funciones de control
function ocultar()
{
    //caja.style.opacity = '0';
    //caja.style.visibility = 'hidden';
    //caja.style.display = 'none';
    caja.classList.add('hide');
    caja.classList.remove('show');
}
function mostrar()
{
    //caja.style.opacity = '1';
    //caja.style.visibility = 'visible';
    //caja.style.display = 'block';
    caja.classList.add('show');
    caja.classList.remove('hide');

}
function mostrarOcultar()
{
    /*
    if( caja.style.display == 'block' ){
        ocultar();
    }
    else{
        mostrar();
    }*/
    caja.classList.toggle('hide');
    //toggle si NO está la agrega
    // paro si ESTÁ la quita
}
