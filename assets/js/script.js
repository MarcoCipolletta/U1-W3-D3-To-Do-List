const form = document.querySelector("form");

//creazione della task e la inserisco nella to-do-list

form.onsubmit = function (event) {
  event.preventDefault();

  const todoInput = document.getElementById("text-input").value;

  const toDoContainer = document.getElementById("to-do-container");
  toDoContainer.style.display = "block";

  const taskContainer = document.createElement("div");
  const taskText = document.createElement("p");
  taskText.innerText = todoInput;

  taskContainer.classList.add("task");
  taskContainer.appendChild(taskText);

  toDoContainer.appendChild(taskContainer);

  document.getElementById("text-input").value = "";
};

// controllo se to-do-list o done-list sono vuoti e se si faccio display none

//sposto la task dalla to-do-list alla done-list

const toDoContainer = document.getElementById("to-do-container");
const doneContainer = document.getElementById("done-container");

toDoContainer.onclick = function (event) {
  const targetTask = event.target.closest(".task");

  const trashIconContainer = document.createElement("div");
  trashIconContainer.innerHTML = `<span><i class="fa-solid fa-trash"></i></span>`;
  trashIconContainer.onclick = () => {
    targetTask.remove();
    if (doneContainer.children.length === 1) {
      doneContainer.style.display = "none";
    }
  };
  targetTask.appendChild(trashIconContainer);

  doneContainer.style.display = "block";
  doneContainer.appendChild(targetTask);
  targetTask.classList.add("checked");

  const checkContainer = () => {
    if (toDoContainer.children.length === 1) {
      toDoContainer.style.display = "none";
    }
  };
  checkContainer();
};
