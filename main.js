

class ToDo {  
    constructor(text) {
        this.text = text;
        this.isComplete = false;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const addTaskForm = document.getElementById('addTaskForm');
    const taskDescriptionInput = document.getElementById('taskDescription');
    const taskList = document.getElementById('taskList');
    const tasks = [];

    function addTask() {
        const description = taskDescriptionInput.value;
        if (!description) {
            return;
        }

        const newTask = new ToDo(description);
        tasks.push(newTask);

        renderTasks();
        taskDescriptionInput.value = ''; // Clear the input field
    }

    function markTaskComplete(checkbox, index) {
        tasks[index].isComplete = checkbox.checked;
        renderTasks();
    }

    function renderTasks() {
        taskList.innerHTML = '';

        tasks.forEach((task, index) => {
            const taskItem = document.createElement('li');
            taskItem.innerHTML = `
                <input type="checkbox" onchange="markTaskComplete(this, ${index})" ${task.isComplete ? 'checked' : ''}>
                <span class="${task.isComplete ? 'completed' : ''}">${task.text}</span>
            `;
            taskList.appendChild(taskItem);
        });
    }

    window.addTask = addTask;
});
