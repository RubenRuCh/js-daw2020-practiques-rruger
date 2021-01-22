// When DOM is loaded, change some backgroundColors of some list elements
$(() => {
  $('ul').last().find('li').first().css({ background: 'red' }); // First li of last ul => using last() and first()
  $('ul').first().find('li').last().css({ background: 'blue' }); // Last li of first ul => using last() and first()
  $('ul').eq(1).find('li').eq(2).css({ background: 'yellow' }); // Third li of second ul => using eq(index)
});
