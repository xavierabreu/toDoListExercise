document.addEventListener('DOMContentLoaded', function () {
    const todoList = document.getElementById('todo-list');
    const newTodoInput = document.getElementById('new-todo');
    const addTodoButton = document.getElementById('add-todo');

    addTodoButton.addEventListener('click', function () {
        const todoText = newTodoInput.value.trim();

        if (todoText !== '') {
            // Create a new list item
            const listItem = document.createElement('li');
            listItem.textContent = todoText;

            // Add click event to remove the item
            listItem.addEventListener('click', function () {
                // Strike Through
                listItem.classList.toggle('completed');
                // Remove And Timeout
                setTimeout(function () {
                    todoList.removeChild(listItem);
                }, 300);
            });

            // Add the new list item to the bottom of the list
            todoList.appendChild(listItem);

            // Clear the input box
            newTodoInput.value = '';
        }
    });
});