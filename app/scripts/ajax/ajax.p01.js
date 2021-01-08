const BASE_URL = 'https://reqres.in/api/users/';
const POSTMAN_URL = 'https://httpbin.org/post';

// Codigo principal dentro del evento load para asegurar la carga de los componentes
window.addEventListener('load', (ev) => {
  let numsecs = document.getElementById('numsecs');
  let user = document.getElementById('user');
  let button = document.querySelector('button');

  button.addEventListener('click', (ev) => {
    ev.preventDefault();
    clearFields();
    procesarFetch(numsecs.value, user.value);
  });
});

/**
 * Clear all inputs data
 */
function clearFields() {
  document
    .querySelectorAll('span')
    .forEach((element) => (element.innerHTML = ''));
}

/**
 * Get one user, save it and print info about user and request's data
 *
 * User will be getted from https://reqres.in/api/users/, and simulate it's save using https://httpbin.org/post
 *
 *
 * @param {int} numsecs Num of seconds to wait before get user
 * @param {int} user Id of user to get
 */
async function procesarFetch(numsecs, user) {
  // Get spans to print into them later
  const spanId = document.querySelector('#id');
  const spanEmail = document.querySelector('#email');
  const spanName = document.querySelector('#name');
  const spanStatus = document.querySelector('#status');
  var status = '200'; // Status would be 200 if everything it's okay

  try {
    // Object request to get a user
    const reqGetUset = {
      method: 'GET',
    };

    const resGetUser = await fetch(
      `https://reqres.in/api/users/${user}?delay=${numsecs}`,
      reqGetUset
    );

    // If first API answer with 404 (or another error status), response.ok will be false so throw an error
    if (!resGetUser.ok) throw new Error(resGetUser.status);

    // Convert first response into json
    const jsonGetUser = await resGetUser.json();

    // If everything its ok until now, put response data into getUser spans
    spanId.textContent = jsonGetUser.data.id;
    spanEmail.textContent = jsonGetUser.data.email;

    // Object request to insert a user
    const reqInsertUset = {
      method: 'POST',
      body: JSON.stringify(jsonGetUser.data), // Just in case
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };

    const resInsertUset = await fetch(
      'https://httpbin.org/post',
      reqInsertUset
    );

    // If second API answer response.ok = false, throw an error
    if (!resInsertUset.ok) throw new Error(resInsertUset.status);

    // Convert second response into json and get the data we need
    const jsonInsertUser = await resInsertUset.json();
    const json = jsonInsertUser.json;

    spanName.textContent = json.first_name;
  } catch (error) {
    status = error;
  } finally {
    // Whatever happens, put status into screen (200 if everything went ok, 404 or 500 or something else if not)
    spanStatus.textContent = status;
  }
}
