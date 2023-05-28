//  ForOf Loops are for Arrays

// basic syntax
/*
const iterableArray = []; // empty array
for (variableName of iterableArray) {
    // execute code here
}

const alphabet = ['a', 'A', 'b', 'B', 'c', 'C'];
for (letters of alphabet) {
    console.log(letters); // log variable letters
}
*/

// using for of loops in Object

const person = {
    lastName: 'Gatchalian',
    age: 20,
    address: { //nested object
        street: 'Sesame Street',
        zip: 30002
    }
}

// Accessing Object properties and values using built-in methods

// Object.keys(); Method
console.log(Object.keys(person)); // [ 'lastName', 'age', 'address' ]
// Object.keys(); methods is to get object property keys

// Object.values(); Method
console.log(Object.values(person.address)); // [ 'Gatchalian', 20, { street: 'Sesame Street', zip: 30002 } ]
// Object.values(); methods is to get object property values

// Object.entries(); Method
console.log(Object.entries(person));
/*[
  [ 'lastName', 'Gatchalian' ],
  [ 'age', 20 ],
  [ 'address', { street: 'Sesame Street', zip: 30002 } ]
] */
// Object.entries(); methods is to get object properties and values at same time


const car = { // new car object
    brand: 'Toyota',
    topSpeed: 200,
    color: 'black'
}
// for of loop
for (const carSpecs of Object.keys(car)) {
    console.log(carSpecs, ':', car[carSpecs]);
}


function testBracketsDynamicAccess() {
    var dynamicKey;
    if (Math.random() > 0.5) {
        dynamicKey = "speed";
    } else {
        dynamicKey = "color";
    }

    var drone = {
        speed: 15,
        color: "orange"
    }

    console.log(drone[dynamicKey]);
}
testBracketsDynamicAccess();




