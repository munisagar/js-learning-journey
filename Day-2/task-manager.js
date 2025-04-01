const fs = require('fs');
const tasksFile = 'tasks.json';

// Load tasks
function loadTasks() {
    try {
        const data = fs.readFileSync(tasksFile, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

// Save tasks
function saveTasks(tasks) {
    fs.writeFileSync(tasksFile, JSON.stringify(tasks, null, 2));
}

// Add a new task
function addTask(task) {
    let tasks = loadTasks();
    tasks.push(task);
    saveTasks(tasks);
    console.log(`Task added: ${task}`);
}

// List all tasks
function listTasks() {
    let tasks = loadTasks();
    console.log('Tasks:');
    tasks.forEach((task, index) => console.log(`${index + 1}. ${task}`));
}

// Remove a task
function removeTask(index) {
    let tasks = loadTasks();
    if (index < 1 || index > tasks.length) {
        console.log('Invalid task number.');
        return;
    }
    const removed = tasks.splice(index - 1, 1);
    saveTasks(tasks);
    console.log(`Task removed: ${removed}`);
}

// CLI arguments
const [,, command, ...args] = process.argv;

if (command === 'add') {
    addTask(args.join(' '));
} else if (command === 'list') {
    listTasks();
} else if (command === 'remove') {
    removeTask(parseInt(args[0]));
} else {
    console.log('Usage: node task-manager.js add "task" | list | remove [index]');
}
