// When DOM is loaded, add listener so when user click button, count elements in 2º div and create <p> with that info in 3º div
$(() => {
  $('button#button1').click(() => {
    const numElementsInSecondDiv = $('div').first().next().children().length;
    $('div')
      .eq(2)
      .append(
        `<p>El número de elementos en el segundo div es: ${numElementsInSecondDiv}</p>`
      );
  });
});
