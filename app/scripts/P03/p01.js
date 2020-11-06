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

  // Now we sort the result. My approach is convert Set into Array and then sort the Array
  const ARRAY_WORDS = [...WORDS];
  const SORTED_WORDS = ARRAY_WORDS.sort((a, b) => b.localeCompare(a, 'es')); // Reverse sort in Spanish

  // Finally, show the result
  for (let word of SORTED_WORDS) {
    console.log(word);
  }
}
