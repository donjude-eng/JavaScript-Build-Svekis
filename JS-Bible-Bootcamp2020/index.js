//EXAMPLE 1 - "const"
const myBoolean = true;
//console.log(myBoolean)

/**
 * CHALLANGE 1
 *
 * Declare variable "myObject" and assign value {}.
 * print this variable to the console.
 * NOTE: vraiable "myObject" Will NOT be reassigned in the future.
 */

 //const myObject = {};
 //console.log(myObject);

 //myObject = {};

 /**
  * CHALLENGE 2
  * Declare "x" and assign value 10 to it.
  * Declare "y" and assign value true in it.
  * Declare "myObject" and assign object with two name-value pairs.
  * Declare "anotherObject".
  * Later assign value
  */

let x = 10;
const y = true;
const myObject = {
    a:x,
    b:y
}
//console.log(myObject)

//Another object
x = 20;
let anotherObject;
anotherObject = {
    newA:x,
    b: y,
    c: myObject
};
//console.log(anotherObject)


//Dynamic typing in javascript
let myVariable;

//console.log(myVariable); //Undefined

myVariable = 10;

//console.log(myVariable); //10

myVariable = true;

//console.log(myVariable); //true

myVariable = {
    x: true,
    y: 10
};

//console.log(typeof myVariable) //{}

// CHALLANGE

let myname = null;
console.log(typeof myname);

myName = 15;
console.log(typeof myname);

myName = false;
console.log(typeof myName);