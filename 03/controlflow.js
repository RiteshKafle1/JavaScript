// if

// if(true){
//   // statement
// }

// if( 2 == "2" ){
//   console.log('I am true');
// }

// if( 2 === "2" ){

// statement

const temperature = 66;

// if(temperature <= 55){
//   console.log("Temp is less than 55");
// }
// else{
//   console.log("Temp not less than 55");
// }

// =======

//  const userLoggedIn=true;
//  const userLoggedInGoogle=true;
//  const userLoggedInEmail=false;
//  const card=true;

//  if(userLoggedIn && card){
//   console.log("You can buy.");
// }

//  if(userLoggedInGoogle || userLoggedInEmail){
//   console.log("Valid User");
// }

// =================
// switch

const month = 1;

// switch (month) {
//   case 1:
//     console.log("january");
//     break;
//   case 2:
//     console.log("Feb");
//     break;
//   default:
//     console.log("March");
//     break;
// }

//falsy values:
// false
// 0
// -0
// BigInt 0n
// "" ,'',``
// null
// undefined
// NaN

// truthy values:
// "0"
// "false"
// " "
// []
// {}
// function(){}


const emptyObj={}

if(Object.keys(emptyObj).length===0){
  console.log("object is empty");
}



let var1;

// var1= null ?? 10;

var1= undefined ?? 10

console.log(var1);


// ternary operator

// condition ? true :false
