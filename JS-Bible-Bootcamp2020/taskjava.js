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

    if(taskInput.value === '' ){
        alert('Add a task')
    }

    //Create li element
    const li = document.createElement('li');

    li.className = 'collection-item';

    //Create text node to append child
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    /**
     * //Typing
function updateValue(e){
    const insertedText = e.target.value;

    if(insertedText === randomWord) {
        addWordToDom();
        updateScore();
    //Clear the word
     e.target.value = '';

     if(difficulty === 'hard') {
         time += 2
     } else if (difficulty === 'medium') {
         time += 3
     } else if (difficulty === 'easy'){
         time += 5
     }

     console.log(insertedText)
     updateTime()
    }

}
     */






    e.preventDefault()

}



// <!DOCTYPE html>
// <html lang="en">

//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width,
//       initial-scale=1.0">
//         <meta http-equiv="X-UA-Compatible" content="ie=edge">
//         <link rel="stylesheet"
//             href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
//         <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"
//             integrity="sha384-wvfxpqpZZVQGKTAh5PV1GOfQNHSoD@xbE+QkPxCAFINEevoEH3S10sibVcOQVnN" crossorigin="anonymous">
//         <title>Task List</title>
//     </head>

//     <body>
//         <div class="container">
//             <div class="row">
//                 <div class="col s12">
//                     <div id="main" class="card">
//                         <div class="card-content">
//                             <span class="card-title">Check List</span>
//                             <div class="row">
//                                 <form id="task-form">
//                                     <div class="input-field col s12">
//                                         <input type="text" name="task" id="task">
//                                         <label for="task">New Check</label>
//                                     </div>
//                                     <input type="submit" value="Add Check" class="btn">
//                                 </form>
//                             </div>

//                         </div>
//                         <div class="card-action">
//                             <h5 id="task-title">Checks</h5>
//                             <div class="input-field col s12">
//                                 <input type="text" name="filter" id="filter">
//                                 <label for="filter">Filter Checks</label>
//                             </div>
//                             <ul class="collection"></ul>
//                             <a href="#" class="clear-tasks btn black"> Clear Checks</a>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>

//         <script src="https://code.jquery.com/jquery-3.2.1.js"
//             integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE=" crossorigin="anonymous"></script>
//         <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
//         <script src="36_persisttolocal.js"></script>
//     </body>

// </html>