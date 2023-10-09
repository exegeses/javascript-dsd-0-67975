//ubicamos elemento deontro del DOM
const txt = document.getElementById('txt');

/*
    mostrar fecha actual
    formato:   09/10/2023
*/
// creamos objeto de fecha
const fecha = new Date();
console.log( fecha );

//obtenemos el número de día de mes
let diaMes = fecha.getDate();
if( diaMes < 10 ){
   diaMes = '0'+ diaMes;
}
console.log( diaMes );

//obtenemos el número de mes actual
let mes = fecha.getMonth() + 1;
if( mes < 10 ){
    mes = '0'+ mes;
 }
console.log( mes );

//obtenemos el número de año actual
let anio = fecha.getFullYear();
console.log( anio );

//imprimimos dentro del span usando CONCATENACION
//txt.innerText = diaMes +'/'+ mes +'/'+ anio; 

//imprimimos dentro del span usando 
// INTERPOLACIÖN de cadenas
txt.innerText = `${diaMes}/${mes}/${anio}`;
