/*
Author: Abhay Yadav
Topic: Functions in JavaScript
Date: Saturday, 17 October, 2026
Completion Date: 19 October, 2026
*/

// In this lecture we will know how JavaScript Code Runs ??

/*
    JS code runs in two phases
    1. Memory allocation
    2. Execution Phase
*/

/*
    Execution Context
    Memory Allocation
    a = undefined
    b = undefined
    addNumber = function code (actual code present)
    sumResult1 = undefined
    sumResult2 = undefined

    Execution Phase (Again reads the code)
    a = 10
    b = 20
    function code will run
    and further Execution Contexts will be created
*/
/*
    console.log(a)    // undefined
    printing variable before defining gives undefined but this is not the case with the function
    why ??  ->> Function code is actually present there so whanever you call the function 
    that will point to a memory address where the actual code is stored end that will give output
    that is not the case with variable because initially variable points to the undefined
*/

{
    var a = 10;
    var b = 20;

    // console.log(a)    // 10

    function addNumber(num1, num2){
        var sum = num1 + num2;
        return sum;
    }

    var sumResult1 = addNumber(a, b);
    var sumResult2 = addNumber(4, 5);
    console.log(sumResult1, sumResult2);
}

{
    /*
        in the case of var and const
        Memory Allocation Phase
        a = <uninitialised> (Temporal dead zone)
        b = <uninitialised> (Temporal dead zone)
        You can not access it until you put some value in it
        addnumber = <uninitialised> (Temporal dead zone)  -->> Here addNumber will not contain function code.⭐
        result = <uninitialised> (Temporal dead zone)

        Execution Phase
        console.log(a) still the values are not allocated so, TDZ error!!
        same for const ->> console.log(b);
        a = 10;
        b = 20;
        addnumber = function Code 
        result = run the function code, get the values of a and b, and finally stores 30
        result = 30
        next print statement will print the result

        console.log(a) statement after allocation    // then -> 10
        same for const ->> console.log(b);
    */

    /*
        ⭐Unlinke the function in var, here in const
        if you want const result = addNumber(a,b) before defining the function will give you the error,
        but in var, we were getting the correct result
        because at the execution phase when result will call the addNumber
        result statement is above the function, so function still has uninitialised TDZ so the result will give the error
    */

    // console.log(a);        // Error -->> Cannot access 'a' before initialization
    let a = 10;
    const b = 20;

    const addNumber = function(num1, num2){
        const sum = num1+num2;
        return sum;
    }

    const result = addNumber(a, b);
    console.log(result);

    // console.log(a);           // 10
    // console.log(b);           // 20
}