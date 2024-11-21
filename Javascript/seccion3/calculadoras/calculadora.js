/**
 * Crea una calculadora utilizando
 * - Programación orientada a eventos
 * - Programación funcional
 * - Programación orientada a objetos
 * 
 * Nota: La programación orientada a eventos debe tener interfaz gráfica
 */

function calculadoraFuncional(){
  const seleccionUser = prompt(`
    Hola, soy Shakira matemática. Selecciona una operacion:
    sumar
    restar
    multiplicar
    dividir
    modulo
    potencia
  `);

  const a = Number(prompt("Pon un primer numero"));
  const b = Number(prompt("Pon un segundo numero"));

  if (isNaN(a) || isNaN(b)) {
    alert("Waka waka dice que pongas solo numeros");
    return;
  }

  let respuesta;
  switch (seleccionUser) {
    case 'sumar':
      respuesta = sumar(a, b);
      break;
    case 'restar':
      respuesta = restar(a, b);
      break;
    case 'multiplicar':
      respuesta = multiplicar(a, b);
      break;
    case 'dividir':
      respuesta = dividir(a, b);
      break;
    case 'modulo':
      respuesta = modulo(a, b);
      break;
    case 'potencia':
      respuesta = potencia(a, b);
      break;
    default:
      respuesta = "Chanfle... Operacion chimba, selecciona una buena";
  }

  alert("El resultado es de la waka operacion es: " + respuesta);
}

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return "No se puede dividir entre cero, James esta decepcionado de ti";
  } else {
    return a / b;
  }
}

function modulo(a, b) {
  return a % b;
}

function potencia(a, b) {
  return a ** b;
}

calculadoraFuncional();
