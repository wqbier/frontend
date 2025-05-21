let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const completedCount = document.getElementById("completedCount");
const pendingCount = document.getElementById("pendingCount");

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateCounters() {
  const completed = tasks.filter((t) => t.completed).length;
  const pending = tasks.length - completed;
  completedCount.textContent = `Виконано: ${completed}`;
  pendingCount.textContent = `Невиконано: ${pending}`;
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    if (task.completed) li.classList.add("completed");

    const span = document.createElement("span");
    span.textContent = task.text;
    span.onclick = () => {
      tasks[index].completed = !tasks[index].completed;
      saveTasks();
      renderTasks();
    };

    const editBtn = document.createElement("button");
    editBtn.textContent = "Редагувати";
    editBtn.className = "action-btn edit";
    editBtn.onclick = () => {
      const newText = prompt("Редагувати завдання:", task.text);
      if (newText) {
        tasks[index].text = newText;
        saveTasks();
        renderTasks();
      }
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Видалити";
    deleteBtn.className = "action-btn delete";

    deleteBtn.onclick = () => {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    };

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });

  updateCounters();
}

addBtn.onclick = () => {
  const text = taskInput.value.trim();
  if (text !== "") {
    tasks.push({ text, completed: false });
    taskInput.value = "";
    saveTasks();
    renderTasks();
  }
};

renderTasks();
