// Main code inside load event to make sure required components are loaded before execute our code
window.addEventListener('load', (ev) => {
  // First thing, check for username in sessionStorage
  const username = sessionStorage.getItem('username');

  // If there is username data in sessionStorage, show it
  if (username) {
    document.querySelector('#usernameData').textContent = username;
  }

  // Prepare usernameInput to be managed when enter is pressed
  document
    .querySelector('#usernameInput')
    .addEventListener('keypress', (ev) => {
      // Only when enter key is pressed
      if (ev.keyCode === 13 && !ev.shiftKey) {
        sessionStorage.setItem(
          'username',
          document.querySelector('#usernameInput').value
        );

        // Show some message to inform user
        document.querySelector('#confirmation').textContent =
          'Se ha guardado correctamente la informacion en sessionStore';
      }
    });
});
