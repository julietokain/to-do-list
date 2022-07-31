const todo = document.getElementsByClassName("todo-list")[0];
const pencil = document.getElementById("pencil");
const allTask = document.getElementById("allTask");
const userInput = document.getElementById("userInput");

pencil.addEventListener("click", function(){
    allTask.innerHTML ="";
})

userInput.addEventListener("keydown", function(event){
    if(event.key == "Enter")
    addItem();
})

function addItem(){
    var h2 = document.createElement("h2");
    h2.innerHTML ="- " + userInput.value;

    h2.addEventListener("click", function(){
        h2.style.textDecoration = "line-through"
    })

    allTask.insertAdjacentElement("beforeend", h2);

    userInput.value = "";
}

