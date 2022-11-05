import Utility from './utility.js';

export default class Interactive {
    static addCheckboxEvent = () => {
      document.querySelectorAll('.checkbox').forEach((box) => box.addEventListener('change', () => {
        const id = box.id - 1;
        let currentStatus;
        if (box.checked === true) {
          currentStatus = true;
        } else if (box.checked !== true) {
          currentStatus = false;
        }

        this.toggleCompleted(id, currentStatus);
      }));
    }

    static toggleCompleted = (id, currentStatus) => {
      const todoList = Utility.getLocalStorageList();
      todoList[id].completed = currentStatus;
      Utility.setLocalStorageList(todoList);
      Utility.showToDoItems();
    }

    static deleteAllCompletedTasks = () => {
      let todoList = Utility.getLocalStorageList();
      todoList = todoList.filter((item) => item.completed !== true);
      Utility.reassignIndex(todoList);
      Utility.setLocalStorageList(todoList);
      Utility.showToDoItems();
    }
}