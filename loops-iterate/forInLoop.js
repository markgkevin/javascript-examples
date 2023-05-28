// forIn Loops are for Objects
// objects are not iterable
// loops over  property name

//basic syntax

const obj = {} //empty objects

for (let variableName in obj) {
    // code to execute
}

// creating object

const person = { //person object
    firstName: 'Mark',
    age: 20,
    address: {
        city: 'Calumpit',//nested object
        zip: 3003
    }
}
//creating for in loop
for (let info in person) {
    console.log(person[info]) // to get the value put the variable name inside square brackets[]
}

// for in loops also work within array
const arrNum = [1, 2, 3, 4, 5];
for (let numbers in arrNum) {
    //console.log(numbers);  // loging the array indexes
    console.log(arrNum[numbers]); // to get the original value reference the array put  the variable name inside bracket[]
}