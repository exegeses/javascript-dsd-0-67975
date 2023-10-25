//ubicamos elementos dentro del DOM
const txtDias = document.querySelector('#txtDias');
const txtHoras = document.querySelector('#txtHoras');
const txtMinutos = document.querySelector('#txtMinutos');
const txtSegundos = document.querySelector('#txtSegundos');
const h1 = document.querySelector('h1');

let intervalo = '';

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


    /*#########################*/
    /*####interrumpir el intervalo####*/
    // if( actual > final )
    if( 
        dias <= 0 && 
        horas <= 0 && 
        minutos <= 0 &&
        segundos < 0  
       ){
        h1.innerText = 'Ya comenzó el ballotaje';
        clearInterval( intervalo );
        segundos = 0;
        minutos = 0;
        horas = 0;
        dias = 0;
    }


    /* agregamos 0 (ceros) iniciales */
        if(segundos < 10){
            segundos = '0' + segundos;
        }
        if(minutos < 10){
            minutos = '0' + minutos;
        }
        if(horas < 10){
            horas = '0' + horas;
        }
        if(dias < 10){
            dias = '0' + dias;
        }


    console.log(horas + ' horas ' + minutos + ' minutos ' + segundos + ' segundos');
    console.log( `${horas} horas ${minutos} minutos ${segundos} segundos` );
    

    //imprimimos los tiempos en los span
    txtDias.innerText = dias;
    txtHoras.innerText = horas;
    txtMinutos.innerText = minutos;
    txtSegundos.innerText = segundos;
}

cuentaRegresiva();
intervalo = setInterval( cuentaRegresiva, 1000 );
//clearInterval(  )