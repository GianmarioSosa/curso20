/*Crea tres variables, numero1, numero2 y operador y asignales un valor
  Crea una condicion que verifique si el operador es +, -, , /, % o *.
  Dependiendo del operador, realiza la operacion correspondiente con los dos numeros
  e imprime el resultado en la consola.

  Crea una variable llamada dia y asignale un valor de 1 a 7
  Crea una condicion que imprima el dia de la semana correspondiente al numero
  que tenga la variable dia.

  Nota: En ambos casos debes de evaluar que hacer en caso de que los valores
  no sean validos.

  Fecha de entrega: 22/10/2024 */

  var numero1 = 5;
  var numero2 = 10;
  var operador = '*';

if (operador === '+') {
  console.log(numero1 + numero2);
} else if (operador === '-') {
  console.log(numero1 - numero2);
} else if (operador === '*') {
  console.log(numero1 * numero2);
} else if (operador === '/') {
  console.log(numero1 / numero2);
} else if (operador === '%') {
  console.log(numero1 % numero2);
}else {
  console.log('Operador no válido'); }

var dia = '3';

if(dia < 0 || dia > 7){
  console.log('Dia no valido')
} else if( dia === 1){
  console.log('Dia lunes')
} else if( dia === 2){
  console.log('Dia Martes')
} else if( dia === 3){
  console.log('Dia Miercoles')
} else if( dia === 4){
  console.log('Dia Jueves')
} else if( dia === 5){
  console.log('Dia Viernes')
} else if( dia === 6){
  console.log('Dia de Pisteo')
} else if( dia === 7){
  console.log('Dia de Descansar del pisteo')
} else{
  console.log('Esto no es un dia')
}