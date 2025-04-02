// (function something(){ // this is named iife
//   console.log("I am something");
// })(); // immediately execute.

( ()=>{
  console.log('I am Inside an IIFE,');
} )();


( (myName)=>{   // no-name iife. 
  console.log('I am Inside an IIFE,',myName);
} )("Ritesh"); 

