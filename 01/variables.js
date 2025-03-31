// variables in js can be declared using let,var,const.
const userName='Ritesh' // block-scope
let userEmail="ritesh@gmail.com" // block-scope
var userId=12321 // no block-scope
userCity="Kathmandu"


// userName="Alex" // Re-assignment to a constant variable cannot be done
console.log(userName);

// Re-assignment is possible for others.
userEmail="alex@gmail.com"
userId=4563
userCity='Pokhara'

console.table([userEmail,userId,userCity])
