/**
 * Return a promise that act like a Timer based on miliseconds
 *
 * Create 2 timeOuts. The first one trigger resolv with resolvFunction when miliseconds passed.
 * The second one trigger reject with rejectFunction when the double of the miliseconds passed and
 * something went wrong in the first timeOut
 *
 * @param {Int} miliseconds
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
 * Count from startNumber to 0
 *
 * Current number is displayed through the elementToWriteOn. The speed at which it is counted is determined by interval.
 *
 *
 * @param {Int} startNumber Number to start counting from
 * @param {Node} elementToWriteOn Element in which we are going to write the counter
 * @param {Int} interval Interval in milliseconds between decrement and decrement
 * @param {Function} callbackFunction Function to be executed when the count process is finished
 */
async function cuenta(
  startNumber,
  elementToWriteOn = document.querySelector('body'),
  interval = 1000,
  callbackFunction = () => {}
) {
  // We start counting and decrease 1 by 1 until we reach 0
  var counter = startNumber;

  do {
    // Use setTimer to get a promise that represents a timer with response
    let promise = setTimer(
      interval,
      () => {
        // When time marked by interval has elapsed, we show the current number through elementToWriteOn
        elementToWriteOn.textContent = counter--;
      },
      () => {
        // If something went wrong in setTimer, create an Error
        Error('Error with setTimer');
      }
    );

    // The loop does not advance until the promise response is obtained
    try {
      let print = await promise;

      // Execute the function passed by resolv
      print();
    } catch (error) {
      // If there is an Error, notify it and stop the loop
      console.log(reject.message);
      counter = -1;
    }
  } while (counter >= 0);

  // Finally, if we have something in callbackFunction, execute it when the count is finished
  callbackFunction();
}

// Export these functions so we can use it elsewhere
export { setTimer, cuenta };
