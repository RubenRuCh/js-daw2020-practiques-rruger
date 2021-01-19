// Import temporizador.js tools
import { cuenta } from './temporizador.js';

// Main code inside load event to make sure required components are loaded before execute our code
window.addEventListener('load', (ev) => {
  // Start a timeout of 5 seconds
  timeout(5000, checkNotification);
});

/**
 * Start a countdown and execute some action when the count is finished
 *
 * Internally, create several promises with setTimeout() as actions of the promise,
 * counting 1 second on every promise until reaching 0
 *
 * @param {Number} milliseconds Duration of the countdown
 * @param {Function} action Function to execute at the end of the count
 */
function timeout(milliseconds, action) {
  const seconds = milliseconds / 1000;

  cuenta(seconds, document.querySelector('#countdown'), 1000, () => {
    action();
  });
}

/**
 * Check if app have rights to launch Notifications
 *
 */
function checkNotification() {
  const permission = Notification.permission;

  // If we didn't ask for permission (or is denied), ask now
  if (permission !== 'granted') {
    Notification.requestPermission().then((response) => {
      // If user grant permission, launch Notification
      if (response == 'granted') {
        showNotification();
      }
    });
  }

  // If we already had permission, launch Notification
  else if (permission === 'granted') {
    showNotification();
  }
}

/**
 * Show a Notification with an url
 */
function showNotification(url = '../07 - apis/apis.p02-video.html') {
  const notification = new Notification('Información', {
    body: 'Se ha publicado un nuevo video',
  });

  notification.addEventListener('click', (ev) => {
    location.href = url;
  });
}
