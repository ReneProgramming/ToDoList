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

    function renderTasks() {
        taskList.innerHTML = '';

        tasks.forEach((task, index) => {
            const taskItem = document.createElement('li');
            taskItem.innerHTML = `
                <span class="${task.isComplete ? 'completed' : 'incomplete'}" onclick="toggleTaskStatus(${index})">${task.text}</span>
            `;
            taskList.appendChild(taskItem);
        });
    }

    function toggleTaskStatus(index) {
        tasks[index].isComplete = !tasks[index].isComplete;
        renderTasks();
    }

    window.addTask = addTask;
    window.toggleTaskStatus = toggleTaskStatus;
});
