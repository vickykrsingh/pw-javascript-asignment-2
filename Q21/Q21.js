// 21. TODO App

// Create a simple to-do app to add TODO items to the list through an input field and a button.


function addTodo() {
    var todoInput = document.getElementById('todoInput');
    var todoList = document.getElementById('todoList');

    // Get the value from the input field
    var todoText = todoInput.value.trim();

    // Check if the input is not empty
    if (todoText !== '') {
        // Create a new list item
        var newTodo = document.createElement('li');
        newTodo.textContent = todoText;

        // Append the new list item to the todo list
        todoList.appendChild(newTodo);

        // Clear the input field
        todoInput.value = '';
    } else {
        alert('Please enter a valid todo.');
    }
}