const myFirstName="Ritesh"
const mylastName="Kafle"

console.log(`Mr. ${myFirstName} ${mylastName} welcome to Google.`);

const favGame="table-tennis"

// console.log(favGame.length);

// console.log(favGame.toUpperCase());

// console.log(favGame.charAt(4));

// console.log(favGame.indexOf('i'));

const newSring=favGame.substring(0,5)
// console.log(newSring);

console.log(favGame.slice(1,-1)); //able-tenni

// console.log(favGame.slice(0,5));


const String1='   hello    '
console.log(String1.trim()); //hello


const String2='Alex Bhandari'
console.log(String2.replace('Alex','Zlex')); //Zlex Bhandari

console.log(String2.includes('Bh')); //true  

console.log(String2.split(' ')); //['Alex', 'Bhandari']
console.log(String2.split('e')); //['Al', 'x Bhandari']