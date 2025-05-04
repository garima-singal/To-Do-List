console.log('everything set');
const input = document.getElementById("inputbox");
const addTaskButton = document.getElementById("add-task-button");
const listOfTasks = document.getElementById("task-list");
const clearAllButton = document.getElementById("clear-all");




function addTaskButtonFunction(){
    const taskText=input.value.trim();
    if(taskText===""){
        alert("Please enter a task!");
        return;
    } 

    const li =document.createElement("li");
    li.textContent=taskText;

    const doneButton = document.createElement("button");
    doneButton.textContent="Done";
    doneButton.addEventListener('click', function(){
        li.classList.toggle("completed");
     });

    const removeButton = document.createElement('button');
    removeButton.textContent="Remove";
    removeButton.addEventListener('click',function(){
        li.remove();
        } );
    
    li.appendChild(doneButton);
    li.appendChild(removeButton);

    listOfTasks.appendChild(li);
    input.value="";  

    
}

addTaskButton.addEventListener('click',addTaskButtonFunction);
input.addEventListener("keydown" , function(event){
    if(event.key==="Enter"){
        addTaskButton.click();
    }
});

clearAllButton.addEventListener("click",function(){
    const confirmClear = confirm("Are you sure you want to clear all tasks?");
    if(confirmClear){
        listOfTasks.innerHTML="";
    }
})

const editButton=document.createElement("button");
editButton.textContent="Edit";


console.log('everything set');
