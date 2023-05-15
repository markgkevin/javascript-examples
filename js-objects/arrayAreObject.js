// Arrays are objects
// In JavaScript, arrays are objects. 
// That means that arrays also have some built-in properties and methods.

// One of the most commonly used built-in methods on arrays are
// the push() and the pop() methods.

var fruits = [];  // empty array which is  an object
fruits.push("apple"); // To add new items to an array, I can use the push() method
fruits.push("banana");
fruits.push("squash");

fruits.pop(); // To remove the last item from an array, I can use the pop() method:

console.log(fruits); // log array fruits

//build a function that takes all its arguments and pushes them into an array
function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr; //Even better, I don't have to console log the newly built array. 
    //console.log(arr);
}
//arrayBuilder('cherry', 'oranges', 'pearl'); // [ 'cherry', 'oranges', 'pearl' ]

// save this function call to a variable. 
var buildArray = arrayBuilder('cherry', 'oranges', 'pearl');
//save function arrayBuilder and name it buildArray

console.log(buildArray); // log [ 'cherry', 'oranges', 'pearl' ]

