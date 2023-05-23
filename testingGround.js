// var table = {
//     leg: 4,
//     color: "black",
//     shape: "square",
//     sittingCapacity: 6
// }

// console.log(table);

// var result = "Hello".indexOf('l');
// console.log(result);

//syntax error
// var name = "mark;
// console.log(name);

// function addTwoNum(a, b) {
//     //var result = a + b;
//     try {
//         if (typeof (a) != 'number') {
//             throw new ReferenceError('the first arguement is not a number');
//         } else if (typeof (b) != 'number') {
//             throw new ReferenceError('the second arguement is not a number')
//         } else {
//             console.log(a + b);
//         }
//     } catch (err) {
//         console.log('Error!', err);
//     }

// }
// addTwoNum(5, "5");
// console.log('It still work')

// function sumTwoNum(num1, num2) {
//     if (typeof (num1) != 'number' || typeof (num2) != 'number') {
//         throw new Error('Either first arguement or second arguement is not a number');
//     }
//     return num1 + num2;
// }

// try {
//     const result = sumTwoNum('5', 5);
//     console.log(result);
// } catch (error) {
//     console.error('Cannot add string to number:', error.message);
// }

//defensive programming

// function letterFinder(word, match) {
//     var condition1 = typeof (word) === 'string' && word.length >= 2;
//     var condition2 = typeof (match) === 'string' && match.length == 1;
//     if (condition1 && condition2) {
//         for (i = 0; i < word.length; i++) {
//             if (word[i] == match) {
//                 //if the current character at position i in the word is equal to the match
//                 console.log('Found the', match, 'at', i)
//             } else {
//                 console.log('---No match found at', i)
//             }
//         }
//     } else {
//         console.log("Please pass correct arguments to the function.");
//     }

// }
// letterFinder([], []);
// letterFinder('cat', 't');

// Task 1: Build a function-based console log message generator
// function consoleStyler(color, background, fontSize, txt) {
//     var message = "%c" + txt;
//     var style = `color: ${color};`
//     style += `background: ${background};`
//     style += `font-size: ${fontSize};`
//     console.log(message, style);
// }


// // Task 2: Build another console log message generator
// function celebrateStyler(reason) {
//     var fontStyle = "color: tomato; font-size: 50px";
//     if (reason == "birthday") {
//         console.log(`%cHappy birthday`, fontStyle);
//     } else if (reason == "champions") {
//         console.log(`%cCongrats on the title!`, fontStyle);
//     } else {
//         console.log(message, style);
//     }
// }

// // Task 3: Run both the consoleStyler and the celebrateStyler functions
// consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
// celebrateStyler('birthday');
var firstWord = "abc";
var secondWord = "defg";

var alphabet = firstWord + secondWord;
console.log(alphabet);

console.log(firstWord.concat(secondWord));