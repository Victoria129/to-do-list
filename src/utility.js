import Todo from "./todo.js";

export default class Utility {
    static setLocalStorageList = (todo) => {
    localStorage.setItem("todoListItems", JSON.stringify(todo))
    }

    static getLocalStorageList = () => {
        let todoList;

        if(JSON.parse(localStorage.getItem("todoListItems")) === null) {
            todoList = []
        } else {
            todoList = JSON.parse(localStorage.getItem("todoListItems"));
        }
        return todoList;
    }

    static reassignIndex = (todoList) => {
        todoList.forEach((item, i) => {
            item.index = i + 1;
        })
    } 

    static deleteItem = (id) => {
        let todoList = this.getLocalStorageList();
        let itemToDel = todoList[id];
        todoList = todoList.filter((item) => item !== itemToDel);
        this.reassignIndex(todoList);
        this.setLocalStorageList(todoList);
    }

    static addRemoveEvent = () => {
        document.querySelectorAll(".delete-btn").forEach((button) => button.addEventListener('click', (e) => {
            e.preventDefault();
            let id = button.id - 1;
            console.log(id);
            this.deleteItem(id);
            this.showToDoItems();
        }))
    }

    static createToDoItemHtml = ({ description, index }) => {
        const div = document.createElement('div');
        div.className = 'to-do-item';
        div.innerHTML = `
          <div class="to-do-detail">
          <input type="checkbox">
          <h3 class="to-do-dsc">${description}</h3>
      </div>
      <div>
          <button class="edit-btn"><i class="fa-regular fa-pen-to-square"></i></button>
          <button class="delete-btn" id="${index}"><i class="fa-solid fa-trash-can"></i></button>
      </div>
      `;
        return div;
      };
      
      static showToDoItems = () => {
        let toDoList = this.getLocalStorageList();
        document.querySelector('.to-do-list').innerHTML = "";
        toDoList.sort((a, b) => a.index - b.index);
        toDoList.forEach((item) => {
          document.querySelector('.to-do-list').append(this.createToDoItemHtml(item));
        });

        this.addRemoveEvent();
      };
      

    static addTodoTask = (description) => {
        let todoList = this.getLocalStorageList();
        let index = todoList.length + 1;
        let newTask = new Todo(description, index);

        todoList.push(newTask);
        this.setLocalStorageList(todoList);
        this.showToDoItems()
    }

}