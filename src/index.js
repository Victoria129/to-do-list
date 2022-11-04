import './index.css';

const toDoList = [
  {
    description: 'Go swimming',
    completed: false,
    index: 2,
  },
  {
    description: 'Visit dentist',
    completed: false,
    index: 1,
  },
  {
    description: 'Plan party',
    completed: false,
    index: 3,
  },
];

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
