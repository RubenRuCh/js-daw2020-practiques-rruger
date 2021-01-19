// Main code inside load event to make sure required components are loaded before execute our code
window.addEventListener('load', (ev) => {
  const video = document.querySelector('#exampleVideo');

  // Start video as soon as the page is loaded
  video.play();

  // Everytime user leftclick the video, it will change its state (from play to pause and from pause to play)
  video.addEventListener('click', (ev) => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });

  // Everytime user rightclick the video, show video duration in mm:ss format
  video.addEventListener('contextmenu', (ev) => {
    // Prevent context menu to appear
    ev.preventDefault();

    // Convert video duration in mm:ss format
    const duration = video.duration;

    let minutes = Math.floor((duration / 60) % 60);
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    let seconds = Math.floor(duration % 60);
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    // Print information
    document.querySelector(
      '#videoDuration'
    ).textContent = `Duracion: ${minutes}:${seconds}`;
  });
});
