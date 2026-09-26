/*
Author: Abhay Yadav
Topic: Objects in JavaScript
Date: Thursday, 13 August, 2026
Completion Date: 26 September, 2026
*/

// In Objects things are stored in Key Value Pair

{
    const user = {
        name: "Abhay Yadav",
        age: 19,
        emailId: "yadav@gmail.com",
        amount: 3400,
        // home address: Mainpuri                  // error -> You have to use it as string both while creating and accessing
        // "Home Address": "Mainpuri",             // Correct
    }

    // console.log(user.name);                     // Abhay Yadav
    console.log(user["name"]);                     // Abhay Yadav
    // console.log(user[name]);                    // Error

    console.log(user);                             // { name: 'Abhay Yadav', age: 19, emailId: 'yadav@gmail.com', amount: 3400 }
    console.log(typeof(user));                     // object
    // console.log(user.age);                      // 19
    // console.log(user.amount);                   // 3400

    // Update
    user.adhaar=1234;
    user.amount=5000;
    // console.log(user);                          // { name: 'Abhay Yadav', age: 19, emailId: 'yadav@gmail.com', amount: 5000, adhaar: 1234 }

    // delete                                               
    delete user.emailId;                                   
    // console.log(user);                          // { name: 'Abhay Yadav', age: 19, amount: 5000, adhaar: 1234 }

    // Adding and Accessing Multi Word data using String Format
    console.log(user["Home Address"]);             // Mainpuri -> Accessing  ⭐
    // console.log(user);                          //  { name: 'Abhay Yadav', age: 19, amount: 5000, adhaar: 1234, 'Home Address': 'Mainpuri' }
    user["Home Address"]="Mainpuri";               // Adding or Updating     ⭐
    delete user["Home Address"];                   // Deleting Data
    console.log(user);                             // { name: 'Abhay Yadav', age: 19, amount: 5000, adhaar: 1234 }

    // Creating a copy of user
    // ⭐ Objects are copied by Reference -> Change in user2 will be reflected in user;
    const user2=user;
    user2.age=90;
    console.log(user.age);                          // 90

    // ⭐ Accessing Data Inside Objects
    // console.log(Object.keys(user));              // [ 'name', 'age', 'amount', 'adhaar' ]
    // console.log(Object.values(user));            // [ 'Abhay Yadav', 90, 5000, 1234 ]
    // console.log(Object.entries(user));           // [ [ 'name', 'Abhay Yadav' ], [ 'age', 90 ], [ 'amount', 5000 ], [ 'adhaar', 1234 ] ]

    // ⭐ For in loop is not recommended, as it creates problems.
    // ⭐ For of loop can be used in place of For in loop.
    // for(let keys in user){
    //     console.log(keys, ":", user[keys]);         // name : Abhay Yadav age : 90 amount : 5000 adhaar : 1234
    //     // console.log(keys, ":", user.keys);       // Error -> undefined  -->> As No keys was named keys inside user ⭐
    // }
}

{
    const user = {
        name: "Abhay Yadav",
        age: 19,
        emailId: "yadav@gmail.com",
        amount: 3400,
    }

    // Method 1 ⭐
    // const name = user.name;
    // const age = user.age;
    // console.log(name, age);                         // Abhay Yadav 19

    // Method 2 ⭐
    const {name, age} = user;
    console.log(name, age);                            // Abhay Yadav 19

    const arr = [10, 20, 40, 90, 11];
    const [first, third, random] = arr;                // You can take any name for variable
    console.log(first, third, random);                 // 10 20 40

    // user.name="Vishnu";
    // console.log(user);                               // { name: 'Vishnu', age: 19, emailId: 'yadav@gmail.com', amount: 3400 }

    // ⭐ For of loop -> for array
    for(let keys of Object.keys(user)){
        console.log(keys);
    }
    for(let values of Object.values(user)){
        console.log(values);
    }
    for(let entries of Object.entries(user)){
        console.log(entries);
    }
    for(let [keys, values] of Object.entries(user)){       // ⭐
        console.log(keys, values);
    }
}

{
    const user = {
        name: "Abhay Yadav",
        age: 19,
        emailId: "yadav@gmail.com",
        amount: 3400,
        greeting: function() {
            console.log("Strike is coming on 18th october");
            return 20;
        }
    }

    const va = user.greeting();
    console.log(va);
}

{
    const user = {
        name: "Abhay Yadav",
        age: 19,
        emailId: "yadav@gmail.com",
        amount: 3400,
        greeting: function() {
            // console.log(`Strike is coming on 18th october.\nUserName = ${user.name}`); // Not Recommended
            console.log(`Strike is coming on 18th october.\nUserName = ${this.name}`);    // Recommended
            return 20;
        }
    }

    // this refers to the object which called the function -> It is directly accessed
    // user.name in place of this.user -> creates problem when more than one user calls the same function.
            
    const user2 = {
        name: "Mohan",
        account: 201,
    }

    user2.greeting=user.greeting;
    const va = user2.greeting();
    console.log(va);
    // UserName = Abhay Yadav -> if user.name used. ⭐
    // UserName = Mohan       -> if this.name used.
}

{
    // Nested Object

    const user = {
        name: "Abhay Yadav",
        age: 20,
        emailId: "yadav@gmail.com",
        address: {
            city: "Mainpuri",
            state: "Uttar Pradesh"
        }
    }

    console.log(user.address.city);

    // const user2 = user      -> they both refer to same object -> Changes in user2 are reflected in user also
    // rather we have to use spread operator.

    // Shallow Copy ⭐
    const user2 = {...user};
    user2.name = "Mohan";            // Change in name of user2 remained bounded in user2 only due to spread operator -> BUT
    // Spread operator has limitation to 1 level only -> can't correct nested objects.
    user2.address.city = "Dwarka";   // Change in city of user2 also changed in city of user.
    user2.address.city = "Mainpuri";

    // Deep Copy ⭐
    const user3 = structuredClone(user);
    user3.address.city = "Dwarka";   // Now the Nested objects were handled nicely.

    console.log(user.address.city, user2.address.city, user3.address.city);
}

{
    // You can numbers as KEY as in behind the scene the numbers will be stored in the form of Strings.
    const user = {
        name: "Abhay Yadav",
        age: 20,
        0: 100,
        2: "Mohan"
    }

    // console.log(user.0);            // It will throw an error.
    console.log(user[0]);              // 100 -> Correct
    console.log(user[1]);              // undefined
    console.log(user[2]);              // Mohan
}

{
    // Behind the scene of storing array
    const arr = [10, 20, 30, 40];
    // Arrays is stored in the form of objects like shown below
    const arr2 = {
        0:10,
        1:20,
        2:30,
        3:40
    }

    console.log(arr[0], arr2[0]);        // 10 10
    console.log(arr[1]+arr2[3]);         // 20 + 40 = 60
}

{
    // Keys jo hoti woh strings hi hoti hain lekin 2015 mein update jisme unhone kaha ham keys ko symbol ki tarah bhi treat kar sakte hain
    // keys : Strings || Symbols

    const sym = Symbol("id");
    const user = {
        name:"Abhay Yadav",
        age: 20,
        0: 100,           // Actually this 0 which is a key is stored in form of string "0"
        2: "Mohan",
        [sym]: "Hello Ji"      // if you don't apply brackets then the sym will be considered as string
    }

    console.log(user[sym]);     // Hello Ji
}

{   // ⭐⭐⭐
    // there was a problem in storing the elements in array in last lecture
    // we were storing all data of various datatype having diffrent sizes
    // we were unable to find the address or index of next element
    // if sizeofdata is fix then we can calculate address by -> BaseAddress+index*sizeofdata
    // So we will store everything in number format like numbers stored directly and for strings we will use
    // address of that string, so if the string changes in future, the size of blocks will not change means no variation in addressing
    // we will create new memory for modified string and save its address in the array -> Constant size 

    /*
        const user = {
            name:"Rohit",
            age:"20",
            amount:"1000",
            city:"Dwarka"
        }
            name, age, amount or city -> all keys are considered as string
            key: "name"       key: "age"     key: "amount"     key: "city"
            value: "Rohit"    value: "20"    value: "1000"     value: "Dwarka"
            // these key value pairs are stored in array
            // But if changes the name Rohit to Rohit Negi
            // then all elements to slide as the size of string increases
            // So the solution to this problem is to store the value of keys and values {Specifically strings}
            // in separate memory location and saving their addresses in the array
            
            // keys and values are stored by storing their addresses using Property pointer
            // And if you store a array then it is stored using Element pointer

            // const user = 5000 // user points to 5000
            // 5000 contains three pointers Map, Property, and Element
            // keys and values are stored at memory location 4000 and array is stored at 3000
            // then property pointer points to 4000 and Element pointer points to 3000
            // if the changes occur at keys, values or arrays -> it doesn't affect address of user
            // just address in map, property, element changes
            
            // as the user object or array will have constant size so it can be saved in stack now
            // Address of user is saved in Stack now, and the user wil be saved in Heap
            // and the data addresses will be saved in heap now
            // now even if the strings, values, keys change ->  the address will change but will be of same size (8 bytes)
            // No change in size of user
            
            // address of array is not directly stored in const user, it is saved inside element pointer

            // ⭐ That is why const in case of array does not give any error while changes occurs
    */
}