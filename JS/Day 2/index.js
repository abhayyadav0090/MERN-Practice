// variable ko kaise banate hain
// var, let, const

let name = "Abhay";
let age = 18;
age = 19;

console.log(name, age);

const pi = 3.14;
console.log(pi);

const acc = 1234567890;
console.log(acc);

// acc = 1234567891; // error
// const value ko change nahi kar sakte hain

var city = "Delhi";
city = "Mumbai";
var city = "Kolkata";
console.log(city);

var imp1 = "⭐ var ko redeclare aur reassign dono kar sakte hain";
let imp2 = "⭐ let ko reassign kar sakte hain but redeclare nahi kar sakte hain";
const imp3 = "⭐ const ko redeclare aur reassign dono nahi kar sakte hain";

let country;
const continent= "none";
if (true) {
    var city = "Chennai";
    let country = "India";
    const continent = "Asia";
}   
console.log(city, country, continent);
// city print hoga but country aur continent error denge
// var function scope hota hai, let aur const block scope hote hain


// Data types in JavaScript
// 1. Primitive data types: number, string, boolean, null, undefined, symbol, bigint. (javascript me 7 primitive data types hote hain.)

// number
let num1 = 10;
let num2 = 3.14;
console.log(num1, num2);
let a=10;
console.log(a);
console.log(typeof a); // number

// string
let str1 = "Hello";
let str2 = 'World';
console.log(str1, str2);

// boolean
let isTrue = true;
let isFalse = false;
console.log(isTrue, isFalse);
console.log(typeof isTrue); // boolean

// undefined
let undef;
console.log(undef);

let imp4 = "⭐ undefined ka matlab hota hai ki variable ko declare to kar diya gaya hai but usko koi value assign nahi ki gayi hai";
let imp5= "⭐ const undef; // error, const variable ko declare karte waqt initialize karna padta hai";

// null
let n = null;
console.log(n);
console.log(typeof n); // object
console.log("bug: typeof null returns object, but it should return null. This is a known bug in JavaScript that has been around since the beginning. The reason for this is that in the original implementation of JavaScript, values were represented as a type tag and a value. The type tag for objects was 0, and null was represented as a null pointer, which also had a type tag of 0. Therefore, when you check the type of null, it returns object.");

let imp10 = "⭐ null ka matlab hota hai ki variable ko explicitly empty value assign ki gayi hai, jabki undefined ka matlab hota hai ki variable ko declare to kar diya gaya hai but usko koi value assign nahi ki gayi hai.";

// symbol
let sym1 = Symbol("sym");
let sym2 = Symbol("sym");
console.log(sym1, sym2);
console.log(sym1 == sym2); // false

let imp6 = "⭐ symbol unique hote hain, chahe unka description same ho";
let imp7 = "⭐ why false? because symbol is a primitive data type that represents a unique identifier. When you create two symbols with the same description, they are still different and unique. Therefore, sym1 and sym2 are not equal, resulting in false.";

// bigint
let bigInt1 = BigInt("123456789012345678901234567890");
let bigInt2 = 123456789012345678901234567890n;
console.log(bigInt1, bigInt2);

let imp8 = "⭐ BigInt can be used by appending 'n' to the end of an integer literal or by calling the BigInt() constructor function.";
let imp9 = "⭐ bigint is a built-in object that provides a way to represent whole numbers larger than 2^53 - 1, which is the largest number JavaScript can reliably represent with the Number primitive type. BigInt can be created by appending 'n' to the end of an integer literal or by calling the BigInt() constructor function.";

// 2. Non-primitive data types: object, array, function

//array
let arr = [1, 2, 3, 4, 5];
let arr2 = ["Hello", "World"];
let arr3 = [10, 20, 11 + 5, "Abhay", true];
console.log(arr);
console.log(arr2);
console.log(arr3);
console.log(typeof arr); // object
console.log("Note: In JavaScript, arrays are a type of object. They are used to store multiple values in a single variable and have special properties and methods that allow you to manipulate the data they contain. However, when you check the type of an array using typeof, it will return 'object' because arrays are implemented as objects in JavaScript.");

// object
let obj = {
    name: "Abhay",
    age: 18,
    city: "Delhi",
    account: 1234567890,
    category: "student",
};
console.log(obj);
console.log(typeof obj); // object

// function
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Abhay"));

function add(){
    console.log("Hello World");
}
add();

console.log("OR");

let s= function(){
    console.log("Hello World");
}
console.log(s);
 console.log("OR");
s();

console.log(typeof greet); // function


//non-primitive data types are mutable, which means that their values can be changed after they are created. When you assign an object or an array to a variable, you are actually assigning a reference to that object or array in memory. Therefore, if you change the value of the object or array through one variable, it will affect all variables that reference the same object or array.
let arr4 = [10, 20, 30, 40, 50];
arr4[0] = 100;
arr4.push(60);
console.log(arr4);

//object mutation
let obj1 = {
    name: "Abhay",
    age: 18,
};
console.log(obj1.age);
obj1.age = 19;
obj1.name = "Abhay Yadav";
console.log(obj1);

a = 10;
let b = a;
b = 20;
console.log(a,b);
// change in b doesn't cause any change in a.


let obj2 = obj1;
obj2.age = 20;
console.log(obj1.age, obj2.age);



console.log(imp1);
console.log(imp2);
console.log(imp3);
console.log(imp4);
console.log(imp5);
console.log(imp6);
console.log(imp7);
console.log(imp8);
console.log(imp9);
console.log(imp10);
console.log("⭐ Primitives are immutable, which means that their values cannot be changed once they are created. When you perform an operation on a primitive value, it creates a new value rather than modifying the original value. For example, when you concatenate two strings, it creates a new string rather than modifying the original strings. On the other hand, non-primitive data types like objects and arrays are mutable, which means that their values can be changed after they are created. When you modify an object or an array, it changes the original value rather than creating a new value.");


