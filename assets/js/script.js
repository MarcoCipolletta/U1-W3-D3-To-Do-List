const form = document.querySelector("form");

form.onsubmit = function (event) {
  event.preventDefault();
  const todoInput = document.getElementById("text-input").value;
};
