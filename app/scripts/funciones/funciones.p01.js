// Call for askWordsToSort and when its finish, sort the result. My approach is convert Set into Array and then sort the Array
const SORTED_WORDS = [...askWordsToSort()].sort((a, b) =>
  b.localeCompare(a, 'es')
); // Reverse sort in Spanish

// Finally, show the result
for (let word of SORTED_WORDS) {
  document.write(word + '<br/>');
}

function askWordsToSort() {
  const WORDS = new Set(); // Set to avoid repeated words

  do {
    var word = window.prompt('Introduce una palabra');

    // Undefined catch 'Cancel', and length == 0 catch empty input
    var wordIsEmpty = word == undefined || word.length == 0;

    if (!wordIsEmpty) {
      WORDS.add(word);
    }
  } while (!wordIsEmpty); // Ask again if word is not empty

  return WORDS;
}
