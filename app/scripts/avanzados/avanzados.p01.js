/**
 * Return a promise that act like a Timer based on miliseconds
 *
 * Create 2 timeOuts. The first one trigger resolv with resolvFunction when miliseconds passed.
 * The second one trigger reject with rejectFunction when the double of the miliseconds passed and
 * something went wrong in the first timeOut
 *
 * @param {int} miliseconds
 * @param {Function} resolvFunction Function to send to resolv
 * @param {Function} rejectFunction Function to send to reject
 * @returns {promise} promise
 */
function setTimer(miliseconds, resolvFunction, rejectFunction) {
  let promise = new Promise((resolv, reject) => {
    var resolvTimer = setTimeout(() => {
      clearTimeout(rejectTimer);
      resolv(resolvFunction);
    }, miliseconds);

    var rejectTimer = setTimeout(() => {
      reject(rejectFunction);
    }, miliseconds * 2);
  });

  return promise;
}

/**
 * Return some text
 *
 * @param {string} text
 */
function returnSomeText(text) {
  return text;
}

// Get container to be printed with some message
var container = document.querySelector('div#container');

// Call setTimer with 5 seconds and some text to get manage resolv and reject actions
let promise = setTimer(
  5000,
  returnSomeText('Tiempo concluido'),
  returnSomeText('El tiempo no va bien')
);
// If everything its correct, print 'Tiempo concluido' inside div#container
promise.then(
  function (response) {
    container.textContent = response;
  },
  // If the timer goes wrong, we print 'El tiempo no va bien' inside div#container
  function (error) {
    container.textContent = error;
  }
);
