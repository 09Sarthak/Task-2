
function ADDtask(){
    const NEWtask =document.createElement('li');
    const list= document.getElementById('List');
    list.appendChild(NEWtask)
    NEWtask.textContent = document.getElementById("inputTask").value
    document.getElementById("inputTask").value =""
    deleteTask(NEWtask)
}

function deleteTask(NEWtask){
    const deleteBTN = document.createElement("button")
    deleteBTN.textContent ="Delete"
    NEWtask.appendChild(deleteBTN)
    deleteBTN.onclick = function()
    {
        NEWtask.remove()
    }
}