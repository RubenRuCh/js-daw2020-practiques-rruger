var iterations = 0;
var num_1,
  num_2,
  num_3,
  num_4,
  num_5,
  num_6,
  num_7,
  num_8,
  num_9,
  num_10 = null;

// This might take looooong...
console.log('Esto seguramente tarde un ratito en terminar...');

do {
  /* Variables declaration */
  const QTY_RANDOM_NUMBERS = 10000;
  const MIN_VAL = 1;
  const MAX_VAL = 11; // If we put 10 here, max number would be 9. So MAX_VAL must be real max plus 1

  const MAP_NUMBERS = new Map();

  for (
    let numNumbersMade = 0;
    numNumbersMade < QTY_RANDOM_NUMBERS;
    numNumbersMade++
  ) {
    var randomNumber =
      Math.floor(Math.random() * (MAX_VAL - MIN_VAL)) + MIN_VAL; // Generate random number between MIN_VAL and (MAX_VAL - 1) both included

    if (MAP_NUMBERS.has(randomNumber)) {
      // If randomNumber appeared before, add 1 to value
      let oldValue = MAP_NUMBERS.get(randomNumber);
      let newValue = ++oldValue; // oldValue plus 1
      MAP_NUMBERS.set(randomNumber, newValue); // Overwrite oldValue of key randomNumber with newValue (oldValue plus 1)
    } else {
      // If randomNumber never appear before, add it to MAP_NUMBERS as a key and start his value at 1
      MAP_NUMBERS.set(randomNumber, 1);
    }
  }

  // All numbers will be equal? Lets see...
  var number_of_1000 = 0;

  for (let number = MIN_VAL; number < MAX_VAL; number++) {
    if (MAP_NUMBERS.get(number) == 1000) {
      number_of_1000++;
    }
  }

  switch (number_of_1000) {
    case 1:
      if (num_1 == null) {
        num_1 = iterations;
        document.write(
          `Se ha alcanzado el numero de ${number_of_1000} coincidencias por primera vez en la repeticion ${iterations}<br/>`
        );

        console.log(
          `Se ha alcanzado el numero de ${number_of_1000} coincidencias por primera vez en la repeticion ${iterations}`
        );
      }
      break;

    case 2:
      if (num_2 == null) {
        num_2 = iterations;
        document.write(
          `Se ha alcanzado el numero de ${number_of_1000} coincidencias por primera vez en la repeticion ${iterations}<br/>`
        );

        console.log(
          `Se ha alcanzado el numero de ${number_of_1000} coincidencias por primera vez en la repeticion ${iterations}`
        );
      }
      break;

    case 3:
      if (num_3 == null) {
        num_3 = iterations;
        document.write(
          `Se ha alcanzado el numero de ${number_of_1000} coincidencias por primera vez en la repeticion ${iterations}<br/>`
        );

        console.log(
          `Se ha alcanzado el numero de ${number_of_1000} coincidencias por primera vez en la repeticion ${iterations}`
        );
      }
      break;

    case 4:
      if (num_4 == null) {
        num_4 = iterations;
        document.write(
          `Se ha alcanzado el numero de ${number_of_1000} coincidencias por primera vez en la repeticion ${iterations}<br/>`
        );

        console.log(
          `Se ha alcanzado el numero de ${number_of_1000} coincidencias por primera vez en la repeticion ${iterations}`
        );
      }
      break;

    case 5:
      if (num_5 == null) {
        num_5 = iterations;
        document.write(
          `Se ha alcanzado el numero de ${number_of_1000} coincidencias por primera vez en la repeticion ${iterations}<br/>`
        );

        console.log(
          `Se ha alcanzado el numero de ${number_of_1000} coincidencias por primera vez en la repeticion ${iterations}`
        );
      }
      break;

    case 6:
      if (num_6 == null) {
        num_6 = iterations;
        document.write(
          `Se ha alcanzado el numero de ${number_of_1000} coincidencias por primera vez en la repeticion ${iterations}<br/>`
        );

        console.log(
          `Se ha alcanzado el numero de ${number_of_1000} coincidencias por primera vez en la repeticion ${iterations}`
        );
      }
      break;

    case 7:
      if (num_7 == null) {
        num_7 = iterations;
        document.write(
          `Se ha alcanzado el numero de ${number_of_1000} coincidencias por primera vez en la repeticion ${iterations}<br/>`
        );

        console.log(
          `Se ha alcanzado el numero de ${number_of_1000} coincidencias por primera vez en la repeticion ${iterations}`
        );
      }
      break;

    case 8:
      if (num_8 == null) {
        num_8 = iterations;
        document.write(
          `Se ha alcanzado el numero de ${number_of_1000} coincidencias por primera vez en la repeticion ${iterations}<br/>`
        );

        console.log(
          `Se ha alcanzado el numero de ${number_of_1000} coincidencias por primera vez en la repeticion ${iterations}`
        );
      }
      break;

    case 9:
      if (num_9 == null) {
        num_9 = iterations;
        document.write(
          `Se ha alcanzado el numero de ${number_of_1000} coincidencias por primera vez en la repeticion ${iterations}<br/>`
        );

        console.log(
          `Se ha alcanzado el numero de ${number_of_1000} coincidencias por primera vez en la repeticion ${iterations}`
        );
      }
      break;

    case 10:
      if (num_10 == null) {
        num_10 = iterations;
        document.write(
          `Se ha alcanzado el numero de ${number_of_1000} coincidencias por primera vez en la repeticion ${iterations}<br/>`
        );

        console.log(
          `Se ha alcanzado el numero de ${number_of_1000} coincidencias por primera vez en la repeticion ${iterations}`
        );
      }
      break;
  }

  iterations++;
} while (number_of_1000 != 10);

document.write(
  `Han sido necesarias ${iterations} repeticiones del algoritmo para que coincida que todos los numeros han aparecido 1000 veces cada uno exactamente`
);
