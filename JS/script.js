const successDragMessage = document.querySelector("#success-message")
const startDiv = document.querySelector("#container1")
const endDiv = document.querySelector("#container2")
const successRemoveMessage = document.querySelector("#success-remove-message")
const errorDropMessage = document.querySelector("#error-drop-message")

const elements = []

startDiv.childNodes.forEach((e,index)=>{
  e.draggable="true"
  e.id=`element${index}`
  e.addEventListener("dragstart", (e)=>drag(e))
  elements.push(e)
})

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  if(ev.target.id === 'container1' || ev.target.id === "container2")
  {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    successDragMessage.style.display="block"
    setTimeout(()=>{
      successDragMessage.style.display="none"
    },1000)
    return
  }
    errorDropMessage.style.display="block"
    setTimeout(()=>{
      errorDropMessage.style.display="none"
    },1000)
}

function reset(){
    endDiv.innerHTML = ""
    startDiv.innerHTML = ""
    elements.forEach(c=>{
      startDiv.appendChild(c)
    })
    successRemoveMessage.style.display = "block"
    setTimeout(()=>{
      successRemoveMessage.style.display="none"
    },1000)
}
