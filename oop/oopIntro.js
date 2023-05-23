// comparing it to functtional programming

var shoes = 100;
var stateTax = 1.2;

function totalPrice(shoes, stateTax) {
    return shoes * stateTax;
}
var toPay = totalPrice(shoes, stateTax);
console.log(toPay);


// converting into OOP
var purchase1 = { // object 1
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function () {
        var amount = purchase1.shoes * purchase1.stateTax;
        console.log('total price:', amount);
    }
}
purchase1.totalPrice();

// another object with the same structure value except shoes value
var purchase2 = { //object 2
    shoes: 50, // changed value
    stateTax: 1.2,
    totalPrice: function () {
        var amount = this.shoes * this.stateTax; // also using this.keyword in this block
        console.log('total price', amount);
    }
}
purchase2.totalPrice();

// object using this.keyword 
let purchase3 = {
    shoes: 75,
    stateTax: 1.2,
    totalPrice: function () {
        const amount = this.shoes * this.stateTax; // this.keyword means this object or this/purchase3
        console.log('total price', amount); // this methods allow to re use exiting code to reduce waste code
    }
}
purchase3.totalPrice(); 
