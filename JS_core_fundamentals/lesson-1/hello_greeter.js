let myTime = 22;
let output;
if (myTime < 11) {
    output = "Good Morning";
}
else if (myTime >= 11 && myTime <= 17) {
    output = "Good Afternoon";
}
else if (myTime > 17 && myTime < 23) {
    output = "Good Evening";
}
else {
    output = "I'm sleeping";
}
//console.log(output);

// // //SWITCH AND CASE

let person = "Don Jude";
switch (person) {
  case "John":
    //console.log(person + " is not my friend");
    break;
  case "Don Jude":
    //console.log("Found it");
  case "williams":
    //console.log("Hi Steave");
    break;
  default:
    //console.log("Nobody Found");
}

// //Function challenge

// let output = "Hello World";

// let counter = 0;

// function welcome(para) {
//   counter++;
//   //console.log(para);
//   //console.log(temp);
// }

// welcome(output);
// welcome(output);
// welcome(output);

// let myNum = 50;
// addTen(myNum)

// function addTen(num) {
//     let temp = Number(num);
//     //console.log(temp + 10);
// }

// let myName = "Don Jude";
// let counter = 0;

// function addCounter(ten){
//     counter ++;
//     let value = counter + "times run";
// }

// // //Closure Functions
// var pet = function (name) {
//   //console.log("inside Pet");

//   var getName = function () {
//     //console.log("Inside Get Name");
//     return name;
//   };

//   return getName;
// };

// myPet = pet("Vivie");
// myPet();

//Test function
// function addr1(numOne, numTwo = 5){
//     console.log("number 1 " + numOne);
//     console.log("number 2 " + numTwo );
// }


// function addr2(numOne, numTwo) {
//     numTwo = numTwo || 5;
//     console.log("Number 1 " + numOne);
//     console.log("Number 2 " + numTwo)
// }


// addr1(100, 100);
// addr1(100);

// addr2(100, 100);
// addr2(5);


// function twoValues(num1 , num2) {
//     let multiply = num1 * num2;
//     return multiply;

// }

// let value = twoValues(10, 5);
// console.log(value)


// if(value >= 51 ) {
//     console.log("This is accepted as a value")
// } else if (value <= 50) {
//     console.log("It comes under less than catogory")
// } else {
//     console.log(" No catogory found")
// }


// let num1 = 5;
// let num2 = 10;
// function multiplier( a, b){
//     let multiply = a * b;
//     return multiply

// }

// console.log(multiplier(num1, num2));