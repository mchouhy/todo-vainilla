const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const todoForm = document.getElementById("todo-form");
const todoDate = document.getElementById("date");

const addTask = (event) => {
  event.preventDefault();
  if (todoInput.value === "") {
    alert("Please enter a task.");
    return;
  }
  const todoContainer = document.createElement("div");
  todoContainer.classList.add("todo-container");
  const todoItem = document.createElement("li");
  todoItem.innerHTML = todoInput.value;
  const todoDelete = document.createElement("button");
  todoDelete.classList.add("delete-btn");
  todoDelete.innerHTML = "Delete";
  todoContainer.appendChild(todoItem);
  todoContainer.appendChild(todoDelete);
  todoList.appendChild(todoContainer);
  todoItem.addEventListener("click", checkTask);
  todoDelete.addEventListener("click", () => {
    todoContainer.remove();
  });
  todoInput.value = "";
};

const checkTask = (event) => {
  const todoItem = event.target;
  todoItem.classList.toggle("checked");
};

todoForm.addEventListener("submit", addTask);

const date = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const formattedDate = date.toLocaleDateString("en-US", options);
todoDate.innerHTML = formattedDate;
