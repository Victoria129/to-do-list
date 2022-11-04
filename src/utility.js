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
    }

}