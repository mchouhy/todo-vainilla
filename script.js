const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const todoForm = document.getElementById("todo-form");
const todoDate = document.getElementById("date");

const addTask = (event) => {
  event.preventDefault();
  const todoItem = document.createElement("li");
  todoItem.innerHTML = todoInput.value;
  todoList.appendChild(todoItem);
  todoInput.value = "";
};

const checkTask = (event) => {
  const todoItem = event.target;
  todoItem.classList.toggle("checked");
};

todoForm.addEventListener("submit", addTask);
todoList.addEventListener("click", checkTask);

const date = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const formattedDate = date.toLocaleDateString("en-US", options);
todoDate.innerHTML = formattedDate;
