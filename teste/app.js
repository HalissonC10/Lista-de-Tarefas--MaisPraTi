document.addEventListener("DOMContentLoaded", loadTasks);

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((task) => renderTask(task));
}

function renderTask(task) {
    const taskList = document.getElementById("taskList");
    const taskItem = document.createElement("li");
    taskItem.className = "list-group-item d-flex justify-content-between align-items-center";
    taskItem.innerHTML = `
        <input type="checkbox" ${task.completed ? "checked" : ""} onclick="toggleComplete('${task.id}')" class="mr-2">
        <span class="${task.completed ? "text-muted text-decoration-line-through" : ""}">${task.name}</span>
        <button onclick="editTask('${task.id}')" class="btn btn-warning btn-sm ml-2">Edit</button>
        <button onclick="deleteTask('${task.id}')" class="btn btn-danger btn-sm ml-2">Delete</button>
    `;
    taskList.appendChild(taskItem);
}

function addTask() {
    const taskInput = document.getElementById("taskInput");
    if (!taskInput.value) return;

    const newTask = {
        id: Date.now().toString(),
        name: taskInput.value,
        completed: false,
    };

    saveTask(newTask);
    renderTask(newTask);
    taskInput.value = "";
}

function saveTask(task) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function toggleComplete(taskId) {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const task = tasks.find((t) => t.id === taskId);
    task.completed = !task.completed;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    document.getElementById("taskList").innerHTML = "";
    loadTasks();
}

function editTask(taskId) {
    const taskName = prompt("Edit task:");
    if (!taskName) return;

    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const task = tasks.find((t) => t.id === taskId);
    task.name = taskName;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    document.getElementById("taskList").innerHTML = "";
    loadTasks();
}

function deleteTask(taskId) {
    const tasks = JSON.parse(localStorage.getItem("tasks")).filter((task) => task.id !== taskId);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    document.getElementById("taskList").innerHTML = "";
    loadTasks();
}
