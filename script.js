const mainTodoEle = document.querySelector(".todo-lists-ele");
const inputField = document.getElementById("inputValue");

const getTodoListfromLocal = () => {
  return JSON.parse(localStorage.getItem("addTodoListValue"));
};

//Adding add to list dyanamically

const addToDynamicElement = (currEle) => {
  const divElement = document.createElement("div"); // create div tag
  divElement.classList.add("main-todo-div"); // insert class name in div
  divElement.innerHTML = ` <li>${currEle}</li> <button class="deleteBtn">Delete</button>`;
  mainTodoEle.append(divElement);
};

let localTodoLists = getTodoListfromLocal() || []; // store input value

const addTodoList = (e) => {
  e.preventDefault();

 

  const todoListValues = inputField.value.trim(); // trim methods remove first and last space
  inputField.value ="";

  if(todoListValues !== ""  && !localTodoLists.includes(todoListValues)){
  localTodoLists.push(todoListValues);
  localTodoLists = [...new Set(localTodoLists)]; //its prevent duplicate value in array
  localStorage.setItem("addTodoListValue", JSON.stringify(localTodoLists));
  

  // const divElement  = document.createElement("div"); // create div tag
  // divElement.classList.add("main-todo-div"); // insert class name in div
  // divElement.innerHTML = ` <li>${inputField.value}</li> <button class="deleteBtn">Delete</button>`;
  // mainTodoEle.append(divElement);
  // 

  addToDynamicElement(todoListValues);
  }
};

const showTodoList = () => {
  // console.log(localTodoLists);
  localTodoLists.forEach((currEle) => {
    addToDynamicElement(currEle);
  });
};

showTodoList();

document.querySelector(".btn").addEventListener("click", (e) => {
  addTodoList(e);
});
