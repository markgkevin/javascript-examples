// Destructuring: Copying item which then become independent of the original
// Takes vales from arrays or properties from objects and set them as local variables.
// A techniques that makes your code more concise and readable.
// The idea of destructuring is to put the element into the rightside of eqaul sign which means destructure this element

const arrFastFood = ["BACON", "PIZZA", "FRIES", "BURGERS"]; // assigning values to local variables.
// assigning each variables by referencing its array index
const bacon = arrFastFood[0];
const pizza = arrFastFood[1];
const fries = arrFastFood[2];
const burgers = arrFastFood[3]; // it works but a lot of waste code.
console.log(bacon);
console.log(pizza);
console.log(fries);
console.log(burgers);

console.log("bacon" == "BACON");
console.log(bacon === "BACON");

// introducing DESTRUCTURING
console.log("In Destructuring");

const arrNum = ["1", "2", "3", "4", "5"];
// using single line of code
// by putting [bracket] after const which means this is an array
const [one, two, three, four, five] = arrNum; // assigning each variable name to each index in the array
console.log(arrNum);
console.log(three);

//emiting or skipping value in the array
const arrLetter = ["A", "B", "C", "D", "E"];
const [a, , c, d] = arrLetter; // taking 3 element in the index and skiping b by putting just a comma
console.log(a);
console.log(c);
console.log(d);
const [b, e] = arrLetter; // destructuring again the arrLetter with the remaining element
console.log(b);
console.log(e);
// using spread operator [...rest]variable
const arrFruit = ["Apple", "Banana", "Cherry", "Durian", "Grapes"];
const [apple, banana, ...rest] = arrFruit; // this only apply at the last reamining element of the index
console.log(rest);
//You may also provide default values incase the value in the array are undefined

//Combining two array using spread operator
const arrCombined = [...arrNum, ...arrLetter];
console.log(arrCombined);

// Destructuring Objects
const objPet = {
  dog: "Doggie",
  cat: "Catty",
  fish: "Fishy",
};
const dog = objPet.dog; // referencing each value line bye line using dot.notation
const cat = objPet.cat;
const fish = objPet.fish;
console.log(dog);

const objVehicle = {
  car: undefined, // undefined values
  bus: "Victory Liner",
  plane: "Boeing 717",
  train: "PNR",
  ship: "Oasis",
};
const { car = "four wheels", bus, plane, train, ship } = objVehicle; //destruturing just by putting {brackets} after const you can
//refernce property names which automatically becomes local variables
// instead of referencing them line bu line using dot.notation
// you can also provide default values
// you can also rename property by putting : newName
console.log(ship);

//Destructuring function in an Object

const objUser = { userId: 0, username: "Marky101" };
function haveFun({ userId, username }) {
  //destructuring inside the function
  console.log(`Hello ${username}`);
}
