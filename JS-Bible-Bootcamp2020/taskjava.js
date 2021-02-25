const form = document.getElementById("task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all event listeners
loadEventListeners();

//Load all event listeners
function loadEventListeners() {
  //Add event task
  form.addEventListener("submit", addTask);
  taskList.addEventListener("click", removeTask);
  clearBtn.addEventListener("click", clearTask);
  filter.addEventListener("keyup", filterTasks);
}

//Filter Tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll(".collection-item").forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}

//Add task
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task");
  }

  //Create li element
  const li = document.createElement("li");

  li.className = "collection-item";

  //Create text node to append child
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement("a");
  //ADD class
  link.className = "delete-item secondary-content";
  // ADD icon html
  link.innerHTML = '<i class="fa fa-remove"></li>';
  //Appned the link to li
  li.appendChild(link);

  //Append li to ul
  taskList.appendChild(li);
  console.log(li);

  //Clear Input
  taskInput.value = "";

  e.preventDefault();
}

//Remove task
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

//claer all task
function clearTask(e) {
  taskList.innerHTML = "";
}
