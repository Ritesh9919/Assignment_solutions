function addTask() {
    const taskText = document.getElementById("task-input").value;
    if (taskText.trim() === "") {
        alert("Task text cannot be empty.");
        return;
    }

    const task = document.createElement("div");
    task.className = "task";
    task.textContent = taskText;
    task.setAttribute("draggable", "true");
    task.setAttribute("ondragstart", "drag(event)");

    document.getElementById("do-tab").appendChild(task);
    document.getElementById("task-input").value = "";
}

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.textContent);
}

function drop(event, targetTabId) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const task = document.createElement("div");
    task.className = "task";
    task.textContent = data;
    task.setAttribute("draggable", "true");
    task.setAttribute("ondragstart", "drag(event)");
    document.getElementById(targetTabId).appendChild(task);
    event.target.remove();
}