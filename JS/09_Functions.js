/*
Author: Abhay Yadav
Topic: Functions in JavaScript
Date: Saturday, 26 September, 2026
Completion Date: 26 September, 2026
*/

// In this lecture we will know how to create function in JavaScript

{
    // First type of function declaration
    // in this type we can call function before initialising it or declaring it

    console.log(greeting); // [Function: greeting] -> Prints the name with its property that it is a function
    // console.log(greeting()); // calls function perform task then return the value // Hello Coder Army \n undefined
    // console.log("greeting")  // greeting -> it is a string
    greeting();            // Hello Coder Army

    function greeting(){
        console.log("Hello Coder Army");
    }

    greeting();
    console.log(greeting());        // prints (or performs the task) then undefined -> as the function is not returning anything

    function addNumber(num1, num2){ // here num1 and num2 are parameters
        const sum = num1 + num2;
        console.log(sum);
    }
    
    // Example: 
    let num1 = 5, num2 = 7;
    addNumber(num1, num2);          // here num1 and num2 are arguments

    addNumber(6, 7, 8);             // returns 13 as two arguments are taken and third was omitted 
    // ^-<- in case number of parameters < number of arguments
    // \/-<- but if number of parameters > number of arguments
    addNumber(2) // Then it gives output NaN 

    // ⭐ For that you can initialise the parameters in function with Zero

    {
        function Add(num1=0, num2=0, num3=0, num4=0){
            const sum = num1+num2+num3+num4;
            console.log(sum);
        }
        Add(2, 3, 4, 5, 6);         // 14
        Add(2, 3);                  // 5
    }

    // Suppose we want to pass more arguments we will not passing so much number of parameters
    // So we rest operator
    // it makes an array out of the passed elements
    function Addition(...num){
        // console.log(num);        // prints the array num constructed by passed arguments
        let sum = 0;
        for(let n of num) sum+=n;
        console.log(sum);
    }
    // Addition(1, 2, 3, 4)         // [ 1, 2, 3, 4 ]
    // Addition(1, 2, 5, 8, 3, 4, 6, 7, 9, 10, 2, 11, 12); // [ 1, 2, 5,  8, 3,  4, 6, 7, 9, 10, 2, 11, 12 ]
    Addition(1, 2, 3, 4);           // 10 -> Sum of passed arguments
    Addition(1, 2, 5, 8, 3, 4, 6, 7, 9, 10, 2, 11, 12);  // 80 -> Sum of passed arguments
}

{
    // ⭐ Difference between rest operator and spread operator
    const arr = [10, 20, 30, 40, 50];
    const arr2 = [30, 70, 90, 10];
    // destructuring
    const [first, second] = arr;
    console.log(first, second);     // 10 20
    // if you want to catch all the other values of arr also -> then you can use rest operator
    const [phirst, secondth, ...num] = arr
    console.log(phirst, secondth, num); // 10 20 [ 30, 40, 50 ]

    // Whereas, We use spread operator where we want to open an array -> means to make a single array from two arrays
    const ans1 = [arr, arr2];
    console.log(ans1);              // [ [ 10, 20, 30, 40, 50 ], [ 30, 70, 90, 10 ] ]
    const ans2 = [...arr, ...arr2];
    console.log(ans2);              // [ 10, 20, 30, 40, 50, 30, 70, 90, 10 ]
}

{
    // Function ko create karne ke do hi tareeke hain kyuki sabko pata chal sake ki CSK do saal ke liye ban hui thi
    // first what we have already used // function Add(num1, num2){ };
    // second one is the in the form of expression
    // function: expression -> stored in a variable -> if we can to call it, we will call it through that variable
    // ⭐ there is difference that we can not call the function before initialisation
    // console.log(addNumber(3, 4));    // ReferenceError: Cannot access 'addNumber' before initialization
    const addNumber = function(num1, num2){
        return num1+num2;
    }
    console.log(addNumber(3, 4));   // 7
}

{
    // ⭐ And the best part is that we actually have two more ways to define a function
    // Arrow Function
    // general functions -> function(){} but in arrow function -> ()=>{}
    const greeting = ()=>{
        console.log("Hello AbhayJi");
    }
    greeting();                     // Hello AbhayJi

    {const addNumber = (num1, num2)=>{
        let sum = num1 + num2;
        console.log(sum);
    }
    addNumber(2, 9);                /* 11 */
    console.log(addNumber(1, addNumber(2, addNumber(5, 9))));   /* 14 NaN NaN undefined */}

    {const addNumber = (num1, num2)=>{
        return num1+num2;
    }
    console.log(addNumber(2, 9));   /* 11 */
    console.log(addNumber(1, addNumber(2, addNumber(5, 9))));   /* 17 */}
    
    // And ⭐ Even you need to put brackets as there is only one statement and above that return keyword is also not needed
    const addNumber = (num1, num2)=> num1+num2;
    console.log(addNumber(2, 50));   // 523


}