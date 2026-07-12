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
for(let i=0; i<array.length; i++){
    console.log(array[i]);
}

// for of loop

for(let num of array){
    console.log(num);
}