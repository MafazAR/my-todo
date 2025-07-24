const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

const editDialog = document.getElementById("editDialog");
const editTaskInput = document.getElementById("editTaskInput");
const saveEditBtn = document.getElementById("saveEditBtn");
const cancelEditBtn = document.getElementById("cancelEditBtn");

let taskToEdit = null;

addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("complete-checkbox");

    const span = document.createElement("span");
    span.textContent = taskText;
    span.classList.add("task-text");

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(removeBtn);

    taskList.appendChild(li);
    taskInput.value = "";
});

taskList.addEventListener("click", (e) => {
    if (e.target.classList.contains("edit-btn")) {
        taskToEdit = e.target.previousSibling;
        editTaskInput.value = taskToEdit.textContent;
        editDialog.style.display = "block";
    } else if (e.target.classList.contains("remove-btn")) {
        e.target.parentElement.remove();
    } else if (e.target.classList.contains("complete-checkbox")) {
        const text = e.target.nextSibling;
        text.classList.toggle("completed", e.target.checked);
    }
});

saveEditBtn.addEventListener("click", () => {
    if (taskToEdit) {
        taskToEdit.textContent = editTaskInput.value.trim();
    }
    editDialog.style.display = "none";
    taskToEdit = null;
});

cancelEditBtn.addEventListener("click", () => {
    editDialog.style.display = "none";
    taskToEdit = null;
});

window.addEventListener("click", (e) => {
    if (e.target === editDialog) {
        editDialog.style.display = "none";
        taskToEdit = null;
    }
});
