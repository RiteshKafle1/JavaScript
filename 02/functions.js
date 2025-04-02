function greetings(){
  console.log("Hello and namaste");
}

// greetings();

function addTwoNumbers(a,b){
    return a+b;
}
const result=addTwoNumbers(4,5) 
// console.log(result);

function cartPrice(value1,value2,...itemPrice){ // rest-operator
  return itemPrice

}
console.log(cartPrice(300,700,500,300)); //[500,300]

const user={
  username:'Ritesh',
  age:18
}
function handleObject(yourobj){ 
  console.log(` I am ${yourobj.username} and ${yourobj.age} years old`);
}
handleObject(user); // passing object in a function


const number=[1,2,3,4,5]

function returnArray(yourArray){
  return yourArray[1]
}
console.log(returnArray(number)); // passing array in a function.