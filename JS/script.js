// Declaring all the required DOM elements

const successDragMessage = document.querySelector("#success-message")
const startDiv = document.querySelector("#container1")
const endDiv = document.querySelector("#container2")
const successRemoveMessage = document.querySelector("#success-remove-message")
const errorDropMessage = document.querySelector("#error-drop-message")

// This array is populated by the elements of startDiv for restoring original state
const elements = []


// adding draggable property and setting event listeners for drag event
// Populating elements for reset function

startDiv.childNodes.forEach((e,index)=>{
  e.draggable="true"
  e.id=`element${index}`
  e.addEventListener("dragstart", (e)=>drag(e))
  elements.push(e)
})


// This function prevents the default action of browser and allows us to drop the dragged items 
function allowDrop(ev) {
  ev.preventDefault();
}

// This function sets the id for draggable element 
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}



//Checks for dropping at right container
function drop(ev) {
  if(ev.target.id === 'container1' || ev.target.id === "container2")
  {
    ev.preventDefault();

//Appending the dragged element as child to target container
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

//Firing success notification
    successDragMessage.style.display="block"
    setTimeout(()=>{
      successDragMessage.style.display="none"
    },1000)
    return
  }

//Firing error notification when dropping at wrong container
    errorDropMessage.style.display="block"
    setTimeout(()=>{
      errorDropMessage.style.display="none"
    },1000)
}


function reset(){

//Empty both containers
    endDiv.innerHTML = ""
    startDiv.innerHTML = ""

//Populate startDiv for original state
    elements.forEach(c=>{
      startDiv.appendChild(c)
    })

//Fire success message
    successRemoveMessage.style.display = "block"
    setTimeout(()=>{
      successRemoveMessage.style.display="none"
    },1000)
}
