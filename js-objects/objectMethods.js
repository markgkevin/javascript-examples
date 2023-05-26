var car = {}; //empty object literal
//add new key-value pairs to existing objects using the dot notation and the assignment operator.
car.color = "red"; //update the value of a property of the car object
car.mileage = 98765;

//add a method to the car object so that it can be called as car.turnkey()
car.turnkey = function () {
  console.log("The engine is running"); //If the function is a property of an object, it is then referred to as a method.
};
car.lightsOn = function () {
  console.log("The lights are on"); //example of adding properties and methods to an object
};

console.log(car.color); // log the car object
car.turnkey(); //invoking the car.turnKey() function
car.lightsOn(); //invoking the car.lightsOn() function

//Remember that this method can be accessed only through the car object,
//so I first need to type the name of the object that holds the turnTheKey method.
//In other words, I need to type the word car, followed by a dot,
//and then the name of my method, which is turnTheKey.
