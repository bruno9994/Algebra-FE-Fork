const textarea = document.querySelector("#input-text");
const btnAdd = document.querySelector("#input-add");
const list = document.querySelector(".ul-todo");

const addTask = function () {
  const newTask = document.createElement("li");
  newTask.innerHTML = textarea.value;
  list.appendChild(newTask);
};

btnAdd.addEventListener("click", addTask);
