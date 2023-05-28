/*The example below demonstrates how to use the object data structure to complete a specific task. This task is to convert an object to an array:*/

const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach(function (key) {
    result.push(key, drone[key])
})
console.log(result) // [ 'speed', 100, 'color', 'yellow' ]

// Working with Maps in JavaScript
// To make a new Map, you can use the Map constructor: new Map();   

// A map can feel very similar to an object in JS.
// However, it doesn't have inheritance. No prototypes! This makes it useful as a data storage.

let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);
bestBoxers.get(1); // 'The Champion'


// Working with Sets in JavaScript
// A set is a collection of unique values.
// To build a new set, you can use the Set constructor: new Set();

const repetitiveFruits = ['apple', 'pear', 'apple', 'pear', 'plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);

// Other data structures in JavaScript
/*
Queues
Linked lists (singly-linked and doubly-linked)
Trees
Graphs
*/