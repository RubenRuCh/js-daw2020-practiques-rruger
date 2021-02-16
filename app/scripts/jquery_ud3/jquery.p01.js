// When DOM is loaded
$(() => {
  // Prepare array with allowedChars to be writted
  const allowedChars = new Set();

  // Allow numbers (save them as Strings)
  for (let i = 0; i < 10; i++) {
    allowedChars.add(`${i}`);
  }

  $('form input#year').on('keypress', (event) => {
    handleInput([...allowedChars], event);
  });
});

const handleInput = (allowedChars, event) => {
  // Cache the input
  const $input = $(event.target);

  // Get pressed key and convert to char
  const key = event.which;
  const char = String.fromCharCode(key);

  // Avoid text to be printed when is a not allowed char
  if (!allowedChars.includes(char)) {
    // Prefent default effect of input
    event.preventDefault();
  }

  // Only check year when return is pressed
  if (key === 13) {
    checkYear($input);
  }
};

/**
 * Animate yearInput if year is not between 1900 and 2100
 *
 * @param {jQueryElement} $yearInput
 */
const checkYear = ($yearInput) => {
  const inputValue = $yearInput.val();
  const year = parseInt(inputValue);

  if (!(year >= 1900 && year <= 2100)) {
    // Class that trigget the animation
    const animateClass = 'animate__animated animate__shakeX';

    // Add the animation
    $yearInput.addClass(animateClass);

    // When the animation is over, remove the class
    $yearInput.on('animationend', (event) => {
      event.preventDefault();
      $yearInput.removeClass(animateClass);
    });
  }
};
