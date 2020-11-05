/* Variables declaration */
const NUM_COMBINATIONS = 50;
const LENGTH_COMBINATIONS = 6;
const MIN_VAL = 1;
const MAX_VAL = 49;

const COMBINATIONS = new Array();

for (
  let numCombinationsMade = 0;
  numCombinationsMade < NUM_COMBINATIONS;
  numCombinationsMade++
) {
  const combination = new Set(); // Set avoid having duplicated values
  let lengthActualCombination = 0; // Each combination start this to 0

  while (lengthActualCombination < LENGTH_COMBINATIONS) {
    const randomNumber =
      Math.floor(Math.random() * (MAX_VAL - MIN_VAL)) + MIN_VAL; // Generate random number between 1 and 49 both included

    if (!combination.has(randomNumber)) {
      // If Set doesnt have the random number, we add it
      combination.add(randomNumber);
      lengthActualCombination++;
    }
  }

  COMBINATIONS[numCombinationsMade] = combination;
}

let counterCombinations = 1;
for (const combination of COMBINATIONS) {
  let message = 'Combinacion ' + counterCombinations + ': ';

  for (const number of combination) {
    message += '[' + number + ']';
  }

  console.log(message);
  counterCombinations++;
}
