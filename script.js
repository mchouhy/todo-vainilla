const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const todoForm = document.getElementById("todo-form");
const todoDate = document.getElementById("date");

const addTask = (event) => {
  event.preventDefault();
  if (todoInput.value === "") {
    alert("Please enter a task.");
    return;
  } else {
    const todoItem = document.createElement("li");
    todoItem.innerHTML = todoInput.value;
    const todoDelete = document.createElement("span");
    todoDelete.innerHTML = "\u00d7";
    todoDelete.classList.add("delete-btn");
    todoList.appendChild(todoItem);
    todoItem.appendChild(todoDelete);
    todoInput.value = "";
  }
};

const checkTask = (event) => {
  const todoItem = event.target;
  todoItem.classList.toggle("checked");
};

todoForm.addEventListener("submit", addTask);
todoList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    checkTask(e);
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
});

const date = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const formattedDate = date.toLocaleDateString("en-US", options);
todoDate.innerHTML = formattedDate;
