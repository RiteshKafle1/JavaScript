const myContainer = document.querySelector(".container");

// console.log(myContainer);

console.log(myContainer.childNodes);

// console.log(myContainer.children); // returns html collection.

// console.log(myContainer.children[0].innerHTML);

// console.log(myContainer.children[1].innerHTML);

// console.log(myContainer.children[2].innerHTML);

for (let index = 0; index < myContainer.children.length; index++) {
  // console.log(myContainer.children[index].innerHTML);
}

myContainer.children[0].style.color = "red";

// console.log(myContainer.firstElementChild); // first value of html collection

// console.log(myContainer.lastElementChild); // last value of html collection

const child = document.querySelector(".day");
// console.log(child);

// console.log(child.parentElement);

// console.log(child.nextElementSibling);

// ========================================

const myDiv = document.createElement("div");
console.log(myDiv);
myDiv.className = "main-container";
myDiv.id = "container";
myDiv.style.backgroundColor = "green";
myDiv.style.padding = "10px";
myDiv.append(document.createTextNode("Hello World."));
document.body.appendChild(myDiv);
