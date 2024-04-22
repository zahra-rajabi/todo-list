let input = document.querySelector(".task-write__container").firstElementChild;
let button = document.querySelector(".task-write__container").lastElementChild;
let list = document.querySelector(".task-list__items");

button.addEventListener("click", function () {
  list.innerHTML += `
<li class="task-list__items-item">
  <ion-icon name="checkmark-outline" class='icon icon-mark'></ion-icon>

  ${input.value}
 
  <ion-icon name="trash-outline" class='icon icon-trash'></ion-icon>
</li>`;
  input.value = "";
});

list.addEventListener("click", function (event) {
  if (event.target.classList.contains("icon-trash")) {
    event.target.parentElement.style.display = "none";
  }
  if (event.target.nodeName == "LI") {
    event.target.classList.toggle("task-list__items-item--active");
    event.target.firstElementChild.classList.toggle("icon-active");
    event.target.firstElementChild.nextSibling.classList.toggle(
      "task-list__items-item--active"
    );
  }
});
