/*
    para declarar variables utilizamos
    la palabra reservada "let"
*/

let numero = 73;
let frase = 'Hola Mundo';

/* 
    para declarar constantes utilizamos
    la palabra reservada "const"
*/
const nombre = 'Marcos';


/* escribiumos en el documento */
document.write( '<br>' );
document.write( numero );
/* sobre escribimos el valor de la variable */
numero = 11;
document.write( '<br>' );
document.write( numero );
document.write( '<br>' );
document.write( nombre );
//nombre = 'Rick Sánchez';
document.write( '<br>' );
numero = 42;
document.write( numero );


document.getElementById('txt').innerText = frase