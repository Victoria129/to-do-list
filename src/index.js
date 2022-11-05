import './index.css';
import Utility from './utility.js';
import Interactive from './interactive.js';

const inputForm = document.getElementById('to-do-form');
const input = document.getElementById('to-do-input');
const editInputForm = document.getElementById('editTodo-form');
const editInput = document.querySelector('.edit-item');

inputForm.addEventListener('submit', (e) => {
  e.preventDefault();
  Utility.addTodoTask(input.value);
  input.value = '';
});

editInputForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const id = Number(editInput.getAttribute('id'));
  Utility.updateTask(editInput.value, id);
  editInput.value = '';
  editInput.style.display = 'none';
  document.getElementById('to-do-input').style.display = 'block';
});

document.querySelector('.clear-all').addEventListener('click', Interactive.deleteAllCompletedTasks);

window.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('taskListUpdated', () => {
    Interactive.addCheckboxEvent();
  }, false);
  Utility.showToDoItems();
});
