document.body.addEventListener('keyup', (event) => {
  if (event.altKey && event.key == 'F12') {
    let imagen = document.querySelector('#imagen');

    // Generate a random int number
    let randomNumber = Math.floor(Math.random() * 100);

    // Pass randomNumber to the URL to force our browser to always ask for a new image
    imagen.style.backgroundImage = `url('https://source.unsplash.com/random?sig=${randomNumber}')`;
  }
});
