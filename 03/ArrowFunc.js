const user = {
  userName: "Ritesh",
  age: 12,
  welcomeMessage: function () {
    console.log(`${this.userName},welcome to website`);
    console.log(this); // provide the current context.
  },
};
// user.welcomeMessage();

user.userName = "Alex";
user.age = 20;

// user.welcomeMessage();

// console.log(user);

// console.log(this); // must  run this with node and through console on browser.

// function something(){
//   let username='ritesh'
//   console.log(this.username);
// }
// something(); undefined.

const something = () => {
  let username = "Ritesh";
  console.log(this.username);
};
// something();

// ==========================

// const addTwoNum=(a,b)=>{
//   return a+b;

// }
// console.log(addTwoNum(5,7));

const addTwoNum=(a,b)=> a + b;
console.log(addTwoNum(4,6));  