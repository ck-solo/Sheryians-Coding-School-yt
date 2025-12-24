// Q1. Write a program that takes two integers as input and print their sum.
 
function sum(a,b){
    return a + b

}

// Q2. Relation between strings and integers 
/*
String + String = String (concatenation)
String + Integer = String (concatenation)
Integer + String = String (concatenation)
Integer + Integer = Integer (arthmetic operation)
*/


// Q3. sum and messages - type coercion

console.log(1 + "1"); // 11
console.log(1 + 1); // 2
console.log(5 - 3 ); // 2
console.log(5 * 3); // 15
console.log(5 / 3); // 1.6666666666666667
console.log(5 % 3); // 2

// Q4. Accept and print the answer

// let answer = prompt("Enter your answer");
// console.log(answer);

// Q5. Swap two varible via 3 method
// First method
let a = 10 ;
let b = 20;
let c = a;
a = b;
b = c;
console.log(a,b);

//second method
 let d = 4 ;
 let e = 5;
[d,e] = [e,d];
console.log(d,e);

//third method
let f = 10;
let g = 20;

f = f + g ; // 10 + 20 = 30
g = f - g ; // 30 - 20 = 10
f = f - g ; // 30 - 10 = 20

console.log(f,g);


// Q. increment and decrement 
let num = 10;
num++; // 11
console.log(num++ + num); // 23

let num1 = 10;
++num1; // 11
console.log(num1 + num1); // 22

let dec = 20;
dec--; // 19   
console.log(dec - dec--); // 19 - 19 = 0



// Question 
// Q1.  Calculate the area and paramter of rectangle

let length = 10;
let width = 20;
area = length * width;
console.log(area);

perimeter = 2 * (length + width);
console.log(perimeter);
