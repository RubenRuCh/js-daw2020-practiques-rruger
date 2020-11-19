const objetosp01Tests = require('../../app/scripts/objetos/objetos.p01.js');

test('Instantiate a Point, instanceof must be Point', () => {
  let point1 = new objetosp01Tests.Point();
  expect(point1 instanceof objetosp01Tests.Point).toBe(true);
});

test('Instantiate a Point with 2 numbers, both properties must be the same that entered (first argument)', () => {
  let point2 = new objetosp01Tests.Point(5, 3);
  expect(point2.x).toBe(5);
});

test('Instantiate a Point with 2 numbers, both properties must be the same that entered (second argument)', () => {
  let point2 = new objetosp01Tests.Point(5, 3);
  expect(point2.y).toBe(3);
});

test('Instantiate a Point with X as number and Y as string. X must be same number', () => {
  let point3 = new objetosp01Tests.Point(9, 'testing');
  expect(point3.x).toBe(9);
});

test('Instantiate a Point with X as number and Y as string. Y must be 0', () => {
  let point3 = new objetosp01Tests.Point(9, 'testing');
  expect(point3.y).toBe(0);
});

test('Function cambiar: Instantiate a Point with X = 1 and Y = 5. Change them to be X = 3 and Y = 15 (first argument)', () => {
  let point4 = new objetosp01Tests.Point(1, 5);
  point4.cambiar(3, 15);
  expect(point4.x).toBe(3);
});

test('Function cambiar: Instantiate a Point with X = 1 and Y = 5. Change them to be X = 3 and Y = 15 (second argument)', () => {
  let point4 = new objetosp01Tests.Point(1, 5);
  point4.cambiar(3, 15);
  expect(point4.y).toBe(15);
});

test('Function copia: Instantiate a Point with X = 1 and Y = 5. Copy it to create another Point. Both points must have same X value', () => {
  let point4 = new objetosp01Tests.Point(1, 5);
  let point5 = point4.copia();
  expect(point5.x).toBe(1);
});

test('Function copia: Instantiate a Point with X = 1 and Y = 5. Copy it to create another Point. Both points must have same Y value', () => {
  let point4 = new objetosp01Tests.Point(1, 5);
  let point5 = point4.copia();
  expect(point5.y).toBe(5);
});

test('Function suma: Instantiate a Point with X = 1 and Y = 5, and another Point with X = 10 and Y = -5. The resultant Point must have coordX that equals the sum of coordX of both Points', () => {
  let point6 = new objetosp01Tests.Point(1, 5);
  let point7 = new objetosp01Tests.Point(10, -5);
  let point8 = point6.suma(point7);
  expect(point8.x).toBe(11);
});

test('Function suma: Instantiate a Point with X = 1 and Y = 5, and another Point with X = 10 and Y = -5. The resultant Point must have coordY that equals the sum of coordY of both Points', () => {
  let point6 = new objetosp01Tests.Point(1, 5);
  let point7 = new objetosp01Tests.Point(10, -5);
  let point8 = point6.suma(point7);
  expect(point8.y).toBe(0);
});
