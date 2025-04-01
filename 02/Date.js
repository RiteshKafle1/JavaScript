const myDate=new Date()

// console.log(myDate);
// console.log(typeof myDate); //object

// console.log(myDate.toDateString());

// console.log(myDate.toISOString());

// console.log(myDate.toJSON());

// console.log(myDate.toLocaleDateString());

let newDate=new Date(2025,0,3)
// console.log(newDate.toDateString());

let newDate2=new Date("2023-04-5")
// console.log(newDate2.toLocaleDateString());
  
// console.log(newDate2.getTime()); // milliseconds

// console.log(Math.round(Date.now()/1000));


let newDate4=new Date()
console.log(newDate4);

console.log(newDate4.getMonth() + 1);

console.log(newDate4.getFullYear());
