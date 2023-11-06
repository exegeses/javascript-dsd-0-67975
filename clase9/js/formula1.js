//ubicamos elementos dentro del DOM
const redbull = document.querySelector('#redbull');
const ferrari = document.querySelector('#ferrari');
const amartin = document.querySelector('#amartin');
const mercedes = document.querySelector('#mercedes');

btnRedbull = document.querySelector('#btnRedbull');
btnFerrari = document.querySelector('#btnFerrari');
btnAMartin = document.querySelector('#btnAMartin');
btnMercedes = document.querySelector('#btnMercedes');

/*
    estado inicial: 
    se ve 1(un) sólo div de los 4
    vamos a ocultar los otros 3
    [ ferrari, amartin, mercedes ]
*/
ferrari.style.display = 'none';
amartin.style.display = 'none';
mercedes.style.display = 'none';

btnRedbull.addEventListener(
        'click',
        function()
        {
            redbull.style.display = 'flex';
            ferrari.style.display = 'none';
            amartin.style.display = 'none';
            mercedes.style.display = 'none';
        }
);
btnFerrari.addEventListener(
        'click',
        function()
        {
            redbull.style.display = 'none';
            ferrari.style.display = 'flex';
            amartin.style.display = 'none';
            mercedes.style.display = 'none';
        }
);
btnAMartin.addEventListener(
        'click',
        function()
        {
            redbull.style.display = 'none';
            ferrari.style.display = 'none';
            amartin.style.display = 'flex';
            mercedes.style.display = 'none';
        }
);
btnMercedes.addEventListener(
        'click',
        function()
        {
            redbull.style.display = 'none';
            ferrari.style.display = 'none';
            amartin.style.display = 'none';
            mercedes.style.display = 'flex';
        }
);