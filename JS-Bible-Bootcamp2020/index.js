//EXAMPLE 1 - "const"
//const myBoolean = true;
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

// let x = 10;
// const y = true;
// const myObject = {
//     a:x,
//     b:y
// }
// //console.log(myObject)

// //Another object
// x = 20;
// let anotherObject;
// anotherObject = {
//     newA:x,
//     b: y,
//     c: myObject
// };
//console.log(anotherObject)

//Dynamic typing in javascript
// let myVariable;

// //console.log(myVariable); //Undefined

// myVariable = 10;

// //console.log(myVariable); //10

// myVariable = true;

// //console.log(myVariable); //true

// myVariable = {
//     x: true,
//     y: 10
// };

// //console.log(typeof myVariable) //{}

// // CHALLANGE

// let myname = null;
// //onsole.log(typeof myname);

// myName = 15;
// //console.log(typeof myname);

// myName = false;
//console.log(typeof myName);

//Object example

// const myCity = {
//     city: "Pulpally",
//     state : "Kerala",
//     popular : true,
//     numberOfDist : 14
// }

// myCity.city = "Bathery";

// console.log(myCity.city)

// const mycity = {
//     city : "Pulpally",
// }
// mycity["Popular"] = true;
// console.log(mycity)

// let myObject;

// myObject = {
//     a: 10,
//     b: "abc"
// }

// console.log(myObject);

// myObject.a = 15;
// console.log(myObject);

// myObject.c = true;
// console.log(myObject)

// delete myObject.b;
// console.log(myObject)

/**
 * CHANLLENGE 2;
 *
 * Create a varaible called "myPost".
 * Initial value should be {}.
 * Add property called "postTitle" and value "Object is reference type"
 * Add one more property "postLokes" with value 0.
 * Add third property "shared" and set its value 0
 * Incearse value of the "Postlikes" by 1
 * Delete property shared
 */

//  let myPost = {};

//  myPost = {
//      postTitle : "",
//      postLike : 0,
//      shared: false,
//  }
// console.log(myPost)

//  myPost.postLike = 1;
//  console.log(myPost)

//  delete myPost.shared;

// let myObject = {"a" : -10}
// let copyOfMyObject = myObject;

// console.log(copyOfMyObject)

// copyOfMyObject.b = false;
// console.log(copyOfMyObject)
// console.log(myObject)

/**
 * EXAMPLE 3
 */

//  let myObject = {
//      a: true,
//      b: null,
//      c: 25
//  }

//  const propertyName = "c";
//  console.log(myObject[propertyName]);
//  console.log(myObject["propertyName"]);
//  myObject["new" + "Property" + "Name" ] = "Don jude Joseph"
//  console.log(myObject)

// //  console.log(myObject["a"])

// //  console.log(myObject["b"])

// //  console.log(myObject["c"])

//  //myObject["Name"] = "Don Jude";

/**
 * Example 4
 * Missing properties
 */

const myObject = {
  a: 3,
  b: true,
};
//myObject.

//console.log(myObject.c) //Undefined


/**
 * CHALLENGE 3
 * "objectWithNestedObject" with initial vale {}.
 * Add property "Nested object" iniial vale{}
 * Add property "a" with value "null" to "nestedObject" . Use bracket
 * notation
 * Create new variable with the property name
 *
 */

 let objectwithNestedObject = {};

objectwithNestedObject.nestedObject = {};

objectwithNestedObject.nestedObject.a = null;

const newPropertName = "b";

objectwithNestedObject.nestedObject[newPropertName] = "Don Jude";
console.log(objectwithNestedObject)
