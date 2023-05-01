const toDoForm = document.getElementById('todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.getElementById('todo-list');

function handleToDoDelete(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const button = document.createElement('button');
  li.appendChild(span);
  span.innerText = newTodo;
  button.innerText = '❌';
  button.addEventListener('click', handleToDoDelete);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  paintToDo(newTodo);
  toDoInput.value = '';
}

toDoForm.addEventListener('submit', handleToDoSubmit);
