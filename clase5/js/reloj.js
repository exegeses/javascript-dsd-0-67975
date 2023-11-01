const txt = document.querySelector('#txt');
function agregarCero( numero )
{
    if( numero < 10 ){
        numero = '0'+ numero;
    }
    return numero;
}
function reloj()
{
    const fecha = new Date();
    //obtenemos el número de las horas
    let horas = fecha.getHours();
    horas = agregarCero( horas );

    //console.log( 'horas: ' + horas );
    console.log( `horas: ${horas}` );

    //obtenemos el número de los minutos
    let minutos = fecha.getMinutes();
    minutos = agregarCero( minutos );

    //console.log( 'horas: ' + minutos );
    console.log( `minutos: ${minutos}` );

    //obtenemos el número de los segundos
    let segundos = fecha.getSeconds();
    segundos = agregarCero( segundos );

    //console.log( 'horas: ' + segundos );
    console.log( `segundos: ${segundos}` );

    //imprimimos dentro del span
    txt.innerText = `${horas}:${minutos}:${segundos}`;
}

//invocamos la función reloj()
reloj();
//actualizamos el llamado a la función reloj
setInterval( reloj, 1000 );