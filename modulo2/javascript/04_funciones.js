// function saludar(){
//     console.log('Hola!');
// }

function suma(a,b){
    return a + b;
}

// funciones anonimas
const resta = function(a,b) {
    return a - b
}

// arrow function
const multiplicacion = (a,b) => {
 return a*b;   
}

// parametros predeterminados
function saludar(nombre = 'Santiago'){
    return `Hola ${nombre}`
}
console.log(saludar('Juan'));

// saludar();
// let result = suma(1,2)
// console.log(result)
// result++
// console.log(result)
// let result = resta(5,3)
// console.log(result);
// console.log(multiplicacion(6,4));