const prompt = require("prompt-sync")();  //Se importa el paquete promp-sync

let numero = Number(prompt("Escriba un numero")) //Se pide un numero al usuario

function factorial(numero) {
     //Se crea una funcion que recibe un numero
    
     let resultado = 1; 

     for (let i = 1; i <= numero; i++) {
         resultado = resultado * i; 
     }
     return resultado;
}
console.log(factorial(numero));