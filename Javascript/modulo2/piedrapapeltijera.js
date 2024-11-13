/*

  1. Crea un juego de piedra papel o tijera utilizando
  funciones y ciclos.

  El juego debe permitir al usuario seleccionar una opcion
  y la computadora seleccionara una opcion aleatoria.

  Las opciones son:
  - Piedra
  - Papel
  - Tijera

  Las reglas son:
  - La piedra aplasta la tijera
  - La tijera corta el papel
  - El papel envuelve la piedra

  El juego debe de imprimir quien gano y si el usuario
  desea seguir jugando.

  El juego debe de terminar cuando el usuario seleccione
  que no desea seguir jugando.

  Ademas debes de tener un contador que indique cuantas
  partidas se han jugado, cuantas ha ganado el usuario
  y cuantas la computadora.

  Puedes utilizar la funcion prompt() para obtener la
  seleccion del usuario.
*/


//array de opciones: piedra papel tijeras
//ramdon para que seleccione un valor del array cualquiera
//ciclo contador de victorias y rondas 
//condicionales de victoria y derrota
//salir


function opcionAleatoria() {
  let opcionesJuego = ["Piedra", "Papel", "Tijeras"];
  return opcionesJuego[Math.floor(Math.random() * opcionesJuego.length)];
}


function piedraPapelTijeras() {
  let victoriaUsuario = 0;
  let victoriaComputadora = 0;
  let partidasJugadas = 0;
  let jugar = true;

  while (jugar) {
    let opcionJugador1 = prompt("Selecciona entre Piedra, Papel o Tijeras");
    let opcionComputadora = opcionAleatoria();

    alert("La computadora seleccionó: " + opcionComputadora);

    if (opcionJugador1 === opcionComputadora) {
      alert("Empate");
    } else if (
      (opcionJugador1 === "Piedra" && opcionComputadora === "Tijeras") ||
      (opcionJugador1 === "Papel" && opcionComputadora === "Piedra") ||
      (opcionJugador1 === "Tijeras" && opcionComputadora === "Papel")
    ) {
      alert("GANASTE");
      victoriaUsuario++;
    } else {
      alert("PERDISTE");
      victoriaComputadora++;
    }
    partidasJugadas++;

    let seguirJugando = prompt("¿Deseas seguir jugando? (SI/NO)").toLowerCase();
    if (seguirJugando !== "si") {
      jugar = false;
    }
  }

  alert(`
        Partidas jugadas: ${partidasJugadas}
        Victorias del usuario: ${victoriaUsuario}
        Victorias de la computadora: ${victoriaComputadora}
      `);
}


piedraPapelTijeras();
