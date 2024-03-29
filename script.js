const mainTodoEle = document.querySelector(".todo-lists-ele");
const inputField = document.getElementById("inputValue");

const getTodoListfromLocal = () => {
  return JSON.parse(localStorage.getItem("addTodoListValue"));
};

//Adding add to list dyanamically\


 const addTodoListLocalStorage = () =>{
  localStorage.setItem("addTodoListValue",JSON.stringify(localTodoLists));

 }
  
const addToDynamicElement = (currEle) => {
  const divElement = document.createElement("div"); // create div tag
  divElement.classList.add("main-todo-div"); // insert class name in div
  divElement.innerHTML = `<li>${currEle.toLowerCase()}</li> <button class="deleteBtn">Delete</button>`;
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

//remove element from local storage
const removeTodoEle = (e) => {
  const todoToRemove = e.target;
  let todoListContent = todoToRemove.previousElementSibling.innerHTML;
  let parentElem = todoToRemove.parentElement;
  // console.log(todoListContent);

  localTodoLists = localTodoLists.filter((curTodo) => {
    console.log(curTodo);

    return curTodo !== todoListContent; 
  });
  addTodoListLocalStorage(localTodoLists);
  parentElem.remove();
}

mainTodoEle.addEventListener("click",(e) => {
  e.preventDefault();
  if(e.target.classList.contains("deleteBtn")){
    removeTodoEle(e);
  }
});

document.querySelector(".btn").addEventListener("click", (e) => {
  addTodoList(e);
});
