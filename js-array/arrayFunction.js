//  JavaScript Function with Loop and If statement inside the body



// function listArrayItems(arr) {
//     for(var i = 0; i < arr.length; i++) {
//         console.log(arr[i]) //display the array item where the index is euqal to i
//     }
// }

// var colors = ['red','orange','yellow','green','blue','purple','pink'];
// listArrayItems(colors); //display all items in the array at once

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//function that takes an array as input and display all items of this array

// function listArrayItems(arr) {
//     for(var i = 0; i < arr.length; i++) {
//         console.log(i, arr[i]) //display the array item where the index is euqal to i
//     }
// }

// var colors = ['red','orange','yellow','green','blue','purple','pink'];
// listArrayItems(colors); //display all items in the array at once

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// To start the count from one instead of zero
// function listArrayItems(arr) {
//     for(var i = 0; i < arr.length; i++) {
//         console.log(i+1, arr[i]) //display the array item where the index is euqal to i
//     }
// }

// var colors = ['red','orange','yellow','green','blue','purple','pink'];
// listArrayItems(colors); //display all items in the array at once

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// if condition inside for loop of an array
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'red') {
            console.log(i * 100, 'tomatoes')
        } else {
            console.log(i * 100, arr[i])
        }

    }
}

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors); //display all items in the array at once