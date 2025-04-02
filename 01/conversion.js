//conversion from string to number and vice-versa

let yourScore="99"

//console.log(typeof yourScore);// string

let scoreString=Number(yourScore)
//console.log(typeof scoreString);//number

//ParseInt is also one of the way to convert string into number
//console.log(typeof parseInt(yourScore)); //number

// plus with variable
// console.log(typeof +yourScore); //number

let myScore="99abc"

// console.log(typeof myScore); //string

let scoreNum=+myScore
// console.log(scoreNum);//NaN
// console.log(typeof scoreNum);//number
// --------------------------------------

let Score=null

// console.log(typeof Score);// object

let scoreN=+Score
// console.log(scoreN);//0
// console.log(typeof scoreN);//number

// -----------------------------------------
let Scor=undefined

// console.log(typeof Scor);// undefined

let score=+Scor 
// console.log(score); //NaN
// console.log(typeof score);//number

// -----------------------------------------------
let isLoggedIn=1

let booleanLoggedIn=Boolean(isLoggedIn)

console.log(booleanLoggedIn); //true

// console.log(typeof booleanLoggedIn); //boolean

// "" => false
// null => false
// undefined => false
// 0=> false
// "value"=>true

// -------------------------------------
let Numbers=0

let stringNumber=String(Numbers)
// console.log(stringNumber);
// console.log(typeof stringNumber); // string

// ----------------------------------------------------
// some basics operations

// console.table(
//         [ 
//           220+220,
//           220-220,
//           220*220,
//           220**3,
//           220/2,
//           220%2
//         ]
//       );

let str1='Hello'
let str2=' Ritesh'

// console.log(str1+str2);

console.table([
  "1" + 2, //'12'
  "1"+2+"2", // '122'
  1+2+"3" //'33
]);