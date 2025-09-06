// Povezivanje sa DOM
const input = document.querySelector("#input-text");
const addBtn = document.querySelector("#input-add");
const list = document.querySelector(".ul-todo");
const btnClearCompleted = document.querySelector("#section-clear-completed");
const btnAll = document.querySelector("#button-all");
const btnActive = document.querySelector("#button-active");
const btnCompleted = document.querySelector("#button-completed");

// Dodavanje novog zadatka
const addNewTask = function () {
  const text = input.value;

  if (text !== "") {
    createNewTask(text);
    input.value = "";
  } else {
    alert("Write a task !");
  }
};

// Stvaranje novog zadatka
const createNewTask = function (text) {
  const li = document.createElement("li");
  const div = document.createElement("div");
  const divInt = document.createElement("div");
  divInt.textContent = text;
  list.appendChild(li);
  li.appendChild(div);
  div.appendChild(divInt);
  div.classList.add("li-container");
  divInt.classList.add("li-container-int");
  createCheckBox(divInt);
  removeTaskBtn(div);
};

// Stvaranje checkboxa
const createCheckBox = function (item) {
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  item.insertBefore(checkBox, item.firstChild);
  checkBox.addEventListener("click", checkCheckBox);
};

// Provjera checkboxa i stavljanje linije preko teksta
const checkCheckBox = function (event) {
  const checkBox = event.target;

  if (checkBox.checked) {
    checkBox.parentNode.style.textDecoration = "line-through";
  } else {
    checkBox.parentNode.style.textDecoration = "";
  }
};

// Stvaranje X buttona
const removeTaskBtn = function (item) {
  const removeBtn = document.createElement("div");
  removeBtn.innerText = "X";
  removeBtn.classList.add("removeButton");
  removeBtn.addEventListener("click", removeTask);
  item.appendChild(removeBtn);
};

// Funkcija removeTask
const removeTask = function (event) {
  const removeTask = event.target;
  removeTask.parentNode.parentNode.remove();
};

// Stvaranje Clear completed buttona
const clearCompleteBtn = function () {
  const listItems = list.getElementsByTagName("li");

  for (let i = listItems.length - 1; i >= 0; i--) {
    const checkBox = listItems[i].getElementsByTagName("input");
    if (checkBox[0].checked) {
      listItems[i].remove();
    }
  }
};

// Mjenjanje na Active tab
const activeTab = function () {
  const listItems = list.getElementsByTagName("li");

  for (let i = 0; i < listItems.length; i++) {
    const check = listItems[i].getElementsByTagName("input");
    if (check[0].checked) {
      listItems[i].style.display = "none";
    } else {
      listItems[i].style.display = "";
    }
  }

  btnAll.disabled = false;
  btnActive.disabled = true;
  btnCompleted.disabled = false;
};

// Mjenjanje na Completed tab
const completeTab = function () {
  const listItems = list.getElementsByTagName("li");

  for (let i = 0; i < listItems.length; i++) {
    const check = listItems[i].getElementsByTagName("input");
    if (!check[0].checked) {
      listItems[i].style.display = "none";
    } else {
      listItems[i].style.display = "";
    }
  }
  btnAll.disabled = false;
  btnActive.disabled = false;
  btnCompleted.disabled = true;
};

// Mjenjanje na allTab
const allTab = function () {
  const listItems = list.getElementsByTagName("li");

  for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.display = "";
  }
  btnAll.disabled = true;
  btnActive.disabled = false;
  btnCompleted.disabled = false;
};

// Dodavanje handler funkcija
addBtn.addEventListener("click", addNewTask);
btnClearCompleted.addEventListener("click", clearCompleteBtn);
btnActive.addEventListener("click", activeTab);
btnCompleted.addEventListener("click", completeTab);
btnAll.addEventListener("click", allTab);
