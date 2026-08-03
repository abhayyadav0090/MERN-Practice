// Arrays

// let marks1 = 100;
// let marks2 = 50;
// let marks3 = 70;
// let marks4 = 80;

let marks = [100, 50, 70, 80, 90];

console.log(marks);

console.log(marks[0]); // 100
console.log(marks.length); // 5

let arr = [100, 30, "Rohit", true, null, undefined, [1, 2, 3]];
console.log(typeof arr); // object
console.log(arr);
console.log(arr[2]); // Rohit
console.log(arr[6][1]); // 2

// Strings (Primitive datatype) are immutable but arrays (objects) can be changed

arr[1] = 45;
console.log(arr);

// You can use push function in array in Javascript but to do so in other programming language like in c++ (you have to use vector)
// push : Insert element at end;
// pop : Delete element from end;

arr.push(90);
arr.push("Strike");
console.log(arr);
arr.pop();
console.log(arr);

// Adding elements in start and deleting from starting.
// unshift : to add at index = 0;
// shift : to delete element present at index = 0;

arr.unshift(10);
arr.unshift(50);
console.log(arr);
arr.shift();
arr.shift();
console.log(arr);

// shifting method is not recommended as it perform shifting for all element and it hampers performance of program

let array = [10, 30, 50, 90, 11];

// 'for' loop
// for(let i=0; i<array.length; i++){
//     console.log(array[i]);
// }

// 'for of' loop
// for(let num of array){
//     console.log(num);
// }

// direct print
console.log(array);

let array2 = array; // copy by refernce
// any change in array2 will be reflected in array
array2.push(30);
console.log(array2);

// Primitive datatype-> Data copy
// Non-Primitive datatype-> Reference copy

let a = "Rohit";
let b = a;
b = "Mohit"; // it will not change a
console.log(`a=`+a+` & `+`b=`+b);
{
const arr2 =[10, 10, 12, 25];
// arr2=[12, 13];                  // can't modify constant datatype -> address change nhi hoga but you change elements of arr2
console.log(arr2);                // [10, 10, 12, 25]
arr2[2]=30;                      // [ 10, 10, 30, 25, 112 ]
arr2.push(112);                 // [ 10, 10, 30, 25, 112 ]
console.log(arr2);             //  [ 10, 10, 30, 25, 112 ]
console.log(arr2.slice(2,4)); // index 4 is not included -> start after 2 and ends at index 4
// slice() function doen't change the existing array. It remains same just another array gets created which is part of the first one.
// If you want to make changes in original array -> splice function is used to trim array
// we provide starting index and number of element to trim -> As given in below example
console.log(arr2); // Array after slice function
console.log(arr2.splice(2,2)); // two elements 30 qnd 25 got trimmed from array
console.log(arr2); // remaining three elements got printed -> Array after splice function

//arr2.push(30, 12, 14);
console.log(array);                 // original array                    -> [ 10, 30, 50, 90, 11, 30 ]
const arr3=array.splice(2,2,"Rohit",19);  // arr3 will contain trimmed array   -> [ 50, 90 ]
console.log(array);                 // array after insertion of elements -> [ 10, 30, 'Rohit', 19, 11, 30 ]
console.log(arr3);}

{
const arr =  [10,30,50,90,11];
const arr2 = ["Rohit",11,true];
const arr4 = [90,4,false];
// console.log(arr4);
// arr.push(arr2);                     // [ 10, 30, 50, 90, 11, [ 'Rohit', 11, true ] ]
// const arr3=arr.concat(arr2);        // [ 10, 30, 50, 90, 11, 'Rohit', 11, true ]
// const arr3=arr.concat(arr2,arr4);   // [ 10, 30, 50, 90, 11, 'Rohit', 11, true, 90, 4, false ]
// const arr3 = [arr, arr2, arr4];     // [ [ 10, 30, 50, 90, 11 ], [ 'Rohit', 11, true ], [ 90, 4, false ] ]
// Spread Operator
const arr3=[...arr,...arr2,...arr4]    // [ 10, 30, 50, 90, 11, 'Rohit', 11, true, 90, 4, false ]
console.log(arr3);}

{
const names = ["Alice", "Bob", "Charlie", "Bob"]
// console.log(names.toString())           // Alice,Bob,Charlie
// console.log(typeof names.toString());   // string
// console.log(typeof names.toString);     // function
// console.log(typeof names);              // object
// console.log(typeof names.join(" "));    // string
console.log(names.join(" "));              // Alice Bob Charlie
console.log(names.join("-"));              // Alice-Bob-Charlie
console.log(names.indexOf("Bob"));         //  1
console.log(names.indexOf("Bobs"));        // -1
console.log(names.lastIndexOf("Bob"));     //  3
console.log(names.includes("Bob"));        // true
console.log(names.includes("Bobs"));       // false
}

// Sorting 
{
const names = ["Alice", "alice", "Rohit", "Bob", "Mohit", "Charlie"];
console.log(names);                        // [ 'Alice', 'alice', 'Rohit', 'Bob', 'Mohit', 'Charlie' ]
names.sort();
console.log(names);                        // [ 'Alice', 'Bob', 'Charlie', 'Mohit', 'Rohit', 'alice' ]
// ASCII table -> A comes before a -> 'a'=97, 'R'=82;
}

// Reverse Printing
{
const names = ["Alice", "alice", "Rohit", "Bob", "Mohit", "Charlie"];
console.log(names);                       // [ 'Alice', 'alice', 'Rohit', 'Bob', 'Mohit', 'Charlie' ]
names.reverse();
console.log(names);                       // [ 'Charlie', 'Mohit', 'Bob', 'Rohit', 'alice', 'Alice' ]
}

// Reverse Sorting
{
const names = ["Alice", "alice", "Rohit", "Bob", "Mohit", "Charlie"];
console.log(names);                        // [ 'Alice', 'alice', 'Rohit', 'Bob', 'Mohit', 'Charlie' ]
names.sort();
names.reverse();
console.log(names);                        // [ 'alice', 'Rohit', 'Mohit', 'Charlie', 'Bob', 'Alice' ]
}

{
const a = [101, 90, 80, 32, 91];           // sees 101 as "101", 90 as "90", 80 as "80", 32 as "32", and so on;
a.sort();
console.log(a);                            // [ 101, 32, 80, 90, 91 ]
const a2 = ["101", "90", "80", "32", "91"];           // sees 101 as "101", 90 as "90", 80 as "80", 32 as "32", and so on;
a2.sort();
console.log(a2);                            // [ '101', '32', '80', '90', '91' ]
const arr=[10, "Rohit", "Mohan", true];
arr.sort();
console.log(arr);                           // [ 10, 'Mohan', 'Rohit', true ]

const array=[10, 40, 31, 71, 5, 11];
array.sort((a,b)=>a-b);
console.log(array);                         // [ 5, 10, 11, 31, 40, 71 ]
}