// // Numbers
// let a = 10;
// let b = 345.6821;
// c = b.toFixed(1);
// console.log(a, typeof(a));
// console.log(b.toFixed());  // 346
// console.log(b.toFixed(1)); // 345.7
// console.log(b, typeof(b));
// console.log(c, typeof(c));
// console.log(b.toPrecision(5));  // 345.68
// console.log(b.toPrecision(6));  // 345.682
// console.log(b.toPrecision(7));  // 345.6821


// let a = new Number(20);
// let b = new Number(20);
// console.log(a); // [Number: 20]   type-->Object
// console.log(typeof a); // object
// console.log(a == b); // false


// let obj1 = {
//     name:"Abhay"
// }
// // let obj2 = {
// //     name:"Abhay"
// // }
// // console.log(obj1 == obj2); // false
// let obj2 = obj1;
// console.log(obj1 == obj2);  // true

// console.log(Boolean(10)); // true
// console.log(Boolean(new Number(10)));  // true

// // Primitive : copy by value or Compared by the Value.        // Same data or value.
// // Non-Primitive : Compared by reference or address basis.    // Same address.


// // Use of Math functions

// console.log(Math.abs(-4)); // 4
// console.log(Math.LN10); // 2.302585092994046
// console.log(Math.LN2); // 0.6931471805599453
// console.log(Math.SQRT1_2); // 0.7071067811865476
// console.log(Math.SQRT2); // 1.4142135623730951
// console.log(Math.PI); // 3.141592653589793
// console.log(Math.acosh(2)); // 1.3169578969248166
// console.log(Math.E); // 2.718281828459045
// console.log(Math.acos(1)); // 0
// console.log(Math.tan(45)); // 1.6197751905438615
// console.log(Math.ceil(6.3)); // 7 --> nearest upper integer
// console.log(Math.floor(6.3)); // 6 --> nearest lower integer
// console.log(Math.log10(20));     // 1.3010299956639813
// console.log(Math.max(10,45,85,2,3,9,68,96)); // 96
// console.log(Math.min(12,89,4,556,78,56,42)); // 4
// console.log(Math.random()); // generates a random value in the range of --> [0,1) : where 0 is included but not 1.
// // used in betting games

// // ⭐ ⭐ ⭐ To generate a random number between 0 and 9 --> 10 outcomes
// console.log(Math.floor(Math.random()*10));
// // ⭐ ⭐ ⭐ To generate a random number between 1 and 10 --> 10 outcomes
// console.log(Math.floor(Math.random()*10)+1);
// // ⭐ ⭐ ⭐ To generate a random number between 1 and 6 --> 6 outcomes
// console.log(Math.ceil(Math.random()*6)); // OR console.log(Math.floor(Math.random()*6)+1);
// // ⭐ ⭐ ⭐ Math.floor(Math.random()*totalNumberOfOutcomes)+shift
// // ⭐ ⭐ ⭐ ⭐ ⭐ FORMULA --->> console.log(Math.floor(Math.random()*(max-min+1))+min); <<--- ⭐ ⭐ ⭐ ⭐ ⭐

// // Generate random numbers between 15-25 --> [15,25]
// console.log(Math.floor(Math.random()*11)+15);

// // 4 Digit OTP generation --> [1000,9999]
// console.log(Math.floor(Math.random()*(9999-1000+1))+1000);