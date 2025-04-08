let todoArray = [{}];

function addtodo() {
  let inputElement = document.querySelector("#input-text");
  let textInserted = inputElement.value;
  // console.log(textInserted);

  let dateElement = document.querySelector("#date-picker");
  let dateInserted = dateElement.value;
  // console.log(dateInserted);

  if (textInserted && dateInserted) {
    todoArray.push(
      {
      item: textInserted,
      date: dateInserted,
    }
  );
    inputElement.value = " ";
    dateElement.value = " ";
    console.log(todoArray);
    showParaItem();
  }
}
function showParaItem() {
  let container = document.querySelector(".todo-container");
  container.innerHTML = " ";

  for (let i = 1; i < todoArray.length; i++) {
    let div = document.createElement("div");
    // div.style.marginLeft = "10px";
    div.className = "div-container";

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = () => handleDelete(i);

    // span is a inline element also a button.
    let todoItem = document.createElement("span");

    let todoDate = document.createElement("span");

    todoItem.innerText = todoArray[i].item;

    todoDate.innerText = todoArray[i].date;

    div.appendChild(todoItem);
    div.appendChild(todoDate);
    div.appendChild(deleteButton);

    container.appendChild(div);

    // todoItem.style.marginRight="40px"
  }
}
function handleDelete(index) {
  todoArray.splice(index, 1);
  showParaItem();
}
