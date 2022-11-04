import './index.css';
import Utility from "./utility.js";

const inputForm = document.getElementById("to-do-form");
const input = document.getElementById("to-do-input");
const editInputForm = document.getElementById("editTodo-form");
const editInput = document.getElementById("edit-input");

inputForm.addEventListener("submit", (e) => {
e.preventDefault();
Utility.addTodoTask(input.value);
input.value = "";
})

editInputForm.addEventListener("submit", (e) => {
e.preventDefault();
let id = Number(editInput.getAttribute("id"));
Utility.updateTask(editInput.value, id);
editInput.value = "";
editInput.style.display = "none";
document.getElementById("to-do-input").style.display = "block";
})

Utility.showToDoItems();
