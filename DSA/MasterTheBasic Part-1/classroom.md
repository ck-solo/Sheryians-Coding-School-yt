Session 1
Q. sum of two integers ✅
Q. Relation between strings and integers✅
Q. sum and messages 

- type coercion✅
In JavaScript, type coercion occurs automatically. The + operator performs string concatenation if any operand is a string, while other arithmetic operators (- * / %) always convert operands to numbers and perform numeric operations.

console.log(1 + "1"); // 11
console.log(1 + 1); // 2
console.log(5 - 3 ); // 2
console.log(5 \* 3); // 15
console.log(5 / 3); // 1.6666666666666667
console.log(5 % 3); // 2



Q. Accept and print the answer✅


Q. Swap two varible via 3 method ✅
// First method
This method swaps two variables by storing the value of one variable in a temporary variable and then assigning the values accordingly.
let a = 10 ;
let b = 20;
let c = a;
a = b;
b = c;
console.log(a,b);

//second method
This method swaps the values of two variables using destructuring assignment without using any temporary variable. let d = 4 ;
 let e = 5;
[d,e] = [e,d];
console.log(d,e);

//third method
This method swaps the values of two variables using arithmetic operations (addition and subtraction) without using an extra variable.let f = 10;
let g = 20;

f = f + g ; // 10 + 20 = 30
g = f - g ; // 30 - 20 = 10
f = f - g ; // 30 - 10 = 20

console.log(f,g);


Q. arthmetic operation ✅
modulus (%) is the remainder operator. It returns the remainder of the division of two numbers.
console.log(5 % 3); // 2

division (/) is the division operator. It returns the quotient of the division of two numbers.
console.log(5 / 3); // 1.6666666666666667

Q. logic operation ✅
The && operator returns true if both operands are true.
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
The || operator returns true if either operand is true.
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false   

Q. Urinary operator ✅

The increment operator (++) increments the value of a variable by 1.
post increment
let a = 10;
a++; // 11
console.log(a);

pre increment
let b = 10;
++b; // 11
console.log(b);

The decrement operator (--) decrements the value of a variable by 1.
let b = 10;
b--; // 9   
console.log(b);

