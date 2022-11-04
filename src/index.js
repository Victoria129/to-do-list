import './index.css';
import Utility from "./utility.js";

const inputForm = document.getElementById("to-do-form");
const input = document.getElementById("to-do-input");

inputForm.addEventListener("submit", (e) => {
e.preventDefault();
Utility.addTodoTask(input.value);
input.value = "";
})

Utility.showToDoItems();
