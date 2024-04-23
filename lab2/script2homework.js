"use strict";

const taskToDo = () => { 

    const task = document.getElementById("task");
   
    if(task.value === ""){

        console.log("Pole nie może zostać puste!")
        const modal = document.getElementsByTagName("dialog")[0];
        modal.showModal();
        modal.addEventListener("click", () =>{
            modal.close();
        })
        return;
    }
   

    const now = new Date();
    const currentDateTime = now.toLocaleString();
    const listItem = document.createElement("li");
    listItem.innerText = `${task.value}`;


    const deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButton.onclick = function() {
        lastRemovedListItem = listItem;
        listItem.remove();
    };
    listItem.appendChild(deleteButton);


    listItem.addEventListener("click", ()=>{
        makeTaskDone(listItem, 'gray');
    });
    const theList= document.getElementById("unordered-list");
    
    theList.append(listItem); 
}

var lastRemovedListItem = null;

const returnItem = () => {
    if (lastRemovedListItem != null) {
        const list = document.getElementById("unordered-list");
        list.insertBefore(lastRemovedListItem, list.childNodes[0]);
        const returnButton = document.getElementById("return-button");
        returnButton.className = "return-button-disable";
        makeTaskDone(lastRemovedListItem, 'gray');
        lastRemovedListItem = null;

    }
};

const makeTaskDone = (element, clr) => {
    const now = new Date();
    const currentDateTime = now.toLocaleString();
    if(element.style.color === clr){
        element.style.color = 'black';
        element.style.textDecoration = "none";
        element.removeChild(element.lastChild);
    }
    else{ 
        
        element.style.color = clr;
        element.style.textDecoration = "line-through";
        const date = document.createElement("p");
        date.innerText = currentDateTime;
        date.style.color = 'black';
        date.style.textDecoration = 'none';
        element.appendChild(date);
    }
}







//getbootstrap