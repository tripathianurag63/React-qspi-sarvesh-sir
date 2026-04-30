//! ARROW FUNCTION AND TRADITIONAL FUNCTIONS

// function demo(){
//     console.log("I am demo, Named Fn");
    
// }
// demo();

// const fun = function(){
//     console.log("Function Expression");
    
// }
// fun();

// const sum = function(a=0,b=0){
//     let res = a+b;
//     return res;
// }

// console.log(sum(10,20));

// const fun1 = (a=0,b=0) => {
//     let res = a+b;
//     return res;
// }
// console.log(fun1(10,20));

// const a2 = username => {
//     console.log(username);
    
// }
// a2("Anurag");

// returns -> 1) implicit return 2) explicit return
// const a3 = () => {return "Explicit Return"}; // explicit me return likhna hota
// console.log(a3());

// const a4 = () => "Implicit Return"; // implicit me return nhi likhna hota
// console.log(a4());

 // explicit return
// const a5 = () => {
//     return {
//         name: "Anurag",
//         age: 20
//     }
// }
// console.log(a5());
 // implicit return isliye agar obj return karna h to use braces ke andar karna padega warna kuch bhi nhi return karega
 //kyuki confuse ho jayega curly braces ki wajah se ki kya karna h
// const a6 = () => ({
//     name: "Anurag",
//     age: 20
// })
// console.log(a6());

//! DESTRUCTURING

// let arr1 = [10,20,30,40];
// let [a,b,c,d] = arr1;
// console.log(a,b,c,d);

// let obj1 = {
//     name: "Anurag",
//     age: 20
// }
// let {name,age} = obj1;
// console.log(name,age);



//! REST AND SPREAD
// for packing and unpacking of an array
// used to copy array elements and object's property
// syntax = ...variable_name
//? spread - unpack
// let arr1 = [10,20,30,40];
// console.log(arr1); // [10,20,30,40]
 // isme square brackets nhi lene padega
// console.log(...arr1);// 10 20 30 40

// //? rest - pack
 // isme square brackets lene padega
// let arr2 = [...arr1]; 
// console.log(arr2); // [10,20,30,40]

// let obj1 = {
//     id: 1,
//     ename: "Anurag"
// };
// let obj2 = { ...obj1, salary: 10000 };// isme reference diff hoga kyuki curly laga rhe mtlb new obj bana rhe h
// console.log(obj2); // { id: 1, ename: "Anurag", salary: 10000 }

// let name = "username"
// let value = "John"
// let salary = 90000;
// let formData = {
//     [name]: value,
//     email: "gyjh@hjgjh",
//     password: "23456",
     //salary: salary,
//     salary, // agar key value dono ke name same h toh yeh likh skte h short karne ke liye
// }
// console.log(formData);


//! ARRAY METHODS

//map(), forEach(), filter(), find(), findIndex(), reduce()

// let arr = [10,20,30,40,50];
// //! map : returna a new array
// let val1 = arr.map((element, index, array)=>{
//     console.log(element, index, array);
//     return element+5;
    
// });
// console.log(val1);
// console.log("=======================");

// //! forEach : returns undefined
// let val2 = arr.forEach((element, index, array)=>{
//     console.log(element, index, array);
//     return element+5;
    
// });
// console.log(val2);

// let arr2 = [60,20,10,30,50,80];

// //! filter: used to filter out the array which satisfy the condition, returns new filtered array
// let val3 = arr2.filter((ele)=>{
//     return ele > 25;
// })

// console.log(val3);
// //! find: used to find first occurence of the element which satisfy the condition, returns single value 
// let val4 = arr2.find((ele)=>{
//     return ele > 25;
// })

// console.log(val4);// 60
// //! findIndex: Returns the index of the first element in the array where predicate is true, and -1 otherwise.
// let val5 = arr2.findIndex((ele)=>{
//     return ele>25;
// })
// console.log(val5);// 0

// //! reduce(callback, accumulatorValue)
 // in callback fn we are having 4 parameters
 // 1) accumulator 2) element 3)index 4)array
// let arr3 = [10,20,30,40,50];
// let val6 = arr3.reduce((acc, ele, idx, arr)=>{
//     return acc+ele;
// },0)
// console.log(val6);

//! MODULES
//! 1) Named
// import { greet, demo } from "./utilities.js";
// greet();
// demo();

// import * as utilities from "./utilities.js"
// utilities.greet();
// utilities.demo();

// import { greet as welcome, demo } from "./utilities.js";
// welcome();

//! 2) Default : multiple nhi kar sakte ek baar me bas ek hi hoga export hoga
//  import Add from "./utilities.js";
//  console.log(Add(10,20));

// //! REACT EXAMPLE
// import { useState, useRef } from "react";

// let [state, setState] = useState(0);
// console.log(state);
// console.log(seState);

// let ref = useRef();
// console.log(ref);//{current: ud}


// //! TEMPLATE LITERALS