function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("taskList");

    // Create a new list item
    let li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(li);
    taskInput.value = ""; // Clear input field
}
function deleteTask(button) {
    button.parentElement.remove(); // Removes the task
}
li.addEventListener("click", function () {
    this.classList.toggle("completed");
});
function saveTasks() {
    let tasks = [];
    document.querySelectorAll("#taskList li span").forEach(task => {
        tasks.push({ text: task.innerText, completed: task.parentElement.classList.contains("completed") });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function loadTasks() {
    let storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
        storedTasks.forEach(task => {
            let li = document.createElement("li");
            li.innerHTML = `
                <span>${task.text}</span>
                <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
            `;
            if (task.completed) {
                li.classList.add("completed");
            }
            li.addEventListener("click", function () {
                this.classList.toggle("completed");
                saveTasks(); // Save after toggling
            });
            document.getElementById("taskList").appendChild(li);
        });
    }
}

// Call loadTasks() when the page loads
window.onload = loadTasks;
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("taskList");
    let li = document.createElement("li");

    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;

    li.addEventListener("click", function () {
        this.classList.toggle("completed");
        saveTasks();
    });

    taskList.appendChild(li);
    taskInput.value = "";
    saveTasks(); // Save after adding a task
}

function deleteTask(button) {
    button.parentElement.remove();
    saveTasks(); // Save after deleting a task
}
