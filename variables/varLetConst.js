// In this example, the var variable x is function-scoped and can be accessed and modified both inside and outside the if block.The let variable y and const variable z are block-scoped, so the inner block creates new variables that shadow the outer variables.Modifying y and z inside the block does not affect the outer variables.

// Understanding the scoping rules of var, let, and const is crucial for avoiding bugs caused by variable shadowing, unintended reassignments, or accessing variables in the temporal dead zone.It's generally recommended to use let and const instead of var for more predictable and manageable code.

function example() {
    var x = 1;
    let y = 2;
    const z = 3;

    if (true) {
        var x = 10; // Variable shadowing; modifies the outer 'x'
        let y = 20; // New 'y' variable in the block scope
        const z = 30; // New 'z' constant in the block scope
        console.log(x, y, z); // Output: 10, 20, 30
    }

    console.log(x, y, z); // Output: 10, 2, 3
}

example();


// var:
// Variables declared with var are function-scoped or globally-scoped, but not block-scoped. This means that a variable declared with var is accessible within the function in which it is defined or globally throughout the entire program.
// var variables are hoisted, which means that the variable declaration is moved to the top of its scope during the compilation phase, while the assignment remains in place. This allows you to access a var variable before it is declared, but it will have an initial value of undefined.
// var variables can be redeclared and reassigned within their scope without any restrictions.

// let:
// Variables declared with let are block-scoped, meaning they are accessible within the block in which they are defined (e.g., inside a function, loop, or conditional statement).
// Unlike var, let variables are not hoisted. They have a temporal dead zone (TDZ), which means you cannot access a let variable before it is declared in its scope.
// let variables can be reassigned within their scope, allowing you to change their value after initialization. However, they cannot be redeclared within the same block.

// const:
// const variables also have block scope, similar to let.
// The key difference is that const variables are read-only constants. Once assigned a value, a const variable cannot be reassigned or redeclared within the same block. It remains constant throughout its scope.
// Like let, const variables are not hoisted and have a temporal dead zone. You must declare and assign a value to a const variable before using it.
// It's important to note that while a const variable cannot be reassigned, the data it refers to (e.g., an object or an array) can still be modified, as long as the reference itself doesn't change.