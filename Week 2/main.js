import { TaskManager } from './utils.js';
import { allTasks } from './data.js';

// DOM Manipulation
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

// Create a TaskManager instance
const taskManager = new TaskManager();

// Function to add a new task
async function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }
    else{
    await taskManager.addTask(taskText);
    renderTasks();
    alert('Task '+ taskText + ' added sucessfully');
    taskInput.value = '';
    }
}

// Function to render tasks
async function renderTasks() {
    taskList.innerHTML = '';
    const tasks = await taskManager.loadTasks();
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            ${task}
            <button class="delete">Delete</button>
        `;

        // Event listener for delete button
        taskItem.querySelector('.delete').addEventListener('click', async () => {
            await taskManager.removeTask(index);
            renderTasks();
        });

        taskList.appendChild(taskItem);
    });
}

// Event Handling
addTaskButton.addEventListener('click', addTask);

// Initial load
renderTasks();

// Array Methods and Spread Operator
console.log('All tasks:', allTasks);

// Functions as Values
const operations = [
    { name: 'Add Task', func: addTask },
    { name: 'Render Tasks', func: renderTasks }
];

operations.forEach(operation => {
    console.log(`${operation.name} function is available.`);
});

// Functions within Functions
function outerFunction(x) {
    function innerFunction(y) {
        return x + y;
    }
    return innerFunction(10);
}

console.log(`Result of inner function: ${outerFunction(5)}`);

// Control Structures
if (allTasks.length > 5) {
    console.log('There are more than 5 tasks.');
} else {
    console.log('There are 5 or fewer tasks.');
}
