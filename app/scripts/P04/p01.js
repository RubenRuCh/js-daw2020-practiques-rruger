function Point(coordX, coordY) {
  // If coords are numbers, save to variables, if not, save 0
  this.x = typeof coordX == 'number' ? coordX : 0;
  this.y = typeof coordY == 'number' ? coordY : 0;

  // Declare functions
  this.cambiar = function (newCoordX, newCoordY) {
    // If new coords are not number, dont change
    this.x = typeof newCoordX == 'number' ? newCoordX : this.x;
    this.y = typeof newCoordY == 'number' ? newCoordY : this.y;
  };

  this.copia = () => new Point(this.x, this.y);

  this.suma = function (other) {
    if (other instanceof Point) {
      let newX = this.x + other.x;
      let newY = this.y + other.y;

      return new Point(newX, newY);
    }
  };
}

module.exports.Point = Point;
