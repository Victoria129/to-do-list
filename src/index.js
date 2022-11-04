import './index.css';

let toDoList = [
    {
        description: "Go swimming",
        completed: false,
        index: 1
    },
    {
        description: "Visit dentist",
        completed: false,
        index: 2
    },
    {
        description: "Plan party",
        completed: false,
        index: 3
    }
]

const createToDoItemHtml = () => {
    const div = document.createElement("div");
    div.className = "to-do-item";
    div.innerHTML = `
    <div class="to-do-detail">
    <input type="checkbox">
    <h3 class="to-do-dsc">Go swimming</h3>
</div>
<div>
    <button class="edit-btn"><i class="fa-regular fa-pen-to-square"></i></button>
    <button class="delete-btn"><i class="fa-solid fa-trash-can"></i></button>
</div>
`;
    return div;
}


