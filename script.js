let input = document.getElementById("taskInput");
let button = document.getElementById("addBtn");
let list = document.getElementById("taskList");
function addTask() {
    let text = input.value;
    if (text === "") {
        alert("Please enter a task");
        return;
    }
    let li = document.createElement("li");
    li.innerText = text;
    let doneBtn = document.createElement("button");
    doneBtn.innerText = "Done";
    doneBtn.onclick = function () {
        li.style.textDecoration = "line-through";
    };

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.onclick = function () {
        li.remove();
    };
    li.appendChild(doneBtn);
    li.appendChild(delBtn);
    list.appendChild(li);
    input.value = "";
}
button.onclick = addTask;