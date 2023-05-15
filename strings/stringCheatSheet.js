// string Cheat Sheet
// some of the most common and most useful properties and methods available on strings.


// create two string variables
var greet = "Hello, ";
var place = "World!";

console.log(greet.concat(place)); //also concatenate Hello World! using .concat() method
// using length property
console.log(greet.length); // 7 

// using the charAt() method
console.log(greet.charAt(0)); // To read each individual character at a specific index in a string

// using .concat() method
var wo = "Wo";
var rld = "rld";
console.log(wo.concat(rld)); // World

// using .indexOf() method
var laugh = "ho-ho-ho";
console.log(laugh.indexOf('h')); // 0
console.log(laugh.indexOf('o')); // 1
console.log(laugh.indexOf('-')); // 2

// using .split() method
console.log(laugh.split('-')); // [ 'ho', 'ho', 'ho' ]

// methods to change the casing of strings
console.log(greet.concat(place).toLocaleUpperCase()); // HELLO, WORLD!
console.log(greet.concat(place).toLowerCase()); // hello, world!



