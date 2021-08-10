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

    // create li
    let todo = document.createElement('li');
    // create div for buttons
    let todoDiv = document.createElement('div');

    // create check button
    let checkButton = document.createElement('checkbox');
    checkButton.className = 'check-button', 'form-check-input';
    checkButton.appendChild(todoDiv);

    // create delete button
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa fas-times"></i>'
    deleteButton.appendChild(todoDiv);

    // text for todo
    todo.innerText = todoInput; 

    // append div to li
    todoDiv.appendChild(todo);

    // append li to ul
    todo.appendChild(todoList);
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