// Get date for header
const options = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
};
const todayDate = new Date().toLocaleDateString('en-us', options);

document.getElementById('today-date').innerHTML = todayDate;

// Todo counter - total number of tasks on todoList

// increment function
function countTodos(todoList) {
    let count = 0
    // iterates through length of todo list, adding 1 for every new item
    for (let i = 0; i < todoList.length; i++);
    todoCounter.textContent(count);
};

// Global variables
const todoCounter = document.querySelector('#task-counter');

const todoInput = document.querySelector('.new-todo');
const addButton = document.querySelector('#add-button');
const todoList = document.querySelector('#todo-list');
// not sure if I need declare deleteButton... Its on the todo-list and delete function will be removeChild from parent node
const deleteButton = document.querySelector('.delete-button');

// Event listeners

addButton.addEventListener('click', addTodo);
// funky formatting issues! want the complete button at the start and the delete button at the end ideally
// perhaps div WITHIN the li to hold button rather than div to hold everything?

todoList.addEventListener('click', deleteCheckTodo);
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

    // check if there is text to submit, else trigger alert
    if (todoInput.value != "") {

        // append li to div
        todoDiv.appendChild(todo);

        // create check button
        let checkButton = document.createElement('i');
        checkButton.innerHTML = '<i class="fas fa-check" title="Complete todo"></i>';
        checkButton.className = 'check-button';
        todoDiv.appendChild(checkButton);

        // create delete button
        let deleteButton = document.createElement('i');
        deleteButton.innerHTML = '<i class="fas fa-times" title="Remove todo"></i>';
        deleteButton.className = 'delete-button';
        todoDiv.appendChild(deleteButton);

        // append todoDiv to list
        todoList.appendChild(todoDiv);

        // clear todo input
        todoInput.value = '';
    } else {
        // Alert message when todoInput is empty
        alert("Please add a task!");
    }
};

function deleteCheckTodo(event) {
// do I need this? look into further
// event.preventDefault();

// identify element being clicked on
let targetLi = event.target;

// if statement - what to do if delete button clicked - delete button identifier = classname delete-button
// could try .includes() - determine whether or not a string includes another string (prob not right)
// could try .matches() - checks if the element "is" the selector
// could try .contains() - checks to see if an element is in the page's body (prob too broad)
if (targetLi.className.matches('delete-button')) {
    todoList.remove(this.targetLi);
};

if (targetLi.className.matches('check-button')) {
    // linethrough text
    // change opacity of text
    // change opacity of li
    // add class name '.completed'
};


// else statement - what to do if check button clicked - check button identifier = classname check-button

// else {

// }

};