/**
 * Put a counter inside main div#contenedor
 *
 * The counter represents how many times the user has visited this page
 *
 * @param {String} numVisits
 */
function showNumVisits(numVisits) {
  writeTextIntoContainer(`Has visitado esta página ${numVisits} veces`);
}

/**
 * Returns in String UTC format the date that corresponds to the current date plus one month
 *
 * @return {String} UTC
 */
function getTodayPlusMonth() {
  // Get Date object with current date
  let today = new Date();

  // Add today's milliseconds to the result of add all the milliseconds of a month
  let monthMS = today.getTime() + 1000 * 60 * 60 * 24 * 30;

  // Get Date object with the date in a month
  let dateNextMonth = new Date(monthMS);

  // Return it as UTC
  return dateNextMonth.toUTCString();
}

/**
 * Returns the value of the cookie identified by key
 *
 * @param {String} key Name of the cookie
 * @return {String|boolean} result If the cookie exists, will return it's value. If not, return false
 */
function getCookieValue(key) {
  let cookies = document.cookie.split('; ');
  var result = false;

  for (let cookie of cookies) {
    let [name, value] = cookie.split('=');

    if (name == key) {
      result = value;
    }
  }

  return result;
}

// Get caducity
const caducity = getTodayPlusMonth();

// Check if cookie exists
var numVisits = getCookieValue('visitas');

// If not exist, create it with value 1, because this is the first visit of the user
if (numVisits == false) {
  document.cookie = `visitas=1;expires=${caducity}`;
  numVisits = 0; // value 0 because we have to tell the user that he hasn't visit this page yet

  // If exists and value is greater than 10, delete it
} else if (parseInt(numVisits) > 10) {
  document.cookie = `visitas=0;expires=Sat, 01 Jan 2000 00:00:01 GMT`;

  // If exist and value is lower than 10, save it again adding 1
} else {
  document.cookie = `visitas=${parseInt(numVisits) + 1};expires=${caducity}`;
}

// Finally, show number of visits
showNumVisits(numVisits);

// When we get 11 visits, it would show 11 to the user but the counter would return to 0 and the cookie would be deleted
