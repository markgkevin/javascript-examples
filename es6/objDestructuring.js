// Destructuring objects

// Creating two objects
const firstPerson = {
  name: "Mark",
  age: 25,
  address: {
    //nested object
    city: "Calumpit",
    zip: 3003,
  },
};
// destructuring firstPerson
const { name, age, ...rest } = firstPerson; //using spread operator
console.log(name);
console.log(age);
console.log(rest);

// Second Object
const secondPerson = {
  //name: "Kevin", // already assigned default value
  age: 18,
  address: {
    //nested object
    city: "Hagonoy",
    zip: 3016,
  },
};
// supplying default values and renaming property
const {
  name: firstName = "MK",
  favoriteFood = "Chocolate",
  address: { zip }, // destructuring nested object address{}
} = secondPerson;
console.log(firstName);
console.log(favoriteFood);
console.log(zip);

//creating function
function printUser({ name, age, birthMonth = "October" }) {
  console.log(`Name is: ${name}. Age: ${age}. Birth Month: ${birthMonth}`);
}
printUser(secondPerson);
