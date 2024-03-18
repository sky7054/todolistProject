const mainTodoEle = document.querySelector(".todo-lists-ele");
const inputField = document.getElementById("inputValue");


let localTodoLists = [];

const addTodoList = (e) => {
    e.preventDefault();
    
    const todoListValues = inputField.value.trim();
    localTodoLists.push(todoListValues);
    localTodoLists = [...new Set(localTodoLists)];
    localStorage.setItem("addTodoListValue",JSON.stringify(localTodoLists))
    console.log(localTodoLists);

    const divElement  = document.createElement("div");
    divElement.classList.add("main-todo-div");
    divElement.innerHTML = ` <li>${inputField.value}</li> <button class="deleteBtn">Delete</button>`;
    mainTodoEle.append(divElement);
    inputField.value ="";
    
}

document.querySelector(".btn").addEventListener("click", (e) => {
    addTodoList(e);
})