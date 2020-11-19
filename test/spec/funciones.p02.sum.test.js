const p02Tests = require('../../app/scripts/funciones/funciones.p02.js');

test("Write 'hola', 'adios', 'hola', 'que tal'. Map must have 3 entries", () => {
  const MAP = new Map();
  p02Tests.fillMapWithWord(MAP, 'hola');
  p02Tests.fillMapWithWord(MAP, 'adios');
  p02Tests.fillMapWithWord(MAP, 'hola');
  p02Tests.fillMapWithWord(MAP, 'que tal');
  expect(MAP.size).toBe(3);
});

test("Write 'hola', 'adios', 'hola', 'que tal'. Map must have key 'hola' with value of 2", () => {
  const MAP = new Map();
  p02Tests.fillMapWithWord(MAP, 'hola');
  p02Tests.fillMapWithWord(MAP, 'adios');
  p02Tests.fillMapWithWord(MAP, 'hola');
  p02Tests.fillMapWithWord(MAP, 'que tal');
  expect(MAP.get('hola')).toBe(2);
});
