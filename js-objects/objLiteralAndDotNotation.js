// Object = group of data that can be relate
// object = a collection of related properties         
// represented as a "key:value pair" =  property key and property value



// Character Store Manager

// var storeManagerMovement = 4;
// var storeManagerSocialSkills = 50;
// var storeManagerStreetSmarts = 50;
// var storeManagerHealth = 30;

// Pain points is very long variable names and 
//does not tell to javascript that is related to Store manager


// SOLUTION = Objects


//This is Dot notation
var storeManager = {}  // empty object literals
storeManager.rangePerTilesTurn = 4; // traits built using dot notation (.)
storeManager.socialSkills = 50;    // traits built using dot notation (.)
storeManager.streetSmart = 50;     // traits built using dot notation (.)
storeManager.health = 80;          // traits built using dot notation (.)
storeManager.specailAbility = "finding business opportunity"; // traits built using dot notation
storeManager.greeting = "Let's make some money"; // traits built using dot notation


// This is coma delimited properties //key: value; pairs
var storeAssistant = {
    movement: 3,            // traits built using key: value; pairs seperated by a coma(,)
    socialSkills: 30,       // traits built using key: value; pairs seperated by a coma(,)
    streetSmart: 30,        // traits built using key: value; pairs seperated by a coma(,)
    health: 40              // traits built using key: value; pairs seperated by a coma(,)
}




