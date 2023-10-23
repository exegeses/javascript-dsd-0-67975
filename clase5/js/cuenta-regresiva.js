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
}

cuentaRegresiva();

