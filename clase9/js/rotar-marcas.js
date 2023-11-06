const  anterior = document.querySelector('#anterior')
const  txt = document.querySelector('#listaMarcas span');
const  siguiente = document.querySelector('#siguiente')

const marcas = [ 
    'Hermès', 'Zara', 'Boss', 
    'Aeropostale','Tommy', 'Hollister', 
    'Kingpin', 'Old Navy', 'Adidas',
    'Nike', 'Gola'
   ];
const largo = marcas.length;
console.log( marcas );

//esto inicial
let posicion = 1;
/* escibimos en el span */
txt.innerText = marcas[posicion];

siguiente.addEventListener(
        'click',
        function()
        {
            posicion++; //posicion = posicion + 1; 
            if( posicion == largo ){
                posicion = 0;
            }
            txt.innerText = marcas[posicion];
        }
);
anterior.addEventListener(
        'click',
        function()
        {
            posicion--;
            if( posicion == 0 ){
                posicion = largo - 1;
            }
            txt.innerText = marcas[posicion];
        }
);