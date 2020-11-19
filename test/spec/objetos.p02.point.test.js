const objetosp02Tests = require('../../app/scripts/objetos/objetos.p02.js');

test('Given an array [1, 2, 3, 4, 5], Array.arithmeticAverage return 3', () => {
  let array1 = new objetosp02Tests.Array(1, 2, 3, 4, 5);
  expect(array1.arithmeticAverage()).toBe(3);
});

test('Given an array [1, 2, 3, 4], Array.arithmeticAverage return 2.5', () => {
  let array2 = new objetosp02Tests.Array(1, 2, 3, 4);
  expect(array2.arithmeticAverage()).toBe(2.5);
});

test('Given an array [], Array.arithmeticAverage return null', () => {
  let array3 = new objetosp02Tests.Array();
  expect(array3.arithmeticAverage()).toBe(null);
});

test('Given an array [1, 2, "Ruben"], Array.arithmeticAverage return NaN', () => {
  let array4 = new objetosp02Tests.Array(1, 2, 'Ruben');
  expect(array4.arithmeticAverage()).toBe(NaN);
});

test('Given an array [1, 2, Object], Array.arithmeticAverage return NaN', () => {
  // object
  const myObject = {
    name: 'Ruben',
    whatIsYourName: function () {
      return this.name;
    },
  };

  let array5 = new objetosp02Tests.Array(1, 2, myObject);
  expect(array5.arithmeticAverage()).toBe(NaN);
});

test('Given an array [1, 2, undefined, 4], Array.arithmeticAverage return NaN', () => {
  let array6 = new objetosp02Tests.Array(1, 2, undefined, 4);
  expect(array6.arithmeticAverage()).toBe(NaN);
});
