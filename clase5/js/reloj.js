const txt = document.querySelector('#txt');

function reloj()
{
    const fecha = new Date();
    //obtenemos el número de las horas
    let horas = fecha.getHours();
    if( horas < 10 ){
        horas = '0'+ horas;
    }
    //console.log( 'horas: ' + horas );
    console.log( `horas: ${horas}` );

    //obtenemos el número de los minutos
    let minutos = fecha.getMinutes();
    if( minutos < 10 ){
        minutos = '0'+ minutos;
    }
    //console.log( 'horas: ' + minutos );
    console.log( `minutos: ${minutos}` );

    //obtenemos el número de los segundos
    let segundos = fecha.getSeconds();
    if( segundos < 10 ){
        segundos = '0'+ segundos;
    }
    //console.log( 'horas: ' + segundos );
    console.log( `segundos: ${segundos}` );

    //imprimimos dentro del span
    txt.innerText = `${horas}:${minutos}:${segundos}`;
}

//invocamos la función reloj()
reloj();
//actualizamos el llamado a la función reloj
setInterval( reloj, 1000 );