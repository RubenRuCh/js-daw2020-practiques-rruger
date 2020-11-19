// Ask for words to count them
const words = askWordsToCount();

// Finally, show the result
for (let [word, counter] of words) {
  document.write(`La palabra [${word}] ha aparecido ${counter} veces <br/>`);
}

function askWordsToCount() {
  const MAP_WORDS = new Map(); // Use Map to bind word => number of times word appear

  do {
    var word = window.prompt('Introduce una palabra');

    // Undefined catch 'Cancel', and length == 0 catch empty input
    var wordIsEmpty = word == undefined || word.length == 0;

    if (!wordIsEmpty) {
      fillMapWithWord(MAP_WORDS, word);
    }
  } while (!wordIsEmpty); // Ask again if word is not empty

  return MAP_WORDS;
}

function fillMapWithWord(MAP_WORDS, word) {
  if (MAP_WORDS.has(word)) {
    // If word appeared before, add 1 to value
    let oldCounter = MAP_WORDS.get(word);
    MAP_WORDS.set(word, ++oldCounter); // Overwrite oldCounter of key word with oldCounter plus 1
  } else {
    // If word never appear before, add it to MAP_WORDS as a key and start his value at 1
    MAP_WORDS.set(word, 1);
  }
}

module.exports.fillMapWithWord = fillMapWithWord;
