// Convertir a mayusculas
var array_palabras = new Array(
  'hola',
  'que tal',
  'Cómo estas?',
  'BIEN',
  'y tu'
);

document.write('Array en minusculas:<br/>');
document.write(`${array_palabras}<br/>`);

array_palabras = filtro(array_palabras, convertirEnMayusculas);

document.write('<br/>Array en mayusculas:<br/>');
document.write(`${array_palabras}<br/>`);

// Convertir en sus factoriales
var array_numeros = new Array(1, 2, 3, 4, 5, 6, 7);

document.write('<br/>Array de numeros:<br/>');
document.write(`${array_numeros}<br/>`);

array_numeros = filtro(array_numeros, convertirEnFactorial);

document.write('<br/>Array de los factoriales de dichos numeros:<br/>');
document.write(`${array_numeros}<br/>`);

/* Declaracion de funciones */

// Toma un array y le aplica la funcion a cada elemento
function filtro(vector, funcion) {
  vector = vector.map(funcion);
  return vector;
}

// Devuelve la palabra en mayusculas
function convertirEnMayusculas(palabra) {
  return palabra.toUpperCase();
}

// Devuelve el factorial de un numero
function convertirEnFactorial(numero) {
  return factorial(numero);
}

// Calcula, de forma recursiva, el factorial de un numero
function factorial(number) {
  if (number == 0) {
    return 1;
  }
  return number * factorial(number - 1);
}
