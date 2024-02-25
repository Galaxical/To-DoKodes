//user input task
function addTask() {
    const taskInput = document.getElementById("todoInput");
    const taskList = document.getElementById("todoList");
    const taskText = taskInput.value;

    //create input from user
      if (taskText !== "") {
        const li = document.createElement("li")
        li.innerHTML = '<input type="text" value="' + taskText + '" readonly>' +
        '<button onclick="deleteTask(this)">Delete</button>';
        taskList.appendChild(li);
        taskInput.value = "";
      }
    }
    
    //user delete tasks
    function deleteTask(element) {
        const taskList = document.getElementById("todoList");
        const li = element.parentNode;
        taskList.removeChild(li);
    }

