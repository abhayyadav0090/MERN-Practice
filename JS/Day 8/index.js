/*
Author: Abhay Yadav
Topic: Objects in JavaScript
Date: Thursday, 13 August, 2026 
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