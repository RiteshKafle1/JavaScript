const myArr = [1, 2, 3, 4, 5, 6];

const myArr2=myArr.slice(0,3)
// console.log("Original",myArr); //no-change
// console.log(myArr2);

const myArr3=myArr.splice(0,3)
// console.log("Original",myArr); // change in original array
// console.log(myArr3);

const fruits = ["Banana", "Orange", "Apple", "Mango"];


const newfruit=fruits.splice(2, 0, "Lemon", "Kiwi"); // add or remve element 
// console.log(fruits);
// console.log(newfruit);


// console.log(myArr);

// myArr.push(7)
// myArr.push(8)
// myArr.pop()
// myArr.unshift(0);
// myArr.shift();

// console.log(myArr.includes(7)); //false

// console.log(myArr.indexOf(1)); //0
 
// console.log(myArr.indexOf(10)); //-1 

// const myArr2=myArr.join()
// console.log(myArr);

// console.log(myArr2);

// console.log(typeof myArr2); //string

// ===========================================


const myArray=['a','b','c']

const myArray2=['d','e','f']

// myArray.push(myArray2)
// console.log(myArray);

// console.log(myArray.concat(myArray2));

const newArray=[...myArray,...myArray2]
// console.log(newArray);
 
const intArray=[1,2,3,4,5,[1,2,3],8,[6,8,9,[0,0,9]]];

// console.log(intArray.flat(Infinity));


console.log(Array.isArray('Hello from future')); //false

console.log(Array.from('Hello from future')); 
// ['H', 'e', 'l', 'l', 'o', ' ', 'f', 'r', 'o', 'm', ' ', 'f', 'u', 't', 'u', 'r', 'e']
console.log(Array.from({myName:'Ritesh'}));
// []


console.log(Array.of("rite",true,3))


console.log(Array.of(1,3,4,5)); // [1, 3, 4, 5]


