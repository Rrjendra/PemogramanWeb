function addTask() {
  const taskInput = document.getElementById("todo-input");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const todoList = document.getElementById("todo-list");

    const li = document.createElement("li");
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    // Create Edit Button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-btn");
    editButton.onclick = () => editTask(taskSpan, editButton, li);

    // Create Delete Button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => deleteTask(li);

    li.appendChild(taskSpan);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    todoList.appendChild(li);
    taskInput.value = ""; // Clear input after adding the task
  } else {
    alert("Please enter a task!");
  }
}

function deleteTask(taskItem) {
  taskItem.remove();
}

function editTask(taskSpan, editButton, li) {
  const currentText = taskSpan.textContent;
  const input = document.createElement("input");
  input.type = "text";
  input.value = currentText;

  const saveButton = document.createElement("button");
  saveButton.textContent = "Save";
  saveButton.classList.add("save-btn");

  // Handle the saving process
  saveButton.onclick = () =>
    saveTask(taskSpan, input, editButton, saveButton, li);

  taskSpan.replaceWith(input);
  editButton.replaceWith(saveButton);
}

function saveTask(taskSpan, input, editButton, saveButton, li) {
  const updatedText = input.value.trim();

  if (updatedText !== "") {
    taskSpan.textContent = updatedText;
    input.replaceWith(taskSpan);
    saveButton.replaceWith(editButton);
  } else {
    alert("Task cannot be empty!");
  }
}
