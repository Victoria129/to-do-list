import './index.css';
import Utility from "./utility.js";

const inputForm = document.getElementById("to-do-form");
const input = document.getElementById("to-do-input");




const createToDoItemHtml = ({ description }) => {
  const div = document.createElement('div');
  div.className = 'to-do-item';
  div.innerHTML = `
    <div class="to-do-detail">
    <input type="checkbox">
    <h3 class="to-do-dsc">${description}</h3>
</div>
<div>
    <button class="edit-btn"><i class="fa-regular fa-pen-to-square"></i></button>
    <button class="delete-btn"><i class="fa-solid fa-trash-can"></i></button>
</div>
`;
  return div;
};

const showToDoItems = () => {
  toDoList.sort((a, b) => a.index - b.index);
  toDoList.forEach((item) => {
    document.querySelector('.to-do-list').append(createToDoItemHtml(item));
  });
};
showToDoItems();
