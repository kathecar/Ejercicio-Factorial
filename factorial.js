function factorial() {
     //Se crea una funcion que recibe un numero

     let numero = Number(prompt("Escriba un numero")) //Se pide un numero al usuario

     if(isNaN(numero) || numero < 0) {
        alert("Ingrese un numero valido y que no sea negativo, por favor 😁");
        return;
        }

     let resultado = 1; 

     for (let i = 1; i <= numero; i++) {
         resultado = resultado * i; 
     }

    //Probando en consola como ventana emergente
    console.log(`El factorial de ${numero} es: ${resultado}`);
    
    //Mostrando el resultado en el HTML
    document.getElementById("resultado").textContent = `El factorial de ${numero} es: ${resultado}`;
}