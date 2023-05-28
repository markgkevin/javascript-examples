// JavaScript Common Data Structures
// Object, Array, Map and Set data structures in JavaScript,


// Working with arrays in JavaScript

// The forEach() method
// accepts a function that will work on each array item.

// Basic Syntax

const fruits = ['kiwi', 'mango', 'apple', 'pear']; // array of fruits
function appendIndex(fruit, index) { //appendIndex function with two parameter fruit for array element and index for array  index itself
    console.log(`${index}. ${fruit}`); // log fruit and index using template literal
}
// invoking function using forEach method
fruits.forEach(appendIndex);
/** output
0. kiwi
1. mango
2. apple
3. pear
*/

const food = ['hotdog', 'burgers', 'fries', 'pizza'];
function foodIndex(food) {
    console.log(food);
}
food.forEach(foodIndex);

//Very often, the function that the forEach() method 
//needs to use is passed in directly into the method call, like this:

const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach(function (veggie, index) {
    console.log(`${index}. ${veggie}`);
});

// The filter() method
// It filters your arrays based on a specific test. 
// Those array items that pass the test are returned.

const nums = [0, 10, 20, 30, 40, 50]; // array of nums
nums.filter(function (num) {
    return num > 20;
}) // [30,40,50]


// The map method

/*This method is used to map each array item over to another array's item, 
based on whatever work is performed inside the function that is passed-in 
to the map as a parameter. */

const numbrs = [0, 10, 20, 30, 40, 50].map(function (numbr) {
    return numbr / 10
}) // [0,1,2,3,4,5]
