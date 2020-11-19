// Modify prototype of Array

/**
 * Returns the arithmetic average of the elements of the array
 *
 * @return {numeric|null|NaN} Arithmetic average of all values of the array. If array it's empty, return null. If array have non-numeric values, return NaN
 */
Array.prototype.arithmeticAverage = function () {
  // If array is empty, return null
  if (this.length <= 0) return null;

  // First we get value of the sum of all values
  const valorTotal = this.reduce((counter, value) => counter + value);

  // Then we divide it by number of elements to get arithmetic average
  return valorTotal / this.length;
};

module.exports.Array = Array;
