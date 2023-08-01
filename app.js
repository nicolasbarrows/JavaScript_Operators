console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
console.log("EXERCISE 1:\n==========\n");

let a = 20;
let b = 4;
let add = a+b;
let minus = a-b;
let multiply = a*b;
let dividing = a/b;
console.log("a + b = " + add);
console.log("a - b = " + minus);
console.log("a * b = " + multiply);
console.log("a / b = " + dividing);

// Exercise 2
console.log("EXERCISE 2:\n==========\n");

let num = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Frodo";
let lastName = "Baggins";

let answer1 = num + str;
console.log("What is the value of: num + str? : " + answer1);
let answer2 = num + str2;
console.log("What is the value of: num + str2? : " + answer2);
let answer3 = num + isPresent;
console.log("What is the value of: num + isPresent? : " + answer3);
let answer4 = firstName + num;
console.log("What is the value of: firstName + num? : " + answer4);
let answer5 = isPresent + str;
console.log("What is the value of: isPresent + str? : " + answer5);
let answer6 = firstName + lastName;
console.log("What is the value of: firstName + lastName? : " + answer6);

// Exercise 3
console.log("EXERCISE 3:\n==========\n");

let val = 5;
let str3 = "5";
let str4 = "five";
let isAwake = false;

let answer7 = val == str3;
console.log("What is the value of: val == str3?: " + answer7);
let answer8 = val === str3;
console.log("What is the value of: val === str3?: "+ answer8);
let answer9;
console.log("What is the value of: !isAwake: " + answer9);
let answer10;
console.log("What is the value of: ('eleven' == str4 && val >= str3)?: "+ answer10);
let answer11;
console.log("What is the value of: (!isAwake || isAwake): "+ answer11);
let answer12;
console.log("What is the value of: 0 == false?: "+ answer12);
let answer13;
console.log("What is the value of: 0 === false?: "+ answer13);
let answer14;
console.log("What is the value of: 0 != false?: "+ answer14);
let answer15;
console.log("What is the value of: 0 !== false?: "+ answer15);