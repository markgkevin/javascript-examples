class Train {
    constructor(color, lightsOn) { //The constructor will be used to build properties on the future object instance of the Train class.
        this.color = color;         // The constructor is a special function in my Train class.
        this.lightsOn = lightsOn; // this keyword use to reference the class propertes
    }
    // creating methods of Train class
    toggleLight() {
        this.lightsOn = !this.lightsOn;
    }
    lightStatus() {
        console.log("Lights On? ", this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

let myFirstTrain = new Train("red", false); //  to actually build a new instance of the Train class
console.log(myFirstTrain);


// You can continue building instances of the Train class. Even if you give them exactly the same properties, they are still separate objects.

let mySecondTrain = new Train("black", false);
let myThirdTrain = new Train("purple", true);

let lastTrain = new Train("brown", false);
lastTrain.getPrototype();
lastTrain.getSelf();
lastTrain.toggleLight();

// To inherit from one class to a new sub-class, JavaScript provides the extends keyword, which works as follows

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn); // In JavaScript classes, super is used to specify what property gets inherited from the super-class in the sub-class.
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLigths();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}