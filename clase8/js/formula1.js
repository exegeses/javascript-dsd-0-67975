//ubicamos elementos dentro del DOM
const redbull = document.querySelector('#redbull');
const ferrari = document.querySelector('#ferrari');
const amartin = document.querySelector('#amartin');
const mercedes = document.querySelector('#mercedes');

/*
    estado inicial: 
    se ve 1(un) sólo div de los 4
    vamos a ocultar los otros 3
    [ ferrari, amartin, mercedes ]
*/
ferrari.style.display = 'none';
amartin.style.display = 'none';
mercedes.style.display = 'none';

//declaramos función de control
function showHide( escuderia )
{
    switch( escuderia ){
        case 'redbull':
            redbull.style.display = 'flex';
            ferrari.style.display = 'none';
            amartin.style.display = 'none';
            mercedes.style.display = 'none';
            break;
        case 'ferrari':
            redbull.style.display = 'none';
            ferrari.style.display = 'flex';
            amartin.style.display = 'none';
            mercedes.style.display = 'none';
            break;
        case 'amartin':
            redbull.style.display = 'none';
            ferrari.style.display = 'none';
            amartin.style.display = 'flex';
            mercedes.style.display = 'none';
            break;
        case 'mercedes':
            redbull.style.display = 'none';
            ferrari.style.display = 'none';
            amartin.style.display = 'none';
            mercedes.style.display = 'flex';
            break;           
    }
}