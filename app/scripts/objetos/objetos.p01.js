function Point(coordX, coordY) {
  // If coords are numbers, save to variables, if not, save 0
  this.x = typeof coordX == 'number' ? coordX : 0;
  this.y = typeof coordY == 'number' ? coordY : 0;

  // Declare functions

  /**
   * Modify coords of Point with those that are passed by parameter
   *
   * If any of the parameters aren't a number, previous one will not be replaced
   *
   *
   * @param {number} newCoordX CoordX that is gonna replace previous coordX of point
   * @param {number} newCoordY CoordY that is gonna replace previous coordY of point
   */
  this.cambiar = function (newCoordX, newCoordY) {
    // If new coords are not number, dont change
    this.x = typeof newCoordX == 'number' ? newCoordX : this.x;
    this.y = typeof newCoordY == 'number' ? newCoordY : this.y;
  };

  /**
   * Create a clon of Point who calls this method
   *
   * @return {Point} Return a new Point with same coords that the one who calls the method
   */
  this.copia = () => new Point(this.x, this.y);

  /**
   * Sum two Points and return a new Point with the result
   *
   * Sum two points (the point that calls the method and the point that is entered as a parameter), and returns a new point resulting from the sum of the coords of the two mentioned
   *
   *
   * @param {Point} other Point that is gonna add his coords with the one who calls this method
   * @return {Point} Point resulting from the sum of the parameters of the other two points
   */
  this.suma = function (other) {
    if (other instanceof Point) {
      let newX = this.x + other.x;
      let newY = this.y + other.y;

      return new Point(newX, newY);
    }
  };
}

module.exports.Point = Point;
