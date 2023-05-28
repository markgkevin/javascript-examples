/*Template literals
 are an alternative way of working with strings, which was introduced in the ES6 addition to the JavaScript language.
*/

// ES5
//the only way to build strings in JavaScript was to delimit them in either single quotes or double quotes
let say = 'Hello, World!';
let sayHello = "Hello, World!";

// ES6
//introduced the use of backtick characters as delimiters
let sayGreet = `Hello, World!`; // template string

// Differences between a template and regular string

let greet = "Hello";
let place = "World!";
// it allows for variable interpolation:
console.log(`${greet} ${place}`); // display both variables using template literals

// template strings can span multiple lines.
let greetHello =
    `Hello,
fucking
World`
console.log(`${greetHello}`);

//it's possible to perform arithmetic operation inside a template literal expression
console.log(`${1 + 1 + 1 + 1 + 1}⭐`) 
