/**
 * Sort the list that's inside div#contenedor
 *
 * Delete the previus list and print the new sorted list
 */
function sortList() {
  // Get the list
  let unorderedList = document.querySelector('div#contenedor ul');

  // Get the child nodes of the list (li elements) and create an array with their text values
  const words = new Array();

  for (let child of unorderedList.children) {
    words.push(child.textContent);
  }

  /* Array structure already sort alphabetically the elements when they are added via 
  push, but just in case, we sort it using localeCompare with lang es */
  const sortedWords = words.sort((a, b) => a.toString().localeCompare(b, 'es'));

  // Create a new list
  let newList = document.createElement('ul');

  // For each word, we create a new element li with the text and put it inside the new list
  for (let sortedWord of sortedWords) {
    let newElementList = document.createElement('li');
    newElementList.textContent = sortedWord;
    newList.appendChild(newElementList);
  }

  // Finally, we replace the old list with the new sorted list
  let contenedor = document.querySelector('div#contenedor');
  contenedor.innerHTML = newList.outerHTML; // Use outerHTML to include ul tag, not only the content
}

// We wait 3 seconds before ask the user if wants the list to be sorted
window.setTimeout(() => {
  if (window.confirm('¿Quieres ordenar las palabras de la lista?')) {
    sortList();
  }
}, 3000);
