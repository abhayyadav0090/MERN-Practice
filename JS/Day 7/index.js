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
console.log(arr2.splice(2,2)); // two elements 30 qnd 25 got trimmed from array
console.log(arr2); // remaining three elements got printed
