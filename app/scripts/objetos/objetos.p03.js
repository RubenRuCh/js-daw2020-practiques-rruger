let ordenador = new Computer('Corsair', 'Volt', 32, 2000, 24);
console.log(ordenador.toString());

let portatil = new Laptop('MSI', 'Ampera');
console.log(portatil.toString());

/**
 * Represent a regular computer
 *
 * @param {String} brand
 * @param {String} model
 * @param {Number} ram
 * @param {Number} hardDrive
 * @param {Number} inches
 */
function Computer(brand, model, ram = 4, hardDrive = 512, inches = 17) {
  // Only model and brand are necessary
  this.brand = brand;
  this.model = model;
  this.ram = ram;
  this.hardDrive = hardDrive;
  this.inches = inches;

  /**
   * Return JSON string with all the info about the computer
   *
   * @return {String} info  String in JSON format that contains all the details of the computer
   */
  this.toString = function () {
    let info = JSON.stringify(this);
    return info;
  };
}

/**
 * Represent a laptop computer
 *
 * @param {String} brand
 * @param {String} model
 * @param {Number} ram
 * @param {Number} hardDrive
 * @param {Number} inches
 * @param {Number} autonomy
 */
function Laptop(
  brand,
  model,
  ram = 4,
  hardDrive = 256,
  inches = 12,
  autonomy = 4
) {
  // Call Computer's constructor to act like inheritance and reuse Computer's methods and properties
  Computer.call(this, brand, model, ram, hardDrive, inches);

  // Just have to add autonomy because that's a property Computer doesn't have
  this.autonomy = autonomy;

  /**
   * Return JSON string with all the info about the laptop
   *
   * Override Computer's toString
   *
   * @return {String} info  String in JSON format that contains all the details of the computer
   */
  this.toString = function () {
    let info = JSON.stringify(this);
    return info;
  };
}

//module.exports.Computer = Computer;
//module.exports.Laptop = Laptop;
