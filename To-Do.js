//declare constant variables for the user task input
const addNewTask = document.getElementById('New-Task');
const addNewTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('tasks');

let tasks = []

//create function to add task to list
function addTask(task){
    const taskItem = document.createElement('li');
    taskItem.textContent = task

    //function to create checkbox for UX

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        taskItem.classList.toggle('completed');
    });

    //function to create a delete button

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
        tasks = tasks.filter(t => t !== task);
    });

    //declare the inputs from the user

    taskItem.appendChild(checkbox);
    taskItem.appendChild(document.createTextNode(' '));
    taskItem.appendChild(task);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
    task.push(task);

    //get the value of new task 
    addNewTask.value = '';
    addNewTask.focus();
}