// foreach ,map ,filter ,reduce
const coding = ["js", "py", "cpp", "java", "c"];

// coding.forEach( (value,index)=>{
//     console.log(`${value} at ${index}`);
// })

// coding.forEach( function(value,index){
//   console.log(`${value} at ${index}`);
// })

function printMe(item, index, arr) {
  console.log(item, index, arr);
}

// coding.forEach(printMe);

const myCoding = [
  {
    lname: "javascript",
    lFileName: "js",
  },
  {
    lname: "java",
    lFileName: "java",
  },
  {
    lname: "python",
    lFileName: "py",
  },
];

// myCoding.forEach( (value)=>{
//   console.log(`Language Name is : ${value.lname} and its file name is ${value.lFileName}`);
// })

// 
const myNum=[1,2,3,4,5,6,7,8];

let newNums=myNum.filter( (value)=>(value > 2) )
// console.log(newNums);

// ===============================================

const num2=[2,4,5,6,7,8,9,0,1]

const newNum=num2.map( (value)=> (value +9) )
// console.log(newNum);

const myNumber= num2
  .map( (value)=>(value * 2)) // items recieved here is passed to the next applied.
  .map( (newValue)=>(newValue+6))

  .filter((filterValue)=>( filterValue >= 10 ))

  console.log(myNumber);
  // =========================================

  const num4=[2,3,4]

 const numTotal= num4.reduce( (acc,curr)=>{
  console.log(acc,curr);
  return  acc + curr
  
 },0 )
console.log(numTotal); //9

const shoppingCart=[
  {itemName:'js',price:299},
  {itemName:'python',price:399},
  {itemName:'java',price:499},
  {itemName:'cpp',price:599},
]

const totalPrice=shoppingCart.reduce( (acc,current)=>{
  console.log(`Accumulator value is ${acc} and current value is ${current.price}`);
  
         
  return acc + current.price 
},0 );
console.log(`Your Bill becomes :${totalPrice}`);