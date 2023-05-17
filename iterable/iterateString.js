// String are Iterable

console.log("Iterate Strings");
var strLetters = "abc";

for (var j = 0; j < strLetters.length; j++) {
    console.log(strLetters[j]);
}

// console.log("Iterate Array");
// var arrLetters = ['a', 'b', 'c'];

// for (var i = 0; i < arrLetters.length; i++) {
//     console.log(arrLetters[i]);
// }

var greeting = 'Howdy'; // this is a string

console.log(greeting.length); // log the index of stringgreeting = 5

console.log(greeting[0]); // log letter l with the index of 0
console.log(greeting[2]); // log letterd with the index of 2

for (var i = 0; i < greeting.length; i++) {
    console.log(greeting[i]); // log all letters in string
}

// But String are not Array
var greet = 'Hello ';
var user = 'Lisa';

//console.log(greet.pop()); // using built in array method .pop()
//TypeError: greet.pop is not a function

console.log(greet + user); //concat Hello Lisa using plus operator
console.log(greet.concat(user)); // also concatenate Hello Lisa using .concat() method
