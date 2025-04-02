// for

// for ( let index = 0; index < 10; index++ ) {
//   console.log(index); 
// }

// for of

const arr =[1,2,3,4,5,];

for (const key in arr) {
  // console.log(arr[key]);
  
}

for (const value of arr) {
  // console.log(value);
  
};
const string="Hello World";

for (const element of string) {
  // console.log(element);
  
}

// maps
const map=new Map();

map.set('NP',"Nepal")
map.set('IN',"India")
map.set('USA',"United State of America")
map.set('Fr',"France")

// for (const key in map) {
//   console.log(key);

// } // not possible

// console.log(map);
// console.log(typeof map); //object

// for (const [key,value] of map) {
//   console.log(key,":",value );
  
// }

const myObj={
  game1:'cricket1',
  game2:'cricket2',
  game3:'cricket3',
  game4:'cricket4'
}

// for (const [key,value] of myObj) {
//   console.log(key,":",value);
// } // not for objects.


for (const key in myObj) {
  // console.log(`${key} :${myObj[key]}`);
  
}


