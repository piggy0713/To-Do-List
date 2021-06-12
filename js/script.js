const taskInput = document.querySelector(".taskInput");
const taskBtn = document.querySelector(".taskBtn");
const taskList = document.querySelector(".taskList");

taskBtn.addEventListener("click", addTask);
taskList.addEventListener("click", delete_complete);

function addTask(e) {
  console.log("test");
  e.preventDefault();
  //new task Div
  const newTaskDiv = document.createElement("div");
  newTaskDiv.classList.add("tasks");
  //new task li
  const newTask = document.createElement("li");
  newTask.innerText = taskInput.value;
  newTask.classList.add("taskItem");
  newTaskDiv.appendChild(newTask);
  if (taskInput.value === "") {
    return null;
  }

  //add check icon to task
  const completeBtn = document.createElement("button");
  completeBtn.innerHTML = '<i class="fas fa-check"></i>';
  completeBtn.classList.add("completeBtn");
  newTaskDiv.appendChild(completeBtn);
  //add delete icon to task
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
  deleteBtn.classList.add("deleteBtn");
  newTaskDiv.appendChild(deleteBtn);
  //append to the page
  taskList.appendChild(newTaskDiv);
  //clear input value
  taskInput.value = "";
}

function delete_complete(e) {
  const taskItem = e.target;

  //delete task
  if (taskItem.classList[0] === "deleteBtn") {
    const taskTarget = taskItem.parentElement;
    taskTarget.remove();
  }

  //complete task
  if (taskItem.classList[0] === "completeBtn") {
    const taskTarget = taskItem.parentElement;
    taskTarget.classList.toggle("completeTask");
  }
}
