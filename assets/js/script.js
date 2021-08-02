
function addTodo(){
    // defines a variable to store new todo
    let  todoList = document.getElementsByClassName('todo-list');
    
    // defines where to get the new todo from
    let newTodo = document.getElementsByClassName('new-todo');
    
    // defines the element to create to store the new todo
    let li = document.createElement('li');

    // sets class of attribute and fetches text from input box 
    li.setAttribute('class', newTodo.value);

    // appends new element into the todoList and displays text from input box
    li.appendChild(document.createTextNode(newTodo));

}


