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

console.log("Hola MUndo".length);

/*
  En un objeto hay propiedades y metodos
  Las propiedades devuelven un valor que puede ser string, number, boolean etc
  metodos ejecutan una funcion
*/

//Metodos de strings


/*
  En un objeto hay propiedades y metodos
  Las propiedades devuelven un valor que puede ser string, number, boolean, etc.
  Los metodos ejecutan una funcion
*/

//Metodos de strings
var texto = "Hola, soy un texto";
//Transformar un string a mayusculas
console.log(texto.toUpperCase());
//Transformar un string a minusculas
console.log(texto.toLowerCase());
//Obtiene la posicion de una palabra en un string
console.log(texto.indexOf("soy"));
//Corta un string
console.log(texto.slice(5, 8));
//Divide un string en un array
console.log(texto.split(" "));
//Reemplaza una palabra por otra
console.log(texto.replace("Hola", "Adios"));
//Reemplaza todas las ocurrencias de una palabra por otra
console.log(texto.replaceAll("o", "0"));
//Verifica si un string incluye una palabra
console.log(texto.includes("Hola"));
//Verifica si un string empieza con una palabra
console.log(texto.startsWith("Hola"));
//Verifica si un string termina con una palabra
console.log(texto.endsWith("texto"));
//Obtiene la posicion de un caracter en un string
console.log(texto.charAt(-2));
//Obtiene el codigo ASCII de un caracter
console.log(texto.charCodeAt(2));
//Recorta los espacios en blanco de un string
console.log("  Hola, soy un texto   ".trim());
//Repite un string
console.log(texto.repeat(3));
//Concatena dos strings
console.log(texto.concat(" y yo soy otro texto"));
// texto + " y yo soy otro texto"

//Ejercicios de metodos de strings
//1. Crea una función que reciba un string y devuelva la cantidad de caracteres que tiene.
//2. Crea una función que reciba un string y devuelva la cantidad de palabras que tiene.
//3. Crea una función que reciba un string y devuelva el string invertido. (Hola -> aloH) (Utiliza recursividad)
//4. Verifica si un string es un palindromo (se lee igual de izquierda a derecha que de derecha a izquierda)


function contarCaracteres(contador) {
  if(typeof texto !== "string"){
    return "El valor debe de ser un string"
  }
  return contador.length;
}
console.log(contarCaracteres("Hola soy Gianmario"));

function contarPalabra(contadorPalabras) {
  return contadorPalabras.split(" ").length;
}
console.log(contarPalabra("Hola soy Gian"));



function invertirPalabra (Palabra){
  if  (Palabra.length === 0){
    return "";
  }
  else {
    return invertirPalabra(Palabra.slice(1)) + Palabra.charAt(0);
  }
}
console.log(invertirPalabra("Antonia"))


//4
function esPalindromo(texto){
  if(typeof texto !== "string"){
    return "El valor debe ser un string";
  }
  texto = texto.toLowerCase();
  //console.log(texto.split(" ").join(""), invertirPalabra(texto).split(" ").join(""));
  if(texto.split(" ").join("") === invertirPalabra(texto).split(" ").join("")){
    return "Es palindromo";
  }
  return "No es palindromo";
}

console.log(esPalindromo("La ruta nos aporto otro paso natural")); //Es palindromo


inventario = [
  {
    categoria: "Frutas",
    productos: [
      {
        nombre: "Manzana",
        precio: 1.5,
        cantidad: 10
      },
      {
        nombre: "Pera",
        precio: 2.5,
        cantidad: 5
      }
    ]
  },
  {
    categoria: "Carnes",
    productos: [
      {
        nombre: "Pollo",
        precio: 3.5,
        cantidad: 20
      },
      {
        nombre: "Res",
        precio: 5.5,
        cantidad: 15
      }
    ]
  },
  {
    categoria: "Lacteos",
    productos: [
      {
        nombre: "Leche",
        precio: 1.5,
        cantidad: 10
      },
      {
        nombre: "Queso",
        tipos:[
          {
            nombre: "Pecorino",
            precio: 2.5,
            cantidad: 5
          },
          {
            nombre: "Mozarella",
            precio: 3.5,
            cantidad: 10
          }
        ]
      }
    ]
  }
]


console.log(inventario[2].productos[1].tipos[0].nombre)

const inventario_mercado = [ 
  {
    categoria: "Frutas",
    subcategorias: [
      {
        tipo: "Manzanas",
        marcas: [
          {
            nombre: "Apple Farms",
            origen: "EE.UU.",
            productos: [
              {
                nombre: "Manzana Gala",
                precio: 1.2,
                cantidad: 30,
                proveedor: {
                  nombre: "Fresh Import",
                  ubicacion: "California, EE.UU.",
                  contacto: "import_fresh@example.com"
                },
                condiciones: {
                  temperatura: "4°C",
                  humedad: "90%"
                },
                fechaIngreso: "2023-09-10",
                vidaUtilDias: 20,
                certificaciones: ["Orgánico", "Libre de pesticidas"],
                embalaje: "Caja de cartón con separadores"
              },
              {
                nombre: "Manzana Fuji",
                precio: 1.5,
                cantidad: 25,
                proveedor: {
                  nombre: "Fresh Import",
                  ubicacion: "California, EE.UU.",
                  contacto: "import_fresh@example.com"
                },
                condiciones: {
                  temperatura: "4°C",
                  humedad: "85%"
                },
                fechaIngreso: "2023-09-15",
                vidaUtilDias: 25,
                certificaciones: ["Orgánico", "GMO-Free"],
                embalaje: "Empaque biodegradable"
              }
            ]
          },
          {
            nombre: "EcoFruit",
            origen: "Chile",
            productos: [
              {
                nombre: "Manzana Verde",
                precio: 1.3,
                cantidad: 40,
                proveedor: {
                  nombre: "Green Supply",
                  ubicacion: "Santiago, Chile",
                  contacto: "greensupply@example.cl"
                },
                condiciones: {
                  temperatura: "3°C",
                  humedad: "80%"
                },
                fechaIngreso: "2023-09-08",
                vidaUtilDias: 30,
                certificaciones: ["Fair Trade", "Orgánico"],
                embalaje: "Bolsa de papel reciclado"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    categoria: "Carnes",
    subcategorias: [
      {
        tipo: "Aves",
        marcas: [
          {
            nombre: "FreeRange Poultry",
            origen: "Brasil",
            productos: [
              {
                nombre: "Pollo Entero",
                precio: 4.5,
                cantidad: 50,
                proveedor: {
                  nombre: "Granjas Unidas",
                  ubicacion: "São Paulo, Brasil",
                  contacto: "granjas_unidas@example.com"
                },
                condiciones: {
                  temperatura: "-2°C",
                  embalaje: "Empaque al vacío",
                  fechaCaducidad: "2023-10-05"
                },
                fechaIngreso: "2023-09-10",
                vidaUtilDias: 45,
                pesoPromedio: "1.2 kg",
                certificaciones: ["Libre de hormonas", "Bienestar animal"]
              }
            ]
          }
        ]
      },
      {
        tipo: "Res",
        marcas: [
          {
            nombre: "Bovino Premium",
            origen: "Argentina",
            productos: [
              {
                nombre: "Corte de Res Angus",
                precio: 10.0,
                cantidad: 20,
                proveedor: {
                  nombre: "Exportadora Bovino",
                  ubicacion: "Buenos Aires, Argentina",
                  contacto: "exportadora_bovino@example.com"
                },
                condiciones: {
                  temperatura: "-3°C",
                  embalaje: "Empaque al vacío"
                },
                fechaIngreso: "2023-09-12",
                vidaUtilDias: 30,
                pesoPromedio: "0.8 kg",
                certificaciones: ["GMO-Free", "Alta calidad"]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    categoria: "Lácteos",
    subcategorias: [
      {
        tipo: "Leche",
        marcas: [
          {
            nombre: "Lácteos del Valle",
            origen: "México",
            productos: [
              {
                nombre: "Leche Entera",
                precio: 2.0,
                cantidad: 100,
                proveedor: {
                  nombre: "Distribuidora Valle",
                  ubicacion: "Ciudad de México, México",
                  contacto: "distribuidora_valle@example.com"
                },
                condiciones: {
                  temperatura: "4°C",
                  embalaje: "Envase de cartón reciclable"
                },
                fechaIngreso: "2023-09-18",
                vidaUtilDias: 10,
                tipo: "Entera",
                certificaciones: ["Certificado orgánico"]
              }
            ]
          }
        ]
      },
      {
        tipo: "Quesos",
        marcas: [
          {
            nombre: "Quesería Tradicional",
            origen: "Francia",
            productos: [
              {
                nombre: "Queso Brie",
                precio: 8.5,
                cantidad: 15,
                proveedor: {
                  nombre: "Quesería Tradicional",
                  ubicacion: "París, Francia",
                  contacto: "queso_france@example.fr"
                },
                condiciones: {
                  temperatura: "5°C",
                  humedad: "75%"
                },
                fechaIngreso: "2023-09-20",
                vidaUtilDias: 60,
                origenLeche: "Vaca",
                certificaciones: ["Appellation d'origine contrôlée (AOC)"],
                embalaje: "Caja de madera"
              },
              {
                nombre: "Queso Roquefort",
                precio: 12.0,
                cantidad: 10,
                proveedor: {
                  nombre: "Quesería Tradicional",
                  ubicacion: "París, Francia",
                  contacto: "queso_france@example.fr"
                },
                condiciones: {
                  temperatura: "6°C",
                  humedad: "80%"
                },
                fechaIngreso: "2023-09-21",
                vidaUtilDias: 90,
                origenLeche: "Oveja",
                certificaciones: ["Appellation d'origine contrôlée (AOC)"],
                embalaje: "Empaque de cera ecológica"
              }
            ]
          }
        ]
      }
    ]
  }
];

console.log(inventario_mercado[0].subcategorias[0].marcas[1].nombre);
console.log(inventario_mercado[0].subcategorias[0].marcas[0].productos[1].precio);
console.log(inventario_mercado[0].subcategorias[0].marcas[1].productos);
console.log(inventario_mercado[1].subcategorias[0].marcas[0].nombre);
console.log(inventario_mercado[1].subcategorias[0].marcas[0].productos[0].precio);
console.log(inventario_mercado[2].subcategorias[0].marcas[0].productos[0].proveedor);
console.log(inventario_mercado[2].subcategorias[1].marcas[0].productos[1].vidaUtilDias);

/*
  Ejercicios de selección de datos de un array de objetos
  1. Imprime el nombre de la marca de manzanas que proviene de Chile
  2. Imprime el precio de la manzana Fuji
  3. Imprime el array de productos de la marca de manzanas que proviene de Chile
  4. Imprime el nombre de la marca de pollo que proviene de Brasil
  5. Imprime el precio del pollo entero
  6. Imprime el proveedor (objeto) de leche de méxico
  7. Imprime la vida util del queso de Oveja
*/
//Metodos de array
frutas = ["Manzana", "Pera", "Uva", "Sandia"];
//Longitud del array
console.log(frutas.length);
//Agregar un elemento al final del array
frutas.push("Mango");
//Agregar un elemento al inicio del array
frutas.unshift("Fresa");
//Eliminar el ultimo elemento del array
frutas.pop();
//Eliminar el primer elemento del array
frutas.shift();
//Eliminar un elemento en una posicion especifica
frutas.splice(1, 1);
//Eliminar un elemento en una posicion especifica y agregar un nuevo elemento
frutas.splice(1, 1, "Uva");
//Concatenar dos arrays
var frutas2 = ["Pera", "Kiwi"];
frutas = frutas.concat(frutas2);
console.log(frutas);
// [Manzana, Uva, Sandia, Pera, Kiwi]
//Ordenar un array
console.log(frutas.sort());
//[Kiwi, Manzana, Pera, Sandia, Uva]
//Invertir un array
console.log(frutas.reverse());
//[Uva, Sandia, Pera, Manzana, Kiwi]
//Buscar un elemento en un array (devuelve la posicion)
console.log(frutas.indexOf("Uva"));
//Buscar un elemento en un array (devuelve true o false)
console.log(frutas.includes("Uva"));
//cortar un array
console.log(frutas.slice(1, 3));
// [Sandia, Pera] (no incluye el ultimo elemento)

//Curiosidad, los strings tambien pueden ser tratados como arrays
var texto = "Hola, soy un texto";
console.log(texto[4]);

//Callback
// Es una función que se pasa como argumento a otra función

function calcular_descuento(precio, descuento){
  return precio - (precio * descuento);
}

function comprar(producto = "", precio = 0,  funcioncita){
  if(producto === "manzana"){
    return funcioncita(precio, 0.1);
  } else {
    return precio;
  }
}

console.log(comprar("manzana", 100, calcular_descuento));

//[Kiwi, Manzana, Pera, Sandia, Uva]
//filtrar un array
console.log(frutas.filter(
  (fruta) => fruta.length > 4)
);
//otro ejemplo de filter
console.log(frutas.filter(
  fruta => fruta.includes("a")
));
/*
  Ejercicios de metodos de arrays
  1. Crea una función que reciba un array de numeros y devuelva la suma de todos los numeros.
  2. Crea una función que reciba un array de numeros y devuelva el promedio de todos los numeros.
  3. Crea una función que reciba un array de numeros y devuelva el numero mayor.
  4. Crea una función que reciba un array de numeros y devuelva el numero menor.
  5. Crea una función que reciba un array de numeros y devuelva un array con los numeros pares.
  6. Crea una función que reciba un array de numeros y devuelva un array con los numeros impares.
  7. Crea una función que reciba un array de ciudades y devuelva un array con las ciudades que empiezan con la letra "M".
  8. Crea una función que reciba un array de nombres y verifique si el nombre "Juan" se encuentra en el array y devuelva su posicion.
*/

// ejercicio 1

function sumar(numeros){
  return numeros.reduce((suma, numero) => suma + numero, 0);
}

var numeros = [1,2,3,4,5];
console.log(sumar(numeros));

// ejercicio 2

function sumarnum(number) {
  return number.reduce((suma, number) => suma + number, 0) / number.length;
}

var number = [1,2,3,4,5,8];
console.log(sumarnum(number))

// ejercicio 3

  function mayor(numeros) {
    return numeros.sort((a, b) => b - a) [0];
  }

  var numeros = [1,2,3,4,6,9];
  console.log(mayor(numeros))


  // ejercicio 4

  function mayor(numeros) {
    return numeros.sort((a, b) => a - b) [0];
  }

  var numeros = [1,2,3,4,6,9];
  console.log(mayor(numeros))


// ejercicio 5

function numerospares(numeros){
  return numeros.filter(numeros => numeros % 2 === 0);
}

var numeros = [1,2,3,4,6,9];
console.log(numerospares(numeros))

// ejercicio 6

function numerospares(numeros){
  return numeros.filter(numeros => numeros % 2 !== 0);
}

var numeros = [1,2,3,4,6,9];
console.log(numerospares(numeros))

// ejercicio 7

ciudades = ["Margarita", "Aragua de Barcelona", "Madrid", "Barcelona", "Monaco"];
function ciudades_M(ciudades) {
  return ciudades.filter(ciudad => ciudad.startsWith('M'));
}
filtro_ciudades = ciudades_M(ciudades);
console.log(filtro_ciudades);

//Ejercicio 8

function verificarPosicionJuan(nombres) {
  if (nombres.includes("Juan")) {
    let posicion = nombres.indexOf("Juan");
    return posicion;
  } else {
    return 'El nombre "Juan" no se encuentra en el array';
  }
}

const nombres = ["Antonia", "Sebastian", "Juan", "Jose", "Johanny"];
console.log(verificarPosicionJuan(nombres));

//ciclos (loops)


let carros ["toyota" "mercedes" "chevrolet"]

//Ciclos (Loops)
/*
  Los ciclos nos permiten repetir un bloque de codigo
  mientras se cumpla una condicion
*/

let carros = ["Toyota", "Nissan", "Chevrolet", "Ford"];
//For
for(let i = 0; i < carros.length; i++){
  console.log(carros[i]);
}

//While
let i = 0;
while(i < carros.length){
  console.log(carros[i]);
  if(i === 3){
    break;
  }
  i++;
}

//Do while
let j = 0;
do {
  console.log(carros[j]);
  j++;
} while(j < 0);

//For of (Especial para recorrer arrays)
for(let carro of carros){
  console.log(carro);
}

let persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 20
}

//For in (Especial para recorrer objetos)
for(let propiedad in persona){
  console.log(persona[propiedad]);
}

let comidas = [
  ["Hamburguesa", "Pizza", "Tacos"],
  ["Sushi", "Ramen", "Gyoza"],
  ["Pasta", "Lasagna", "Ravioli"]
];

for(let comida of comidas){
  for(let platillo of comida){
    console.log(platillo);
  }
}

/*
  Ejercicios de ciclos
  1. Crea un ciclo que imprima los numeros del 1 al 100.
  2. Crea un ciclo que permita imprimir cada uno de los valores de la variable compra.
  3. Crea un ciclo que imprima los numeros pares del 0 al 100 de dos en dos. (2, 6, 10, 14, 18, ...)
  4. Realiza el ejercicio de Fibonacci utilizando un ciclo. (Debes imprimir solo los primeros 15 valores)
*/

//ejercicio 1

for(let i = 0; i <= 100; i++){
  console.log(i);
}

//ejercicio 2

let compra = [
  {
    producto: "Manzana",
    precio: 1.5,
    tipos: ["Golden", "Red", "Green"],
    cantidad: 10
  },
  {
    producto: "Pera",
    precio: 2.5,
    tipos: ["Bartlett", "Anjou", "Bosc"],
    cantidad: 5
  }
]

for(let propiedad in compra){
  console.log(compra[propiedad]);
}

//Ejercicio 3

for (let i = 2 ; i <= 100; i = i + 4) {
  console.log(i);
}


//ejercico 4

function fibonacci(numero) {
  let a = 0, b = 1, c;
  for (let i = 0; i < numero; i++) {
    console.log(a);
    c = a;
    a = b;
    b = c + b;
  }
}
console.log(fibonacci(15));


