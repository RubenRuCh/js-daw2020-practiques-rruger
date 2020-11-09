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

/* Llamada a funciones para casos de pruebas */
function realizarPruebasCallback() {
  // Convertir a mayusculas
  var array_palabras = new Array(
    'hola',
    'que tal',
    'Cómo estas?',
    'BIEN',
    'y tu'
  );

  console.log('Array en minusculas:');
  console.log(array_palabras);

  array_palabras = filtro(array_palabras, convertirEnMayusculas);

  console.log('Array en mayusculas:');
  console.log(array_palabras);

  // Convertir en sus factoriales
  var array_numeros = new Array(1, 2, 3, 4, 5, 6, 7);

  console.log('Array de numeros:');
  console.log(array_numeros);

  array_numeros = filtro(array_numeros, convertirEnFactorial);

  console.log('Array de los factoriales de dichos numeros:');
  console.log(array_numeros);
}
