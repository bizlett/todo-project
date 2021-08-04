// get date for header
const options = {weekday: 'short', month: 'short', day: 'numeric', year: 'numeric'};
const todayDate = new Date().toLocaleTimeString('en-us', options);

document.getElementById('today-date').innerHTML = todayDate;

// Todo list setup
const todoInput = document.querySelector('.new-todo');
const addButton = document.querySelector('#add-button');
const todoList = document.querySelector('#todo-list');
const deleteButton = document.querySelector('.delete-button');

// Event listeners
addButton.addEventListener('click', addTodo);
deleteButton.addEventListener('click', deleteTodo);

// Functions

function addTodo(event){
    // prevent form submitting
    event.preventDefault();

    // todoItem div to hold new todo and iccons
    let todoDiv = document.createElement('div');

    // create new li to go into todoItem div
    let newTodo = document.createElement('li');
    newTodo.innerText = document.getElementsByClassName('new-todo')[0].value;
    newTodo.classList.add('new-todo');
    todoDiv.appendChild(newTodo);

    // check button
    let completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    // delete button
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete-button');
    todoDiv.appendChild(deleteButton);

    // append to todo list
    todoList.appendChild(todoDiv);
};

