// add event listener
const addButton = document.getElementById('add-button'); 
addButton.click = addTodo;   

function addTodo(){
    // create a new todo
    var newTodo = document.getElementsByClassName('new-todo');

    // create a new element for the newTodo and store it in a variable
    var li = document.createElement('li');

    // create a text node and store it in a variable
    var todoText = document.createTextNode(document.getElementsByClassName('new-todo'));

    // attach the new text node (todoText) to the new element (li)
    li.appendChild(todoText);

    // create the position for where the new element should be added (at the start of the ul)
    var todoList = document.getElementById('todo-list')[0];

    // insert the new element (newTodo) into the new position (start of todoList)
    todoList.appendChild(newTodo);

}


// // defines a variable to store new todo
// let  todoList = document.getElementsByClassName('todo-list');
    
// // defines where to get the new todo from
// let newTodo = document.getElementsByClassName('new-todo');

// // defines the element to create to store the new todo
// let li = document.createElement('li');

// // sets class of attribute and fetches text from input box 
// li.setAttribute('class', newTodo.value);

// // appends new element into the todoList and displays text from input box
// li.appendChild(document.createTextNode(newTodo));