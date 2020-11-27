// Get elements of the forms
let loginForm = document.querySelector("form[name='login']");
let inputEmail = document.querySelector("input[name='email']");
let inputPass = document.querySelector("input[name='pass']");

// When inputEmail lost focus, check if value have the right format
inputEmail.addEventListener('blur', (event) => {
  let regexRFC5322 = new RegExp(
    "^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
  );

  // If the value doesn't have the right format, create a message error and put it on the right of the input
  if (regexRFC5322.test(event.target.value) == false) {
    let errorEmail = document.createElement('strong');
    errorEmail.setAttribute('class', 'errorEmail');
    errorEmail.style.color = 'red';
    errorEmail.textContent =
      'El email introducido no cumple el formato xxxx@yyyy.zzzz';
    // insert the message before the nextSibling of email input
    event.target.parentNode.insertBefore(errorEmail, event.target.nextSibling);
  }
});

// When inputEmail have the focus, check if there's some error and if there is, delete it
inputEmail.addEventListener('focus', (event) => {
  let errorEmail = document.querySelector('.errorEmail');
  if (errorEmail) {
    errorEmail.parentNode.removeChild(errorEmail);
  }
});

// When inputPass lost focus, check if value lenght it's inside the limits
inputPass.addEventListener('blur', (event) => {
  let minLength = 8;
  let maxLength = 10;
  let passLenght = event.target.value.length;

  // If the value doesn't match the right lenght, create a message error and put it on the right of the input
  if (passLenght < minLength || passLenght > maxLength) {
    let errorPass = document.createElement('strong');
    errorPass.setAttribute('class', 'errorPass');
    errorPass.style.color = 'red';
    errorPass.textContent =
      'La contraseña debe tener una longitud de entre 8 y 10 caracteres';
    event.target.parentNode.insertBefore(errorPass, event.target.nextSibling);
  }
});

// When inputPass have the focus, check if there's some error and if there is, delete it
inputPass.addEventListener('focus', (event) => {
  let errorPass = document.querySelector('.errorPass');
  if (errorPass) {
    errorPass.parentNode.removeChild(errorPass);
  }
});

// Stop the default submit event to prevent send the data even if the values are correct
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
});
