let taskList = document.getElementById("taskList").getElementsByTagName('tbody')[0];
let taskUserInput = document.getElementById("taskUserInput");
let addTaskButton = document.getElementById("addTaskRow");
let removeTaskButton = document.getElementById("removeTaskRow");

let taskCount = 1;

addTaskButton.addEventListener("click", () =>
{
    addTask();
});

removeTaskButton.addEventListener("click", () =>
{
    removeTask();
});

function addTask()
{
    if (taskUserInput.value != "")
    {
        
        let newRow = taskList.insertRow();
        newRow.id = `task-row-${taskCount}`;
        let newCell = newRow.insertCell();
        let newTaskRow = document.createElement("th");
        newTaskRow.innerHTML = `<tr>
                                    <h2 class="taskHeader">
                                        <input class="checkBox" id="taskCheckBox-${taskCount}" type="checkbox" onclick="toggleTask(this)">
                                        Task ${taskCount}:
                                    </h2>
                                    <p>
                                        <input class="taskValue" type="text" value="${taskUserInput.value}">
                                    </p>
                                </tr>`;
        taskCount++;
        newCell.appendChild(newTaskRow);
        taskUserInput.value = "";
    }
}

function removeTask()
{
    let lastChild = taskList.lastElementChild;
    let rowCheck = document.getElementById("inputRow");

    if (lastChild != rowCheck)
    {
        taskList.removeChild(lastChild);
        taskCount--;
    }
}

function toggleTask(checkbox)
{
    let taskList = document.querySelectorAll(".taskValue");
    let taskHeaders = document.querySelectorAll(".taskHeader");

    for (let i = 0; i < taskList.length; i++)
    {
        let checkBoxIdSplit = checkbox.id.split('-');

        let numberCheck = parseInt(checkBoxIdSplit[1]);

        if ((i + 1) == numberCheck)
        {
            if (checkbox.checked)
            {
                taskList[i].classList.add('check-box-crossout');
                taskHeaders[i].classList.add('header-crossout');
            }
            else
            {
                taskList[i].classList.remove('check-box-crossout');
                taskHeaders[i].classList.remove('header-crossout');
            }

            return;
        }
    }
}