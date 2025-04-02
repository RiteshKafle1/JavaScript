const User = {
  name: "Alex",
  age: 17,
  location: "Kathmandu",
  email: "alex@gmail.com",
  isLoggedIn: false,
  sports: ["cricket", "table-tennis"],
};
// accessing the method of object
// console.log(User.age);
// console.log(User['sports']);

User.greeting = function () {
  console.log("Hello and Namaste:");
};

// console.log(User.greeting);
// User.greeting()

// restricts the insertion in object.
Object.freeze(User);
User.profession = "Dancer";
// console.log(User);
// ===============================

// const newUser=new Object() //singleton object

const socialUser = {};

socialUser.id = 45321;
socialUser.name = "coolBoy12";
socialUser.isLoggedIn = false;

// console.log(socialUser);

// console.log(Object.keys(socialUser));// returns all the keys in an array

// console.log(Object.values(socialUser)); // returns all the values in an array

// console.log(Object.entries(socialUser)); // key and value in array

// console.log(socialUser.hasOwnProperty('id'));//true

// console.log(socialUser.hasOwnProperty('name'));//true

// console.log(socialUser.hasOwnProperty('city'));//false


const regularUser = {
  email: "user@gmail.com",
  fullName: {
    firstName: "User",
    lastName: "bijju",
  },
};
// console.log(regularUser.fullName.firstName);
// console.log(regularUser.fullName.lastName);

const obj1 = {
  1: "a",
  2: "b",
  3: "c",
};

const obj2 = {
  4: "d",
  5: "e",
  6: "f",
};

const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

const ob4 = { ...obj1, ...obj2 };
// console.log(ob4);

const dataFromDb = [
  { key1: "value1" },
  { key2: "value2" },
  { key3: "value3" },
  { key4: "value4" },
  { key5: "value5" },
];

// console.log(dataFromDb[3].key4);

// ==========================================
const course={
  c_name:'js',
  c_id:1,
  c_price:7000,
  c_instructor:'rk'
}
const {c_price:price,c_name:cname}=course

console.log(price);

console.log(cname);