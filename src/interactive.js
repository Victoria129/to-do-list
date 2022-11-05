import Utility from "./utility";

export default class Interactive {
    static addCheckboxEvent = () => {
        document.querySelectorAll(".checkbox").forEach((box) => box.addEventListener('change', () => {
            let id = box.id - 1;
        let currentStatus;
        if(box.checked === true) {
            currentStatus = true;
        } else if(box.checked !== true) {
            currentStatus = false;
        }

        this.toggleCompleted(id, currentStatus);

        }))
    }

    static toggleCompleted = (id, currentStatus) => {
        let todoList = Utility.getLocalStorageList();
        todoList[id].completed = currentStatus;
        Utility.setLocalStorageList(todoList);
        Utility.showToDoItems();
    }

}