document.addEventListener("DOMContentLoaded", function(){
    //access local storage
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


    displayTasks();
})

//create function to add task

function addTask(){
    const taskInput = document.getElementById("TodoInput");
    const taskList = document.getElementById("TaskList");
    const taskText = taskInput.value;

    if (taskText !== ""){
        const li = document.createElement("li");
        li.innerHTML = '<input type="text" value="' + taskText + '" readonly>' +
        `<button onClick = "deleteTask(this)">Delete</button>`;
        taskList.appendChild("li");
        taskInput.value = ""; 
    }
}

//delete task element
function deleteTask (){
    const taskList = document.getElementById("TodoList")
    const li = element.parentNode;
    taskList.removeChild(li)
}
//store and retrieve tasks from local storage
const storeTasks = localStorage.getItem('tasks');
if(storeTasks){
    tasks = JSON.parse(storeTasks);
    tasks.forEach(task=> addTask(task));
}

window.addEventListener('beforeunload', () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
});