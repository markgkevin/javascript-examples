// Object literal and Bracket Notation

var table = {}; // empty object
table['shape'] = 'square'; //object property(traits) are enclosed in square bracker [] instead of dot (.)
table['leg'] = 4; //  wrap each property's key as a string, inside either the single or double quotes
table['color'] = 'red';
table['capacity'] = 8;
console.log(table); // display table { shape: 'square', leg: 4, color: 'red', capacity: 8 }



var chair = {} // empty object
chair['2023'] = 'manufactured';// can add numbers (as the string data type) as property keys:  
chair['legs'] = 4;
chair['color'] = 'black';
chair['shape'] = 'round';
chair['made Of using'] = 'metal'; // able to use spacesin bracket notation
chair.legs = 5; //update chair leg using dot notaion // can also us bracket notation
console.log(chair); // log { legs: 5, color: 'black', shape: 'round', madeOf: 'metal' }