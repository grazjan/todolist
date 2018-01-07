var addSection = document.getElementById("add-section");
var addBtn = document.getElementById("add-btn");

addBtn.addEventListener("click", showAddSection);
function showAddSection(){
    addSection.style.display = "block";
}

var goBackBtn = document.getElementById("go-back");

goBackBtn.addEventListener("click", closeAddSection);
function closeAddSection(){
    addSection.style.display = "none";
}

//Show menu
var menuBtn = document.getElementById("menu");
var navSection = document.getElementById("nav");
menuBtn.addEventListener("click", showMenu);

function showMenu(){
    if(navSection.style.display === "block"){
        navSection.style.display = "none";
    }
    else {
        navSection.style.display = "block";
    }
}



//Todo list functionality

//Events listeners...
var addItemBtn = document.getElementById("adding-item");
addItemBtn.addEventListener("click", addItem);

var todos = [];

function addItem(){
    
    //Adding item to todos Array...
    var itemInput = document.getElementById("item");
    //todos.push(itemInput.value);
    
    //Check if input is empty
    if(itemInput.value == ""){
        alert("Input field cannot be empty!")
        return;
    }
    
    localStorage.setItem("todo", itemInput.value);
    
    
    //Closing AddSection
    closeAddSection();
    
    //Creating elements;
    var liEl = document.createElement("li");
    var divEl = document.createElement("div");
    var ulEl = document.getElementById("todo-list");
    
    ulEl.insertBefore(liEl, ulEl.firstChild);
    
    
    
   /* for(var i = 0; i < todos.length; i++) {
        liEl.textContent = todos[i];
        liEl.appendChild(divEl);
    }*/
    
    liEl.textContent = localStorage.todo;
    liEl.appendChild(divEl);
    
    divEl.id = "buttons-box";
    divEl.appendChild(buttons.checkBtn());
    divEl.appendChild(buttons.deleteBtn());
    
    //Clear input
    itemInput.value = "";

}

function deleteItem(){
    
    var deleteButton = document.getElementById("remove-btn");
    this.parentNode.parentNode.remove()
    
    //Deleting from array
    todos.splice(this.parentNode.value, 1);
    
    showCompleteHeader();
    
} 

function completeItem(){

    var ulEl = this.parentNode.parentNode.parentNode;
    var liEl = this.parentNode.parentNode;
    
    
    if(ulEl.id == "todo-list"){
        var el = document.getElementById("completed-list");
    }
    else {
        var el = document.getElementById("todo-list");
    }
    
    ulEl.removeChild(liEl);
    el.insertBefore(liEl, el.firstChild);
    
    showCompleteHeader();
    
}

function showCompleteHeader(){
    
    var completedSection = document.getElementById("completed-section");
    var completedList = document.getElementById("completed-list");    
    
    if(completedList.hasChildNodes()){
        completedSection.style.display = "block";
    }
    else {
        completedSection.style.display = "none";
    }
}

var buttons = {
    
    checkBtn: function(){
        var iEl = document.createElement("i");
        iEl.className = "fa fa-check";
        iEl.id = "check-btn";
        
        iEl.addEventListener("click", completeItem);
        
        return iEl;
    },
    deleteBtn: function(){
        var iEl = document.createElement("i");
        iEl.className = "fa fa-trash";
        iEl.id = "remove-btn";
        
        iEl.addEventListener("click", deleteItem);
        
        return iEl;
    }
    
}









