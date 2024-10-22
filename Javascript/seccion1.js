//alert("Me ejecuto desde un archivo exteerno lol");
//Una linea
/*
  varias
  lineas
*/

//LA CONSOLA
console.log("Hola Mundo");

//VARIABLES
/* Inicializacion de una Variable */
var edad = 5;
//Utilizacion de una variable
console.log(edad);

//TIPOS DE DATOS
//Numeros
var numero = 5;
var numero_float = 7.7;
//Cadenas de texto string
var cadena = "Hola mundo";
//Booleanos
var booleano = true
//booleano = false;
//Arreglos (Arrays)
var arreglo = [1,2,3,4,5];
//Objetos
var objeto = {
  nombre: "Juan",
  edad: 25
};
console.log(objeto);
//Indefinido
var Indefinido;
//nulo
var nulo = null;


//OPERADORES COMPATIVOS 
//Aritmeticos
var suma =  5 + 3;
var resta =  5 - 3;
var multiplicar = 5 * 3;
var dividir = 5 / 3;
var modulo = 5 % 3;
var exponente = 5 ** 2;

//Comparacion 
var igual = 5 == "5";
var exactamente_igual = 5 === "5";
var diferente = 5 != 5;
var exactamente_diferente = 5 !== 5;
var menor_que = 5 > 3
var mayor_que = 5 < 3


//operadores logicos

var y = true && false;
var o = true || false;
var negacion = !true;


// (Facil)
var uno = !true || false;
var dos = false && !false;
var tres = true && !false;

//(Medio)
var cuatro = (5 === 5) || (!true);
var cinco = (!0) || (5 < 0);
var seis = (3 > 4) && (!0);   

//Avanzado
var siete = ( ((false || true) && (!false && true) )) || (true && false)
var ocho = (6 === 3+3) && (9/3 >= 3);
var nueve = (!(!false) || ( ("1" == 1)) && (!false === true) ); 

//Hardcore
var diez = !(!true) === !( !( 5 >= 5 ) );
var once = !( true && (!true === !( !(8 === 4*2) )) );

//Ultra-Hardcore
var doce = !( true && (!true === !( !(16 === (4*2) + 8))) ) !== (false);

//Leyenda
var trece = !(((!(!(10 / 5 == "2") === false) != false) === ((5 * 5) <= (100 / 4))) && (!((1 + 1) !== (10 / 5)) !== (true)));

//Condicionales
/*
  Nos ayudan a tomar decisiones en nuestro código
*/
var edad = 18;
if (edad < 0 || edad > 130){
  console.log("Edad no valida");
} else if(edad < 18){
  console.log("Eres menor de edad");
} else if(edad >= 18){
  console.log("Eres mayor de edad");
} else {
  console.log("Edad no valida");
}


