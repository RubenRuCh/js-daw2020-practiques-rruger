// When DOM is loaded, add listener so when user click button, clean select and insert a new option
$(() => {
  $('button#boton1').click(() => {
    /* I haven't understood if it's asked to delete the selected option or all options, so I have done both and commented one of them */
    //$('select option:selected').remove(); // This delete selected option
    $('select option').remove(); // This delete all options
    $('select').append('<option value="Blanco" selected>Blanco</option>'); // Anyway, insert a new option that would be selected by default
  });
});
