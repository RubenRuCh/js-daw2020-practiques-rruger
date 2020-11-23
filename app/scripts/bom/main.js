/**
 * Put a message inside container
 *
 * @param {string} message Message to be written
 * @param {string} container Container where put message
 */
function writeTextIntoContainer(message, container = 'main div#contenedor') {
  // Select node
  var contenedor = document.querySelector(container);

  // Create a text node
  var textNode = document.createTextNode(message);

  // Insert textNode as a child of container
  contenedor.appendChild(textNode);
}
