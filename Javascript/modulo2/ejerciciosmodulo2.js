
// Ejercicio 2
/* 
-Crear un numero aleatorio entre 1 y 100
-Usuario dice un numero
-Si el numero es igual mayor o menor imprimirlo
-Si el numero es igual el usuario gana
-Maximo 6 intentos para adivinar
*/

function adivinaNumero(){
  const numeroGanador = Math.floor(Math.random() * 100) + 1;
  let intentos = 6
  while ( intentos > 0){
    let numeroUser = prompt("Selecciona un numero entre el 1 y el 100, si tu numero y el numero de la computadora coinsiden seran el ganador");
    if (numeroUser > numeroGanador){
      alert("Tu numero es mayor, intenta unos mas pequenio")
    }
    else if( numeroUser < numeroGanador){
      alert("Tu numero es menor, intenta un numero mas grande")
    }
    else if( typeof numeroUser  !== "number"){
      alert("Debes de colocar un numero, perderas este intento")
    }
    else{
      alert("Tu numero y el de la computadora son iguales, BUEN JUEGO")
    }
    intentos = intentos - 1;
    alert(`Te quedan ${intentos} intentos, ten cuidado`);
  }
}

adivinaNumero()


