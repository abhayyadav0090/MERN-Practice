/*
Author: Abhay Yadav
Topic: Scope, Closures and HOF in JavaScript
Date: Tuesday, 20 October, 2026
Completion Date: 20 October, 2026
*/

// In this lecture we will understand the concept of Scope, closures and HOF in JavaScript

// Global Scope  -> Variable declared outside every bracket or function -> Anyone can access it
// Functional Scope -> Variable declared inside a function -> Can be accessed only inside (to) that function
// Block Level Scope -> Can be accessed only to (inside) that block

// var a = 10; {var keyword respects boundary of functional scope but did not accept the boundary of block scope}
// can't be accessed outside function, but can be outside block; let and const follow all scopes

let a = 10;              // global Variable
const b = 20;            // global variable

if(true){
    console.log(20);    // 20
    let d = 30;
}

function greet1(){
    console.log(a);     // 10
    let c = 30;          // functional scope
}
// console.log(c);             // Error
greet1();                 
// two greet functions -> this greet is also calling lower greet function -> placed brackets;
// after brackets lower greet also calling upper greet() function -> changing function names;


let global = 30;
function greet(){
    let global = 40;

    function meet(){
        console.log(global);
    }

    meet();
}
greet();                          // 40 -> but we comment out the global variable inside the greet function then -> 30 

{
    function createCounter(){

        function increment(){
            console.log("I am Increment function.");
        }

        increment();
    }
    createCounter();                // I am Increment function.
}

{
    function createCounter(){

        function increment(){
            console.log("I am Increment function.");
        }

        return increment;
    }
    const count = createCounter();
    console.log(count);                // [Function: increment]   -> got the reference of the function now i can call the function.
}

{
    function createCounter(){

        function increment(){
            console.log("I am Increment function.");
        }

        return increment;
    }
    const count = createCounter();
    count();                             // I am Increment function.
    // that maeans -> If i have the reference of a function i can directly call the function by reference.
}

{
    function createCounter(){

        let count = 0;
        function increment(){
            count++;
            return count;
        }

        return increment;

    }
    // console.log(count);               // count is not defined
    const counter = createCounter();
    console.log(counter());              // 1
    console.log(counter());              // 2
    console.log(counter());              // 3
    console.log(counter());              // 4
    // count was under createCounter function, so after the function is successfully executed all the memory is destroyed (including count)
    // and counter has reference of increment, so how it is printing value of count.
    // the outer function knows this that after execution count will be destroyed with me but count is needed by the inner function.
    // so it allocates memory for count in heap as an context object. And increment got reference to count.
    // and garbage collector is deleting the memory, it checks for if anything is pointing to that memory object, and do not delete it.
    // this is all happening due to closure. This is not a bug.
}

//let balance = 500;
// balance+="Rohit";                       // mistake by developer
// console.log(balance);                  // 500Rohit
// balance-="Rohit";                       // mistake by developer
// console.log(balance);                  // NaN
// this mistake took place because the developer has the direct access to code -> because the bank side has huge amount of code (thousands of lines)

let user={
    balance: 500,
    deposit: function(amount){
        // console.log(this);               // this refer to the present user; -> when you call deposit function -> user.deposit(200); -> { balance: 500, deposit: [Function: deposit] }
        if(typeof amount=="number" && amount>0){
            this.balance+=amount;
            return this.balance;
        }
    },                                      // ⭐ -> that comma(,) <- mistake(error)
    withdraw: function(amount){
        if(typeof amount=="number" && amount>0 && this.balance>=amount){
            this.balance-=amount;
            return this.balance;
        }
    },
    getBalance: function(amount){
        return this.balance;
    }
}

// user.deposit(200);                          // { balance: 500, deposit: [Function: deposit] } if {console.log(this)}
console.log(user.deposit(200));                // 700
console.log(user.deposit("200"));              // undefined

// Still the developer has code access or access to change the balance, although you can't deposit or withdraw the invalid datatype but can change the data
user.balance = "Abhay";
console.log(user.getBalance());                // Abhay  -> again string as a balance