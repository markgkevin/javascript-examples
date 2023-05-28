// for in and for of loops

const car = {  // this is the prototype that for in loop iterate over
    engine: true,
    steering: true,
    speed: 'slow',
    color: undefined
}
// passing properties and values using Object.create() method
const sportsCar = Object.create(car); // inherit the car properties and values
sportsCar.color = 'black';
sportsCar.speed = 'fast'; // assign new value to speed property in the new sportsCar object
console.log('The sportsCar object: ', sportsCar); // The sportsCar object:  { speed: 'fast' }

console.log('===== for-in is unreliable =====');
for (prop in sportsCar) { //  variable prop means property
    console.log(prop);
    // iterating over object and its prototype

}
console.log('===== for-of is reliable ====='); // only iterate over the specified objects
for (propty of Object.keys(sportsCar)) {
    console.log(propty + ":" + sportsCar[propty]); // speed:fast
    // iterating over object's own prototype only
}

