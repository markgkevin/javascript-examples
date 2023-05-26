//creating a function
function addAndTimes(a, b) {
  //accepts two parameter
  return [a + b, a * b]; //returns an array
}

const arrResult = addAndTimes(5, 6); // passing the function to arrResult and supplying two arguements
console.log(arrResult); // [ 11, 30 ] invoking and log function

// Destructuring function

function sumAndMultiply(num1, num2) {
  return [num1 + num2, num1 * num2];
}
const [sum, multiply, division = "No operation"] = sumAndMultiply(5, 6); //supplying default value into division
console.log(sum);
console.log(multiply);
console.log(division);
