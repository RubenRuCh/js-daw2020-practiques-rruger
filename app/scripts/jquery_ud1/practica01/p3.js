// When DOM is loaded, change some backgroundColors of some list elements
$(() => {
  $('ul li').first().css('background', 'red');
  $('ul li').last().css('background', 'blue');
  $('ul').find('#3').css('background', 'yellow'); // Filter by id
});
