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

    // create new li
    let newTodo = document.createElement('li');

    // get todo text for new li
    newTodo.innerText = document.getElementsByClassName('new-todo')[0].value;

    // add class to style li
    newTodo.classList.add('new-todo');

    // create todoItem div to hold new complete button
    // let todoDiv = document.createElement('div');

    // create check button
    let checkButton = document.createElement('input');

    // write html for check button
    checkButton.innerHTML = '<input type = "checkbox">';

    // add class to style check button
    checkButton.classList.add('checkButton');

    newTodo.appendChild(checkButton);

    // append div to li
    // todoDiv.appendChild(checkButton);

    // append div with checkButton inside li
    // todoDiv.appendChild(newTodo);

    // delete button
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-times"></i>';
    deleteButton.classList.add('delete-button');
    newTodo.appendChild(deleteButton);

    // append to todo list
    // todoList.appendChild(todoDiv);

    // clear todo input
    todoInput.value = '';
};

function deleteTodo(event) {
    // do I need this? look into further
    // event.preventDefault();

    // find the element to remove - li element that is being clicked??
    // let deleteTodo = event.target;

    // the containing element of the element we're removing (defined globally - might not need this here)
    // let todoList = document.querySelector('#todo-list');

    // todoList.remove(this.deleteTodo);

};