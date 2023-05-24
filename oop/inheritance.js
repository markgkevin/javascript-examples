//oop inheritance
// is usefull for code reusability
//Reuse properties  and methods of the  existing class
// Children class can inherit parent class properties by  using the extends keyword

class Animal {
    constructor() {
        this.alive = true;
    }
    eat() {
        console.log("This animal needs to eat");
    }
}
// using the extends keyword to  inherit the animal class parent properties

// these are child classes that inherit the parent class
class Dog extends Animal { // inherit the animal properties
    says() { // creating new method
        console.log("woof Wof")
    }
}

class Cat extends Animal {
    jump() {
        console.log("this animal has an ability to jump");
    }
}

class Eagle extends Animal {
    fly() {
        console.log("Birds can fly")
    }
}

class Snake extends Animal {
    crawl() {
        console.log("Snakes do not have feet so they crawl")
    }
}

// creating new object
let dog = new Dog();
let cat = new Cat()
let eagle = new Eagle();
let snake = new Snake();

dog.says();
cat.eat();// inherit the animal property