const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("List-container");
// console.log(listContainer)
function addTask(){
    if(inputBox.value === ''){
        alert("you must write something!");
    }
    else{
        const li = document.createElement('li');
        li.innerHTML = inputBox.value;
        // console.log(li)
        // li.classList.add("checked");
        listContainer.appendChild(li)
        // console.log(li)
        let span =document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    // saveData();
    saveData();

}
console.log(listContainer)
listContainer.addEventListener("click",function(e){
    console.log(listContainer);
    // console.log(e.target.tagName === 'LI');
    if(e.target.tagName === "LI"){

        e.target.classList.toggle("checked");
        // e.target.classList.

        // e.target.li.classList.add("checked")
        saveData();
    } 
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    
    }

},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();
        