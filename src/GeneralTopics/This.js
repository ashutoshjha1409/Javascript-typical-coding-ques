function Pet(type, legs) {
  this.type = type;
  this.legs = legs;
  this.logInfo = function () {
    console.log(this === myCat); // => false
    console.log(`The ${this.type} has ${this.legs} legs`);
  };
}
const myCat = new Pet("Cat", 4);
// logs "The undefined has undefined legs"
// or throws a TypeError in strict mode
setTimeout(myCat.logInfo, 1000);

setTimout(myCat.logInfo);
// is equivalent to:
const extractedLogInfo = myCat.logInfo;
setTimout(extractedLogInfo);

function Pet(type, legs) {
  this.type = type;
  this.legs = legs;
  this.logInfo = function () {
    console.log(this === myCat); // => true
    console.log(`The ${this.type} has ${this.legs} legs`);
  };
}
const myCat1 = new Pet("Cat", 4);
// Create a bound function
const boundLogInfo = myCat1.logInfo.bind(myCat1);
// logs "The Cat has 4 legs"
setTimeout(boundLogInfo, 1000);

function Vehicle(type, wheelsCount) {
  if (!(this instanceof Vehicle)) {
    throw Error("Error: Incorrect invocation");
  }
  this.type = type;
  this.wheelsCount = wheelsCount;
  return this;
}
// Constructor invocation
const car = new Vehicle("Car", 4);
car.type; // => 'Car'
car.wheelsCount; // => 4
car instanceof Vehicle; // => true
// Function invocation. Throws an error.
const brokenCar = Vehicle("Broken Car", 3);
