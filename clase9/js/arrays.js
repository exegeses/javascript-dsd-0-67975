const txt = document.querySelector('#txt');

const marcas = [ 
                 'Hermès', 'Zara', 'Boss', 
                 'Aeropostale','Tommy', 'Hollister', 
                 'Kingpin', 'Old Navy', 'Adidas',
                 'Nike', 'Gola'
                ];

console.log(marcas);                
//imprimimos el listado en el span
txt.innerText = marcas;

//imprimimos UNO de los elementos del array
txt.innerText = marcas[4];