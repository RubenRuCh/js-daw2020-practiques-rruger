/**
 * Put a message inside main div#contenedor, and send it as a alert too
 *
 * @param {string} message Message to be written
 */
function sayHi(message = 'Nos vamos') {
  writeTextIntoContainer(message);

  // To be more clear to the user, we put the message as a alert
  window.alert(message);
}

// First we say 'Nos vamos'
sayHi();

// Then, set a timeout to redirect to Google after 5 seconds
window.setTimeout(() => (location.href = 'https://www.google.es'), 5000);
