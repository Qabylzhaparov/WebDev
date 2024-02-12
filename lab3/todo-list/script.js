const taskInput = document.querySelector("#new-todo");
const addTaskBtn = document.querySelector("#add-todo");
const taskList = document.querySelector("#list-todo");

let tasks = [];

const addTask = () => {
    if (taskInput.value === "") {
        alert("Error: Empty input");
        return;
    }
    tasks.push({ name: taskInput.value, done: false });
    renderTasks();
    taskInput.value = "";
};

const markTaskDone = (index) => {
    tasks[index].done = !tasks[index].done;
    renderTasks();
};

const renderTasks = () => {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskItem = document.createElement("li");
        taskItem.classList.add("task-item");
        taskItem.innerHTML =
            `<input type="checkbox" class="mark-done-btn" ${task.done ? "checked" : ""} />
      <div class="item ${task.done ? "done" : ""}">${task.name}</div>` +
            `<div class="delete-btn" onclick="deleteTask(${index})"><i class="fa-solid fa-trash"></i></div>`;
        taskItem.querySelector(".mark-done-btn").addEventListener("click", () => {
            markTaskDone(index);
        });
        taskList.appendChild(taskItem);
    });
};

const deleteTask = (index) => {
    tasks.splice(index, 1);
    renderTasks();
};

addTaskBtn.addEventListener("click", addTask);

renderTasks();