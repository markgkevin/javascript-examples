//javascript classes Serve as a blueprint to be repeatedly use code

// class syntax using class keyword

class Car { // classes start with the capital letter
    constructor(color, speed) { // this is  contructor function that can accepts many parameter as needed
        this.color = color; // to assign passed-in parameter to future object porperty
        this.speed = speed; // to instanciate new object. instancesof a given class
    }

    turboOn() { // this is a method and you can add many methods as you can. function keyword is not needed just the name of the method
        console.log("turbo is On");
    }
    engineOff() {
        console.log("The engine is now off");
    } // creating new methods
    engineOn() {
        console.log('The engine is now running');
    }
    carSpecs() {
        console.log(`Car color ${this.color} and car speed is ${this.speed}`); // passing new properties
    }
}
// when the class Car definition is ready, you can start building the car object.

// this is new object car1
const car1 = new Car("pink", 120); // saved and instaciate the class as car1 you have acces to it methods and properties

car1.turboOn(); // calling the method turboOn
car1.engineOn();

//console.log(car1);
car1.carSpecs();

// creating new instance of an object
const advanceCar = new Car("transparent", 380);
advanceCar.carSpecs();
advanceCar.engineOn();