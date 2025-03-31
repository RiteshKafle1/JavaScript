// Primitive :String,Number,Boolean,Null,Undefined,Symbol,BigInt

// Non-Primitive(Refrence) :
                            // Object 
                            // Arrays 
                            // Function

let uname="Alex" // string-> sequence of characters.
let age=16 // number-> with or without decimal values
let isLoggedIn=false //boolean -> true of false

// console.table([typeof uname,typeof age,typeof isLoggedIn]);

// console.log(typeof null,typeof undefined);// object,undefined

// Null->absesnce of value
let phoneNum=null;

// Undefined->variable declared but not initialized
let profession;

//symbol
const id=Symbol('1234')

console.log(typeof id); // symbol

console.log(id);

const Id2=Symbol('1234')

console.log(Id2);

console.log(id===Id2); //false

// console.log(typeof NaN);//number
// console.log(NaN === NaN);//false

// -------------------------------------------- 

// 
let z=5;
let x=z; // a copy of z is assigned to x.
  x=9;

console.log(x); //9
console.log(z); //5
// ---------------------------------

let arr1=[1,2,3]
let arr2=arr1 // a reference of arr1 is assigned to arr2

arr2.push(4);

console.log(arr1); 
console.log(arr2);





