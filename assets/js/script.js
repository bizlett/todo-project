// get date for header
const options = {weekday: 'short', month: 'short', day: 'numeric', year: 'numeric'};
const todayDate = new Date().toLocaleTimeString('en-us', options);

document.getElementById('today-date').innerHTML = todayDate;

// Todo list setup
const todoInput = document.querySelector('.new-todo');
const addButton = document.querySelector('#add-button');
const todoList = document.querySelector('#todo-list');
const deleteButton = document.querySelector('.delete-button');
const todo = document.querySelector('li');
const editTodo = this.todo



// Event listeners
addButton.addEventListener('click', addTodo);

todoList.addEventListener('click', deleteTodo);
// originally had event listener on deleteButton but because not present in HTML, value was coming up null
// todoList is parent element. Now need to figure out how to drill down into parent!



// Functions

function addTodo(event) {
    // prevent form submitting
    event.preventDefault();

    // create todoItem div to hold new todo and icons
    let todoDiv = document.createElement('div');

    // create new li to go into todoItem div
    let newTodo = document.createElement('li');
    newTodo.innerText = document.getElementsByClassName('new-todo')[0].value;
    newTodo.classList.add('new-todo');
    todoDiv.appendChild(newTodo);

    // check button
    let completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-button');
    todoDiv.appendChild(completedButton);

    // delete button
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete-button');
    todoDiv.appendChild(deleteButton);

    // append to todo list
    todoList.appendChild(todoDiv);

    // clear todo input
    todoInput.value = '';
};

function deleteTodo(event) {
    // do I need this? look into further
    // event.preventDefault();

    // find the element to remove - li element that is being clicked??
    let deleteTodo = event.target;

    // the containing element of the element we're removing (defined globally - might not need this here)
    // let todoList = document.querySelector('#todo-list');

    todoList.remove(this.deleteTodo);

};

function editTodo(event) {

    let editTodo = event.target;

}