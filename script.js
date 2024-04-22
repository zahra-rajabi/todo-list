let input = document.querySelector(".task-write__container").firstElementChild;
let button = document.querySelector(".task-write__container").lastElementChild;
let list = document.querySelector(".task-list__items");
let tasks;

if (!localStorage.getItem("todo")) {
  tasks = [];
} else {
  getTasks();
}

button.addEventListener("click", function () {
  if (input.value !== "") {
    list.innerHTML += `
<li class="task-list__items-item"><ion-icon name="checkmark-outline" class='icon icon-mark'></ion-icon>${input.value}<ion-icon name="trash-outline" class='icon icon-trash'></ion-icon>
</li>`;
    saveTasks(input.value);
    input.value = "";
  }
});

list.addEventListener("click", function (event) {
  if (event.target.classList.contains("icon-trash")) {
    let target = event.target.parentElement;
    let targetText = target.textContent.replace(" ", "");
    let indexTarget = tasks.indexOf("targetText");

    target.style.display = "none";
  }
  if (event.target.nodeName == "LI") {
    event.target.classList.toggle("task-list__items-item--active");
    event.target.firstElementChild.classList.toggle("icon-active");
    event.target.firstElementChild.nextSibling.classList.toggle(
      "task-list__items-item--active"
    );
  }
});
function saveTasks(text) {
  tasks.push(text);
  localStorage.setItem("todo", tasks);
}
function getTasks() {
  let todo = localStorage.getItem("todo");
  tasks = todo.split(",");
  return tasks;
}
let previousTasks = getTasks();

for (let element of previousTasks) {
  list.innerHTML += `
<li class="task-list__items-item"><ion-icon name="checkmark-outline" class='icon icon-mark'></ion-icon>${element}<ion-icon name="trash-outline" class='icon icon-trash'></ion-icon>
</li>`;
}
