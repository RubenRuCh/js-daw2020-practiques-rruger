$(() => {
  // We wait 3 seconds before ask the user if wants the list to be sorted
  window.setTimeout(() => {
    if (window.confirm('¿Quieres ordenar las palabras de la lista?')) {
      sortList();
    }
  }, 3000);
});

/**
 * Sort the list that's inside div#contenedor
 *
 * Delete the previus list and print the new sorted list
 */
function sortList() {
  // Get the list as an jQuery object
  const $unorderedList = $('ul#palabrasDesordenadas');

  // Get the children of the list (li elements) and create an array with them as jQuery objects
  const $words = $unorderedList.children('li').get();

  // Sort words using localeCompare with lang es
  const sortedWords = $words.sort((a, b) =>
    $(a).text().toString().localeCompare($(b).text(), 'es')
  );

  // Finally, we append ordered words to the list
  $.each(sortedWords, (key, word) => {
    $unorderedList.append(word);
  });
}
