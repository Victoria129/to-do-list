import Todo from './todo.js';

export default class Utility {
    static setLocalStorageList = (todo) => {
      localStorage.setItem('todoListItems', JSON.stringify(todo));
    }

    static getLocalStorageList = () => {
      let todoList;

      if (JSON.parse(localStorage.getItem('todoListItems')) === null) {
        todoList = [];
      } else {
        todoList = JSON.parse(localStorage.getItem('todoListItems'));
      }
      return todoList;
    }

    static reassignIndex = (todoList) => {
      todoList.forEach((item, i) => {
        item.index = i + 1;
      });
    }

    static updateTask = (newDsc, id) => {
      const toDoList = this.getLocalStorageList();
      const taskToUpdate = toDoList[id];

      toDoList.forEach((item) => {
        if (item === taskToUpdate) {
          taskToUpdate.description = newDsc;
        }
      });
      this.setLocalStorageList(toDoList);
      this.showToDoItems();
    }

    static deleteItem = (id) => {
      let todoList = this.getLocalStorageList();
      const itemToDel = todoList[id];
      todoList = todoList.filter((item) => item !== itemToDel);
      this.reassignIndex(todoList);
      this.setLocalStorageList(todoList);
    }

    static addRemoveEvent = () => {
      document.querySelectorAll('.delete-btn').forEach((button) => button.addEventListener('click', (e) => {
        e.preventDefault();
        const id = button.id - 1;
        this.deleteItem(id);
        this.showToDoItems();
      }));
    }

    static setupEdit = (id) => {
      const todoList = this.getLocalStorageList();
      const itemToEdit = todoList[id];

      document.getElementById('to-do-input').style.display = 'none';
      const editInput = document.querySelector('.edit-item');
      editInput.value = itemToEdit.description;
      editInput.style.display = 'block';
      editInput.setAttribute('id', id);
      editInput.focus();
    }

    static addEditEvent = () => {
      document.querySelectorAll('.edit-btn').forEach((button) => button.addEventListener('click', (e) => {
        e.preventDefault();
        const id = button.id - 1;
        this.setupEdit(id);
      }));
    }

    static createToDoItemHtml = ({ description, index }, currentStatus, completedTask) => {
      const div = document.createElement('div');
      div.className = 'to-do-item';
      div.innerHTML = `
          <div class="to-do-detail">
          <input type="checkbox" class="checkbox" id="${index}" ${currentStatus}>
          <h3 class="to-do-dsc ${completedTask}">${description}</h3>
      </div>
      <div>
          <button class="edit-btn" id="${index}"><i class="fa-regular fa-pen-to-square"></i></button>
          <button class="delete-btn" id="${index}"><i class="fa-solid fa-trash-can"></i></button>
      </div>
      `;
      return div;
    };

      static showToDoItems = () => {
        const toDoList = this.getLocalStorageList();
        document.querySelector('.to-do-list').innerHTML = '';
        toDoList.sort((a, b) => a.index - b.index);
        toDoList.forEach((item) => {
          let currentStatus;
          let completedTask;

          if (item.completed === true) {
            currentStatus = 'checked';
            completedTask = 'is-completed';
          } else {
            currentStatus = '';
            completedTask = '';
          }

          document.querySelector('.to-do-list').append(this.createToDoItemHtml(item, currentStatus, completedTask));
        });

        this.addRemoveEvent();
        this.addEditEvent();

        const event = new Event('taskListUpdated');
        document.dispatchEvent(event);
      };

    static addTodoTask = (description) => {
      const todoList = this.getLocalStorageList();
      const index = todoList.length + 1;
      const newTask = new Todo(description, index);

      todoList.push(newTask);
      this.setLocalStorageList(todoList);
      this.showToDoItems();
    }
}