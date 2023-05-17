// function calling and recursion

// function recurExample() {
//   console.log("one");
//   console.log("two");
//   console.log("three");
//   recurExample(); // it will run in an infinite loop
// }
// recurExample(); // calling function

// recursion
// repeatedly run code without the use of  loops
let counter = 10;
function recurExample() {
  console.log(counter);
  counter = counter - 1;
  if (counter === 0) return;
  recurExample();
}
recurExample();

// compairing recursion over for loop
for (var i = 10; i > 0; i--) {
  console.log(i);
}
