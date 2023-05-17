// try and catch statement

// basic syntax
// try {
// code might throw an error
// }catch (error) {
// code t handle exception
// }

// try {
//     // Code that might throw an exception
//     var result = notDefineVar * 2; // it will throw a reference error because of undefined variable
//     console.log(result); //  this line will not execute
// } catch (error) {
//     // Code that will handle the exception
//     console.log('An error occures:', error);
// }
// console.log("Error has been caught and proceed to this line"); // code continue to run


//multiple catch block

// try {
//     // Code that might throw and exception
//     const result = null.length; // This will throw Type Error because null has no value
// } catch (err) {
//     // Code to handle exception
//     if (err instanceof TypeError) {
//         console.error('A type error occured', err);
//     } else if (err instanceof RangeError) {
//         console.error('A range error oocures', err);
//     } else {
//         console.error('An error has occured', err);
//     }
// }


// Throw statement

// basic syntax
// throw expression;

function divideNum(a, b) {
    if (a === 0 || b === 0) {
        // throw 'An error has  occured.'; // throwing without keyword new
        throw new Error('Cannot divide by zero'); // throwing a custom error message

    }
    return a / b;
}

// try catch block

try {
    const result = divideNum(0, 10);
    console.log(result); // this line won't be executed
} catch (error) {
    console.error('An error occured', error.message); // log error and calling custom error message
}
