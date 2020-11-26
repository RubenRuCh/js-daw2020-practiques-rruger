document.body.addEventListener('keyup', (event) => {
  if (event.altKey && event.key == 'F12') {
    let imagen = document.querySelector('#imagen');

    // Generate a int number between 0 and 9
    let randomNumber = Math.floor(Math.random() * 10);

    // Pass randomNumber to the URL to force our client to always ask for a new image
    imagen.style.backgroundImage = `url('https://source.unsplash.com/random?sig=${randomNumber}')`;
  }
});
