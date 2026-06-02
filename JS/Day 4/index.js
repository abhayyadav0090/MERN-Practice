// // Operators

// // Arithmetic Operators

// console.log(2+5);
// console.log(2-5);
// console.log(2*5);
// console.log(6/2);
// console.log(5%2);  //Modulo Operator---> gives the remainder of the division
// console.log(2**3); //Exponentiation---> 2 to the power of 3 OR 2*2*2
// console.log(2**4); //2 to the power of 4 OR 2*2*2*2
// console.log(5**2); //5 to the power of 2 OR 5*5

// // Assignment Operators

// let x = 10; //Assignment operator
// let y = 20;
// x = x + y; //x = 10 + 20 ---> x = 30
// console.log(x);
// x = x - y; //x = 30 - 20 ---> x = 10
// console.log(x);
// x = x * y; //x = 10 * 20 ---> x = 200
// console.log(x);
// x = x / y; //x = 200 / 20 ---> x = 10
// console.log(x);
// x = x % y; //x = 10 % 20 ---> x = 10 (because 10 is less than 20, so the remainder is 10)
// console.log(x);
// x = x ** 2; //x = 10 ** 2 ---> x = 100 (because 10 to the power of 2 is 100)
// console.log(x);

// // Comparison Operators

// let x = 10;
// let y = 20;
// console.log(x == y); //false
// console.log(x != y); //true
// console.log(x < y); //true
// console.log(x > y); //false
// console.log(x <= y); //true
// console.log(x >= y); //false

// let x = 20;
// let y = "20";
// console.log(x == y); //true (because == does type coercion, it converts the string "20" to the number 20 before comparing)
// console.log(x === y); //false
// // difference between == and === is that == checks for value equality, while === checks for both value and type equality


// // String to Number conversion

// let z="10";
// console.log(z, typeof z); //10 'string'
// let x=Number(z);
// console.log(x, typeof x); //10 'number'

// let a = "121aC";
// console.log(a, typeof a); //121aC string
// let b = Number(a);
// console.log(b, typeof b); //NaN number (because "121aC" cannot be converted to a valid number)

// // NaN stands for "Not a Number". It is a special value in JavaScript that represents an invalid number. When you try to convert a non-numeric string to a number, it results in NaN.

// // Number to String conversion

// let a = 10;
// let b = String(a);
// console.log(b, typeof b); //10 'string'

// // Booleam to number conversion
// console.log("BOOLEAN TO NUMBER CONVERSION");
// console.log(Number(true)); //1
// console.log(Number(false)); //0
// console.log(Number("Null")); //NaN (because "Null" cannot be converted to a valid number)
// console.log(Number(null)); //0 (because null is considered as 0 in number conversion)
// console.log(Number(undefined)); //NaN (because undefined cannot be converted to a valid number)

// let a = true;
// let b = String(a);
// console.log(a, b, typeof b);

// let a = null;
// let b = String(a);
// console.log(a, b, typeof b);

// let a = undefined;
// let b = String(a);
// console.log(a, b, typeof b);

// // Boolean Conversion
// console.log(Boolean(0)); // false
// console.log(Boolean(1)); // true
// console.log(Boolean(2)); // true
// console.log(Boolean(10)); // true
// console.log(Boolean("Hello World!")); // true
// console.log(Boolean("")); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(null)); // false

// // Computer Science Challenge
// let a = 0.1;
// let b = 0.2;
// let c = a+b;
// console.log(c==0.3); //False
// console.log(c);

// // Solution to the above problem
// let a = 0.1;
// let b = 0.2;
// let c = a+b;
// console.log(c.toFixed(1) == 0.3); //True (toFixed() method converts the number to a string with the specified number of decimal places, so we need to convert it back to a number before comparing)
// console.log(Number(c.toFixed(1)) == 0.3); //True

// // Rules:

// // 1: null is loosely equal to undefined only

// console.log(null == undefined); // true
// console.log(null === undefined); // false
// console.log(null == 0); // false
// console.log(null == ""); // false
// console.log(null == false); // false
// console.log(null == true); // false

// // 2: >, <, >=, <= {If these operators are present then null is converted into number} {null --> number(0)} {undefined --> number(NaN)}

// console.log(null >= 0); // true
// console.log(null <= 0); // true
// console.log(null == 0); // false
// console.log(null < 0); // false
// console.log(null > 0); // false
// console.log(null >= undefined); // false {0 != NaN}

// console.log(undefined >=0 ); // false
// console.log(undefined >= NaN); // false
// console.log(undefined <= NaN); // false
// console.log(undefined == NaN); // false
// console.log(undefined > NaN); // false
// console.log(undefined < NaN); // false

// console.log("Rohit" > "Mohit"); // true {R=82 > M=77}
// console.log("Rohit" > "mohit"); // false {R=82 < m=109}
// console.log("Rohit">"Rahit"); // true {o > a}
// console.log(10 > "10"); // false {10 = 10}
// console.log(10 >= "10"); // true {10 = 10}
// console.log(10 > true); // true {10 > 1}
// console.log(10 < true); // false {10 > 1}

// // If one type is present and we have to compare it with other
// // First of all, they should be at common level (same ground)
// // They will be converted into number type automatically.

// console.log(null >= ""); // true {0 = 0}
// console.log(NaN == NaN); // false


// // How loop works
// // post increment : i++
// // post decrement : i--

// // for loop

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// // while loop

// let i = 0;
// while(i < 10){
//     console.log(i);
//     i++;
// }

// // do while loop

// let i = 0;
// do {
//     console.log(i);
//     i++;
// } 
// while (i<10);


// // If Else Condition

// let age = 25
// if (age >= 18) {
//     console.log("Eligible for vote")
// } else {
//     console.log("Not eligible for vote")    
// }

// // Tell if Kid, Young OR Old

// let age = 20;
// if (age < 18) {
//     console.log("Kid");
// }
// else if (age > 60){
//     console.log("Old");
// }
// else {
//     console.log("Young");
// }


// // Logical Operators

// // Logical AND (&&)

// console.log(true && true); // true
// console.log(true && false); //false
// console.log(false && true); //false
// console.log(false && false); //false

// let a = "Rohit";
// let b = "Mohit";
// let c = a && b; //Mohit (because a is truthy, so it returns the value of b)
// console.log(c);

// let a = "";
// let b = "Mohit";
// let c = a && b; // "" (because a is falsy, so it returns the value of a)
// console.log(c);

// // a = 0; b = 20; c = a && b; //0 (because a is false, so it returns the value of a)
// // a =10; b = 20; c = a && b; //20 (because a is true, so it returns the value of b)
// // In AND operator, if the first value is falsy, it returns the first value itself.
// // If the first value is truthy, it returns the second value.

// // Logical OR (||)

// console.log(true || true); // true
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(false || false); // false

// let a = 10;
// let b = 20;
// let c= a || b;
// console.log(c); //10 (because a is truthy, so it returns the value of a)

// let a = 0;
// let b = 20;
// let c= a || b;
// console.log(c); //20 (because a is falsy, so it returns the value of b)

// // a = 0; b = 20; c = a || b; //20 (because a is false, so it returns the value of b)
// // a =10; b = 20; c = a || b; //10 (because a is true, so it returns the value of a)
// // In OR operator, if the first value is truthy, it returns the first value itself.
// // If the first value is falsy, it returns the second value.

// // NOT (!) Operator

// console.log(!true); // false
// console.log(4 != 5); // true

// // AND (&) and OR (|) bitwise operators

// console.log(2 & 3); // 2 (because 2 in binary is 10 and 3 in binary is 11, so the result is 10 which is 2 in decimal)
// console.log(2 & 5); // 0 (because 2 in binary is 10 and 5 in binary is 101, so the result is 000 which is 0 in decimal)
// console.log(5 & 3); // 1 (because 5 in binary is 101 and 3 in binary is 011, so the result is 001 which is 1 in decimal)

// console.log(2 | 3); // 3 (because 2 in binary is 10 and 3 in binary is 11, so the result is 11 which is 3 in decimal)
// console.log(2 | 5); // 7 (because 2 in binary is 10 and 5 in binary is 101, so the result is 111 which is 7 in decimal)
// console.log(5 | 3); // 7 (because 5 in binary is 101 and 3 in binary is 011, so the result is 111 which is 7 in decimal)