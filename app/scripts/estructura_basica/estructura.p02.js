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
  var randomNumber = Math.floor(Math.random() * (MAX_VAL - MIN_VAL)) + MIN_VAL; // Generate random number between MIN_VAL and (MAX_VAL - 1) both included

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
document.write('Frecuencias de aparicion...<br/>');
for (let number = MIN_VAL; number < MAX_VAL; number++) {
  document.write(`Numero ${number}: ${MAP_NUMBERS.get(number)}<br/>`);
}
