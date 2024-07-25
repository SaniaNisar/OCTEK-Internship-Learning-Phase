// Object with properties
const initialData = {
    tasks: ['Buy groceries', 'Walk the dog']
};

// Destructuring object
const { tasks } = initialData;

// Spread Operator
const additionalTasks = ['Read a book', 'Go to the gym'];
const allTasks = [...tasks, ...additionalTasks];

// Exporting data
export { allTasks };
