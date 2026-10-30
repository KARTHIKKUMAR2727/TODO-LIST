
function addTask() {
    let task = document.getElementById("task").value;

    if (task.trim() == "") {
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");

    let text = document.createTextNode(task + " ");

    let btn = document.createElement("button");
    btn.innerHTML = "Delete";
    btn.className = "delete";

    btn.onclick = function() {
        li.remove();
    };

    li.appendChild(text);
    li.appendChild(btn);

    document.getElementById("taskList").appendChild(li);

    document.getElementById("task").value = "";
}
