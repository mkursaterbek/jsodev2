let todoList = [
  "3 Litre Su İç",
  "Ödevleri Yap",
  "En Az 3 Saat Kodlama Yap",
  "Yemek Yap",
  "50 Sayfa Kitap Oku",
];

let sortAbc = true;
const addTaskButton = document.querySelector("#liveToastBtn");
const sortButton = document.querySelector("#sortBtn");

addTaskButton.addEventListener("click", function () {
  const taskInpuntElement = document.querySelector("#task");

  if (taskInpuntElement.value.length > 0) {
    todoList.push(taskInpuntElement.value);
    createTodoList();
    taskInpuntElement.value = "";
  }
  console.log(todoList);
});

sortButton.addEventListener("click", () => {
  todoList.sort();
  if (!sortAbc) {
    todoList.reverse();
  }
  createTodoList();
  console.log(sortAbc);
  sortAbc = !sortAbc;
});

function createTodoListItem(task, taskIndex) {
  const list = document.getElementById("list");
  const li = document.createElement("li");
  const btn = document.createElement("button");
  const text = document.createElement("div");
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  li.addEventListener("click", () => (checkBox.checked = !checkBox.checked));
  btn.addEventListener("click", () => deleteTodoListItem(taskIndex));
  text.innerHTML = task;
  btn.setAttribute("class", "button");
  btn.innerHTML = "x";
  li.appendChild(checkBox);
  li.appendChild(text);
  li.appendChild(btn);
  list.appendChild(li);
}

function createTodoList() {
  const list = document.getElementById("list");
  list.innerHTML = "";
  todoList.forEach((todoItem, index) => {
    createTodoListItem(todoItem, index);
  });
}

function deleteTodoListItem(taskIndex) {
  todoList = todoList.filter((_, index) => taskIndex != index);
  createTodoList();
}

var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (element) {
    if (element.target.tagName === "LI" || element.target.tagName === "DIV") {
      element.target.classList.toggle("checked");
    }
    console.log(element.target.tagName);
  },

  false
);

createTodoList();
