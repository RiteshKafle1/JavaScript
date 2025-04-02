if (true) {
  let number1 = 10; // block-scope

  const number2 = 50; // block-scope

  // var number3 = 100; // no block-scope
}

// console.table([number3])

// console.log(number1);

function one() {
  const username = "Ritesh";
  function two() {
    const lastname = "Kafle";
    console.log(username);
  }
  // console.log(lastname); 
  two();

}
// one();

// ======================

