// Functional Programming

var currencyOne = 100;
var convertedCurrency = 0;
var exchangeRate = 1.2;

function convertCurrency(amount, rate) {
  // function that convert currency
  return amount * rate; // 100 * 1.2
}
//invoking the converCurrency function
convertedCurrency = convertCurrency(currencyOne, exchangeRate); // multiplying 100 * 1.2
console.log(convertedCurrency); // log convertedCurrency
