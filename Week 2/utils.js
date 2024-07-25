// Variables
const LOCAL_STORAGE_KEY = 'tasks';

// Local Storage is a web storage API provided by browsers that 
// allows you to store data locally on the user's computer.
// Key-Value Storage: Data is stored as key-value pairs, where both the key and value are strings.

// Function to get tasks from local storage
const getTasksFromLocalStorage = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
            resolve(tasks);
        }, 1000); // Simulating async operation
    });
};

// Function to save tasks to local storage
const saveTasksToLocalStorage = async (tasks) => {
    await new Promise((resolve) => setTimeout(resolve, 500)); // Simulating async operation
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
};

// Class for task operations
class TaskManager {
    constructor() {
        this.tasks = [];
    }

    async loadTasks() {
        this.tasks = await getTasksFromLocalStorage();
        return this.tasks;
    }

    async saveTasks() {
        await saveTasksToLocalStorage(this.tasks);
    }

    addTask(task) {
        this.tasks.push(task);
        return this.saveTasks();
    }

    removeTask(index) {
        this.tasks.splice(index, 1);
        return this.saveTasks();
    }
}

// Exporting functions and class
export { getTasksFromLocalStorage, saveTasksToLocalStorage, TaskManager };
