
//[part 1: Implimentation]

//variables
const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const taskInput = document.getElementById('input-task');
const mainContainer = document.querySelector('.main-container');

//conrolling overflow. Learn new key words(scrollHeight,clientHeight)
function checkOverflow() {
    if (mainContainer.scrollHeight > mainContainer.clientHeight) {
        mainContainer.style.overflowY = 'scroll';
    } else {
        mainContainer.style.overflowY = 'hidden';
    }
}

//Main task adding
addTask.addEventListener('click', function() {

    //1 div creation
    let collectedTaskContainer = document.createElement('div');
    collectedTaskContainer.classList.add('task-con');

    //Under div first child li(name of task)

    let li = document.createElement('li');
    li.innerText = `${taskInput.value}`; //taking task from taskInput

    collectedTaskContainer.appendChild(li); //attaching to div
    
    let checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fas fa-check"></i>'; //setting icon under button
    checkButton.classList.add('checking'); //adding css class to button

    collectedTaskContainer.appendChild(checkButton); //attaching to div

    let trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash-can"></i>'; //setting icon under button
    trashButton.classList.add('delete'); //adding css class to button

    collectedTaskContainer.appendChild(trashButton); //attaching to div

    if (taskInput.value === "") {
        alert("Please Enter the Task"); //if task is empty and we click add button then it well throw alert msg
    } else {

        taskContainer.appendChild(collectedTaskContainer);  //attching div to parent div(task-container)

        saveTaskToLocalStorage(taskInput.value); // Save task to Local Storage  [Local Storage Part]
    }
  
    taskInput.value = ""; //When task is add the input section set to empty string


    checkButton.addEventListener('click', function(){
        // li.style.textDecorationLine = 'line-through';
        //OR
        li.classList.toggle('line');  //when we click on check button the task get cut line on it
    });

    // trashButton.addEventListener('click',function(e){
    //      e.stopPropagation();
    //      let target = e.target;
    //      target.parentElement.remove();
    //      checkOverflow();
    // }); //it it useful in complex app note: it have problem dont use now

    //OR
    
    trashButton.addEventListener('click',function(){

        collectedTaskContainer.remove(); //when we click on trash button the add task part well be deleted total

        removeTaskFromLocalStorage(li.innerText); // Remove task from Local Storage  [Local Storage part]

           checkOverflow(); //checking for overflow
    });

    checkOverflow(); //checking for overflow
});

//[Creation of Local Storage]  Part 2
// Here is the traditional code of local storage in JavaScript:
// Store data
// localStorage.setItem('key', 'value');

// Read data
// let value = localStorage.getItem('key');

// Remove data
// localStorage.removeItem('key');

// Clear all data
// localStorage.clear();
// Load existing tasks from Local Storage when the page loads
window.addEventListener('load', function() {
    loadTasksFromLocalStorage();
});

function saveTaskToLocalStorage(task) {
    let tasks = getTasksFromLocalStorage();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTaskFromLocalStorage(task) {
    let tasks = getTasksFromLocalStorage();
    const index = tasks.indexOf(task);
    if (index !== -1) {
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}

function getTasksFromLocalStorage() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    return tasks;
}

function loadTasksFromLocalStorage() {
    let tasks = getTasksFromLocalStorage();
    tasks.forEach(function(task) {
        addTaskToUI(task);
    });
}

//[Part 3 : display the store data]

function addTaskToUI(task) {
    // Create a new task container
    //below part is same as above part1 div and task creation to show the shaved data on UI

    let taskContainer1 = document.createElement('div');
    taskContainer1.classList.add('task-con');

    let taskText = document.createElement('li');
    taskText.innerText = task;

    taskContainer1.appendChild(taskText);

    let checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fas fa-check"></i>';
    checkButton.classList.add('checking');

    taskContainer1.appendChild(checkButton);

    let trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash-can"></i>';
    trashButton.classList.add('delete');

    taskContainer1.appendChild(trashButton);
    
    //Buttons
    // Add event listener for checking
    checkButton.addEventListener('click', function() {
        taskText.classList.toggle('line');
    });

    // Add event listener for deleting
    trashButton.addEventListener('click', function() {
        taskContainer1.remove(); //when we click on trash button the add task part well be deleted total

        removeTaskFromLocalStorage(taskText.innerText); //remove from local storage

        checkOverflow(); //checking for overflow
    });

    // Append the new task container to the existing task container in the UI
    taskContainer.appendChild(taskContainer1);

    checkOverflow(); //checking for overflow
}
