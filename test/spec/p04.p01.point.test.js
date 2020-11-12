const p04Tests = require('../../app/scripts/P04/p01.js');

test('Instantiate a Point, instanceof must be Point', () => {
  let point1 = new p04Tests.Point();
  expect(point1 instanceof Point).toBe(true);
});

test('Instantiate a Point with 2 numbers, both properties must be the same that entered (first argument)', () => {
  let point2 = new p04Tests.Point(5, 3);
  expect(point2.x).toBe(5);
});

test('Instantiate a Point with 2 numbers, both properties must be the same that entered (second argument)', () => {
  let point2 = new p04Tests.Point(5, 3);
  expect(point2.y).toBe(3);
});

test('Instantiate a Point with X as number and Y as string. X must be same number', () => {
  let point3 = new p04Tests.Point(9, 'testing');
  expect(point3.x).toBe(9);
});

test('Instantiate a Point with X as number and Y as string. Y must be 0', () => {
  let point3 = new p04Tests.Point(9, 'testing');
  expect(point3.y).toBe(0);
});

test('Function cambiar: Instantiate a Point with X = 1 and Y = 5. Change them to be X = 3 and Y = 15 (first argument)', () => {
  let point4 = new p04Tests.Point(1, 5);
  point4.cambiar(3, 15);
  expect(point4.x).toBe(3);
});

test('Function cambiar: Instantiate a Point with X = 1 and Y = 5. Change them to be X = 3 and Y = 15 (second argument)', () => {
  let point4 = new p04Tests.Point(1, 5);
  point4.cambiar(3, 15);
  expect(point4.y).toBe(15);
});

test('Function copia: Instantiate a Point with X = 1 and Y = 5. Copy it to create another Point. Both points must have same properties', () => {
  let point4 = new p04Tests.Point(1, 5);
  point4.cambiar(3, 15);
  expect(point4.y).toBe(15);
});
