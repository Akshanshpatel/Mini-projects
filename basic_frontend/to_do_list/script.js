document.addEventListener('DOMContentLoaded',()=>{
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
let tasks =JSON.parse(localStorage.getItem("tasks")) || [];

tasks.forEach(task => renderTask(task));

addButton.addEventListener('click', function () {
    const Tasktext = todoInput.value.trim();
    if (Tasktext == "") return;

    const newTask = {
        id: Date.now(),
        text: Tasktext,
        completed: false,
    };
    tasks.push(newTask);
    saveTask();
    renderTask(newTask);
    todoInput.value = "";
    console.log(tasks);
});

function renderTask(task){
    const li=document.createElement("li");
    li.setAttribute("data-id",task.id);
    li.innerHTML=`
    <span>${task.text}</span>
    <button>delete</button>
    `;

    li.querySelector('button').addEventListener('click',(e)=>{
        tasks=tasks.filter((t)=>t.id!==task.id);
        li.remove();
        saveTask();
    })

    todoList.appendChild(li);
}

function saveTask(){
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

})