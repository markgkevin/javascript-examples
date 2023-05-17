// Combined the Math.random() and Math.ceil built in Math Object


// Get a random decimal number betwenn 0 and 0.99 
//save it to a variable

var decimal = Math.random() * 10; // generate decimal number betwenn 0 and 0.99 multiplied by 10

var rounded = Math.ceil(decimal); // round up the value of decimal

console.log(rounded); // log the value of var rounded