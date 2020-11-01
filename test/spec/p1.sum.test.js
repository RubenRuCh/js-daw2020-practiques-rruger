const p1Tests = require('../../app/scripts/p1.tests.js');

test('adds 1 + 2 to equal 3', () => {
  expect(p1Tests.sum(1, 2)).toBe(3);
});
