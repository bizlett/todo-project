// get date for header
const options = {weekday: 'short', month: 'short', day: 'numeric', year: 'numeric'};
const todayDate = new Date().toLocaleDateString('en-us', options);

document.getElementById('today-date').innerHTML = todayDate;

// Todo list setup
const todoInput = document.querySelector('.new-todo');
const addButton = document.querySelector('#add-button');
const todoList = document.querySelector('#todo-list');
    // not sure if I need declare deleteButton... Its on the todo-list
const deleteButton = document.querySelector('.delete-button');

// Event listeners

addButton.addEventListener('click', addTodo);
// funky formatting issues! want the complete button at the start and the delete button at the end ideally
// perhaps div WITHIN the li to hold button rather than div to hold everything?

todoList.addEventListener('click', deleteTodo); 
// this event listener is on todoList so ANY click on it will delete anything on the ul right now
// if/else should sort this. Need to also amend to target only the li being clicked and not all of them

// Functions

function addTodo(event) {
    // prevent form submitting
    event.preventDefault();

    // create div to hold li and buttons
    let todoDiv = document.createElement('div');
    todoDiv.className = 'todo-div';

    // create li with text from input
    let todo = document.createElement('li');
    todo.textContent = todoInput.value;
    
    // append li to div
    todoDiv.appendChild(todo);

    // create check button
    let checkButton = document.createElement('input');
    checkButton.setAttribute('type', 'checkbox');
    checkButton.className = 'check-button';
    todoDiv.appendChild(checkButton);

    // create delete button
    let deleteButton = document.createElement('button'); 
    deleteButton.innerHTML = '<i class="fas fa-times"></i>';
    todoDiv.appendChild(deleteButton);

    // append todoDiv to list
    todoList.appendChild(todoDiv);

    // clear todo input
    todoInput.value = '';
};

// function deleteTodo(event) {
    // do I need this? look into further
    // event.preventDefault();

    // find the element to remove - li element that is being clicked??
    // let deleteTodo = event.target;

    // the containing element of the element we're removing (defined globally - might not need this here)
    // let todoList = document.querySelector('#todo-list');

    // todoList.remove(this.deleteTodo);

// };