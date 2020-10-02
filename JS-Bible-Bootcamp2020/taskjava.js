const form = document.getElementById("task-form");
const taskList = document.querySelector('collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

//Load all event listeners
function loadEventListeners(){

    //Add event task
    form.addEventListener('submit', addtask);

}

//Add task
function addtask(e){



    e.preventDefault()

}
