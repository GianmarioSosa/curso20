//SCOPE (ALCANCE)
var nombre = 'Juan'; // global
let apellido = 'Perez'; //LOCAL

const PI = 3.1416;

if (true){
  let numero1 = 16;
  var numero2 = 20;
}

//console.log (numero1) //error
console.log(numero2);

//let fuera de bloque de codigo funciona como var global.

//FUNCIONES
/*
  nos permiten reutilizar un bloque de codigo
  similar a los MIXINS en SASS
*/

//Funcion sin parametros
//Declaracion de la funcion
function saludar(){
  console.log('Hola, soy una funcion')
}

//Llamamos a la funcion 
saludar();
saludar();
saludar();
saludar();

//funcion con parametros
function saludarPersona(nombre = "Desconocido", edad = 0){
  console.log("Hola, soy " + nombre + " y tengo " + edad + " anios")
}

saludarPersona("Gian", 20);
saludarPersona("Mario");
saludarPersona();

function calculadora(numero1 = 5, operador = '+', numero2 = 3){
  if (operador==='+'){
    console.log(numero1 + numero2)
  }else if (operador==='-'){
    console.log(numero1 - numero2)
  }else if (operador==='*'){
    console.log(numero1 * numero2)
  }else if (operador==='/'){
    console.log(numero1 / numero2)
  }else if (operador==='%'){
    console.log(numero1%numero2)
  }else if (operador==='**'){
    console.log(numero1 ** numero2)
}
}
calculadora ()
calculadora (20, '-' , 5)
calculadora (10, '*' , 2)
calculadora (10, '/' , 5)
calculadora (5, '%' , 2)
calculadora (5, '**' ,2)

//Funcion con retorno
function sumar (numero1 = 0, numero2 = 0)