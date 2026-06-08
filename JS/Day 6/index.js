// // String
// const str1 = "Rohit";       // in double inveted commas--> everything should be written in one line
// const str2 = 'Rohit Negi';  // in single inveted commas--> same like double
// const day = 18;
// const str3 = `Strike Is Coming on ${day}`; // you can write as you want to print.
// console.log(str1,str2,str3);

// const str4 = `Hello Coder Army`;
// str4[2] = "S"; // not possible as Strings are immutable
// console.log(str4.length); // 16 --> 0 to 15
// console.log(str4[0]);  // H
// console.log(str4[1]);  // e
// console.log(str4[2]);  // l
// console.log(str4[3]);  // l
// console.log(str4[4]);  // o
// console.log(str4[5]);  // 
// console.log(str4[6]);  // C
// console.log(str4[7]);  // o
// console.log(str4[8]);  // d
// console.log(str4[9]);  // e
// console.log(str4[10]); // r
// console.log(str4[11]); // 
// console.log(str4[12]); // A
// console.log(str4[13]); // r
// console.log(str4[14]); // m
// console.log(str4[15]); // y

// // Upper case
// console.log(str4.toUpperCase());

// // Lower case
// console.log(str4.toLowerCase());

// const a = str4.toUpperCase();
// const b = str4.toLowerCase();
// console.log(str4);
// console.log(a);
// console.log(b);

// const str5 = `Hello Coder Army (Welcome Coders)`;
// console.log(str5.indexOf('Cod')); // 6 --> If Cod presents multiple times then first index is printed.
// console.log(str5.indexOf('Cer')); // -1
// console.log(str5.indexOf('cod')); // -1
// console.log(str5.lastIndexOf('Cod')); // 26
// console.log(str5.includes('cod')); // false --> Not present

// // slice
// const str6 = `Hello Coder Army Coder`;
// console.log(str6.slice(2,7)); // 7 is not included.
// console.log(str6.slice(3)); // Print complete String after given index.
// console.log(str6.slice(-4)); // last 4 index --> oder
// console.log(str6.slice(-5,-2)); // Cod --> -2 not included {-5(C), -4(o), -3(d)}
// console.log(str6.substring(2,5)); // llo --> similar to slice

// // Difference-->> In substring you can't mark negative index

// const c = "Abhay";
// const d = "Yadav";
// const e = c + " " + d;
// console.log(e);

// console.log(1 + "." + " " + "Abhay" + " " + "Yadav");
// console.log(24 + c + d + 20);
// console.log(24 + 30 + c + d);

// const str7 = `Hello Coder Army Coder`;
// console.log(str7.replace("ode","ian"));
// console.log(str7.replaceAll("ode","ian"));

// const user = "   Abhay Yadav   ";
// console.log(user);
// console.log(user.trim());

// const name = "Rohit,Mohit,Sohit,Suraj,Abhay,Rohan";
// console.log(name.split(",")); //  [ 'Rohit', 'Mohit', 'Sohit', 'Suraj', 'Abhay', 'Rohan' ]
// const name1 = "Rohit Mohit Sohit Suraj Abhay Rohan";
// console.log(name1.split(" ")); //  [ 'Rohit', 'Mohit', 'Sohit', 'Suraj', 'Abhay', 'Rohan' ]


// // Date
// const now = new Date();
// console.log(now);  // UCT --> 2026-06-08T00:48:56.890Z
// console.log(now.toISOString());  // UCT --> 2026-06-08T00:48:56.890Z
// console.log(now.toString());  // IST --> Mon Jun 08 2026 06:18:56 GMT+0530 (India Standard Time)
// console.log(now.toLocaleString());  // IST --> 8/6/2026, 6:18:56 am

// // According to Locale Time
// const now = new Date();
// console.log(now.getDay()); // 1 --> Monday --> Base Index 1 --> {1MON 2TUE 3WED 4THURS 5FRI 6SAT 7SUN}
// console.log(now.getDate()); //8
// console.log(now.getFullYear()); // 2026
// console.log(now.getMonth()); // 5 --> June --> Base Index 0 --> 0 for Jan

// // Days : Mon Tue ...... (1 Based)
// // Month : Jan Feb ..... (0 Based)
// // year month date hour minute second millisecond
// const now = new Date (2025,8,20,8,25,16,125); // Sep --> 8
// console.log(now); // 2025-09-20T02:55:16.125Z // Sep --> 9
// console.log(now.toString()); // Sat Sep 20 2025 08:25:16 GMT+0530 (India Standard Time)

// // TimeStamp
// const now = Date.now();
// console.log(now); // 1780881237871 --> Time in Milliseconds
// const dates = new Date(1780881237871);
// console.log(dates.toString()); // Mon Jun 08 2026 06:43:57 GMT+0530 (India Standard Time)
// const date = new Date(now);
// console.log(date.toString()); // Mon Jun 08 2026 06:43:57 GMT+0530 (India Standard Time)