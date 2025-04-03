let todoList = JSON.parse(localStorage.getItem('todoList')) || [
  {
    item: 'Buy Milk',
    dueDate: '2023-10-04'
  },
  {
    item: 'Go to College',
    dueDate: '2023-10-04'
  }
];

displayItems();

function addTodo() {
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value.trim();
  let todoDate = dateElement.value;

  if (todoItem === "" || todoDate === "") {
    alert("Please enter both a todo item and a due date.");
    return;
  }

  todoList.push({item: todoItem, dueDate: todoDate});
  inputElement.value = '';
  dateElement.value = '';
  saveToLocalStorage();
  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector('.todo-container');
  let newHtml = '';
  
  for (let i = 0; i < todoList.length; i++) {
    let {item, dueDate} = todoList[i];
    newHtml += `
      <span>${item}</span>
      <span>${dueDate}</span>
      <button class='btn-delete' onclick="deleteTodo(${i});">Delete</button>
    `;
  }
  containerElement.innerHTML = newHtml;
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  saveToLocalStorage();
  displayItems();
}

function saveToLocalStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}
