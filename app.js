let taskList = document.getElementById("taskList");
let addTaskButton = document.getElementById("addTaskRow");
let removeTaskButton = document.getElementById("removeTaskRow");

let taskCount = 1;

addTaskButton.addEventListener("click", () =>
{
    let newTaskRow = document.createElement("th");
    newTaskRow.id = `task-row-${taskCount}`;

    newTaskRow.innerHTML = `<tr>
                                <th>
                                    <input type="checkbox">
                                    <input type="text" placeholder="Insert Task Here">
                                </th>
                            </tr>`;            
    taskCount++;

    taskList.appendChild(newTaskRow);

});