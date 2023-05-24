// constructor = a special method for assigning properties.
// automaically called when creating an object.

class Car {
    constructor(manufactured, model, year, color) {
        this.manufactured = manufactured;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    //these are methods
    drive() {
        console.log("The car is  running!");
    }
    brakes() {
        console.log("The car is now pulled over");
    }
}
// instantiating car object
let car1 = new Car("Ford", "Mustang", 1968, "black"); // passing the constructor arguments
let car2 = new Car("Toyota", "Raize", 2023, "red");

console.log(car1.manufactured); // accessing the car properties of the Car object
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
console.log(car1.brakes());


console.log(car2.manufactured); // accessing the car properties of the Car object
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);


