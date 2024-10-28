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
function sumar(numero1 = 0, numero2 = 0){
  return numero1 + numero2;
}

console.log(sumar(10, 20));
var resultado = sumar(30, 40);

/*
  Ejercicios de funciones con retorno
*/

function calcularIMC(peso = 0, altura = 0){
  return peso / (altura * altura);
}

console.log(calcularIMC(70, 1.70)); //24.221453287197235

function calcularAreaTriangulo(base = 0, altura = 0){
  (base * altura) / 2;
}

console.log(calcularAreaTriangulo(10, 5)); //undefined

function calcularAreaCirculo(radio = 0){
  if( radio <= 0){
    return "El radio debe ser mayor a 0";
  } else if( typeof radio !== "number"){
    return "El radio debe ser un número";
  } else {
    if( radio <= 5){
      return "El radio debe ser mayor a 5";
    }
    return 3.14 * (radio * radio);
  }
}

console.log(calcularAreaCirculo(2));

function salirFinDeSemana(tiempo = false, dinero = false, ganas = false){
  if(tiempo && dinero && ganas){
    console.log("Saldré a divertirme");
  } if (tiempo && dinero){
    return "Saldré desganado";
  } if(tiempo){
    if(ganas){
      console.log("Saldre a hacer ejecicio");
    }
    return "Saldré a matar el tiempo";
  }
  return "No saldré";
}

console.log(salirFinDeSemana(true, false, true));

Ejercicios de funciones con retorno y sin retorno. Debes determinar que imprime
  cada uno de los console.log

  function suma(numero1, numero2){ 
    return numero1 + numero2;
  }
  
  console.log(suma(10, 20)); //30

  function resta(numero1, numero2){
    console.log(numero1 - numero2); //-10
  }
  
  console.log(resta(10, 20)); //undefined

  function hallarAreaTriangulo(base, altura){
    if(base <= 0 || altura <= 0){
      return "Los valores deben ser mayores a 0";
    } else if(base === altura){
      return "La base y la altura no pueden ser iguales";
    } else {
      console.log((base * altura) / 2) //25
    }
  }

  console.log(hallarAreaTriangulo(10, 5)); // undefined

  function hallarAreaCirculo(radio){
    if(radio <= 0){
      return "El radio debe ser mayor a 0";
    } else if(typeof radio !== "number"){
      return "El radio debe ser un número";
    } else {
      if(radio <= 5){
        return "El radio debe ser mayor a 5";
      }
      console.log(3.14 * (radio * radio));
    }
  }

  console.log(hallarAreaCirculo(2)); //El radio debe ser mayor a 5

  /*
  Recursividad (Una funcion se llama a si misma)
  */

  function contar(numero){
    if(numero >= 100){
      return;
    }
    console.log(numero);
    contar(numero + 10);
  }

  contar(0);

  //funciones dentro de funciones
  function calculadora()

  function sumar(numero1 = 0, numero2 = 0) {
    return numero1 + numero2;
  }
  
  function restar(numero1 = 0, numero2 = 0) {
    return numero1 - numero2;
  }
  
  function multiplicar(numero1 = 0, numero2 = 0) {
    return numero1 * numero2;
  }
  
  function dividir(numero1 = 0, numero2 = 0) {
    return numero1 / numero2;
  }
  
  //Funciones dentro de funciones
  function calculadora(numero1 = 0, numero2 = 0, operacion = "sumar") {
    if (operacion === "sumar") {
      return sumar(numero1, numero2);
    } else if (operacion === "restar") {
      return restar(numero1, numero2);
    } else if (operacion === "multiplicar") {
      return multiplicar(numero1, numero2);
    } else if (operacion === "dividir") {
        if(numero2 === 0){
          return "No se puede dividir por 0"
        }
      return dividir(numero1, numero2);
    } else {
      return "Operación no válida";
    }
  }
  
/**
 * Ejercicios de recursividad
 * 1. Crea una función que imprima la potencia de un número elevado a otro número.
 * 2. Crea una función que reciba un número y retorne el factorial de ese número.
 * 3. Crea una función que imprima la sucesion de Fibonacci hasta el número que se le pase
 * como parametro.
 */

const msg = "What kind of thing are you tryng to put in the function? You, monster..."

function isNumber(input) {
  if (typeof (input) !== "number") {
    return false
  } else {
    return true
  }
};


function power(x, y) {
  if ((isNumber(x) == true) && (isNumber(y) == true)) {
    if (y === 0) {
      return 1;
    } else {
      return x * power(x, y - 1);
    };
  } else return msg;
};

console.log("Power: " + power(2, 5)); // Expected result: 32

function factorial(n) {
  if (isNumber(n) == true) {
    if ((n === 0) || (n === 1)) {
      return 1;
    } else {
      return n * factorial(n - 1)
    };
  } else return msg;
};

console.log("Factorial: " + factorial(6)) // Expected result: 720

// Fn = Fn-1 + Fn-2 ...
function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  };
};

function printFibonacci(n, current_n = 0) {
  if (isNumber(n) == true) {
    if (current_n == n + 1) return;
    else {
      console.log("Fibonacci (Iteration No. " + current_n + "): " + fibonacci(current_n))
      printFibonacci(n, current_n + 1) // cosorro
    };
  } else return msg;
};

// Expected result: 0… 1… 2… 3… 5… 8… 13… 21… 34… 55… 89… 144…
// Current result: 0… 1… 2… 3… 5… 8… 13… 21… 34… 55… 89… 144… Undefined ... Pls, forgive us
console.log(printFibonacci(12))