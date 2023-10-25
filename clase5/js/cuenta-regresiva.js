//ubicamos elementos dentro del DOM
txtDias = document.querySelector('#txtDias');
txtHoras = document.querySelector('#txtHoras');
txtMinutos = document.querySelector('#txtMinutos');
txtSegundos = document.querySelector('#txtSegundos');
h1 = document.querySelector('h1');



//declaramos función de control
function cuentaRegresiva()
{
    //creamos objetos de fecha
    const actual = new Date();
    const final = new Date(2023, 10, 19, 8); // 8AM

    //calculamos la diferenmcia en de eventos 
    //  expresado en milisegundos
    let diferencia = final - actual;
    console.log(diferencia);

    /* convertimos unidades de tiempo */
    //obtenemos tiempo expresado en segundos 
        //(y quetamos decimales)
    let segundos = Math.trunc( diferencia/1000 );
    console.log(segundos);
    let minutos = Math.trunc(segundos/60);
    console.log(minutos);
    let horas = Math.trunc( minutos/60 );
    console.log(horas);
    let dias = Math.trunc( horas/24 );
    console.log(dias);

    /* calcualmos los tiempos restantes */
    horas = horas % 24;
    minutos = minutos % 60;
    segundos = segundos % 60;
    console.log(horas + ' horas ' + minutos + ' minutos ' + segundos + ' segundos');
    console.log( `${horas} horas ${minutos} minutos ${segundos} segundos` );
    

    //imprimimos los tiempos en los span
    txtDias.innerText = dias;
    txtHoras.innerText = horas;
    txtMinutos.innerText = minutos;
    txtSegundos.innerText = segundos;
}

cuentaRegresiva();

