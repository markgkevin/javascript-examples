//  Arrays are iterable

console.log("Iterate Array");

var arrLetters = ['a', 'b', 'c'];

for (var i = 0; i < arrLetters.length; i++) { // loop over the index of arrLetters
    console.log(arrLetters[i]); // log array with the index of i
}

// console.log("Iterate Strings");
// var strLetters = "abc";

// for (var j = 0; j < strLetters.length; j++) {
//     console.log(strLetters[j]);
// }


var veggies = ['carrot', 'parsley', 'onion'];

console.log(veggies.length); // log the index of veggies array = 3

console.log(veggies[0]); // log carrot with the index of 0
console.log(veggies[2]); // log carrot with the index of 2

for (var k = 0; k < veggies.length; k++) {
    console.log(veggies[k]); // log all veggies
}

