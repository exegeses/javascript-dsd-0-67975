const selector = document.querySelector('#selector input');

//declaración de funciones
function saludar( nombre )
{
    console.log('hola ' + nombre );
}
function pintar( codigoColor, nombreColor )
{
    caja.style.backgroundColor = codigoColor;
    caja.innerText = nombreColor;
}
function colorear()
{
    //obtenemos el código de color seleccionado
    let colorSeleccionado = selector.value;
    // invocamos a la función pintar()
    pintar( colorSeleccionado, colorSeleccionado );
}



//invocamos a la función
saludar( 'Rick' );
saludar( 'Jess' );
saludar( 'Carl' );




