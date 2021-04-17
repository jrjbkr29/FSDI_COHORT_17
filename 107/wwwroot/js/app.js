// --declarations--
var important = false;
var myTasks = [];
var UI = {};
var serverUrl = "";
var readOnlyVar = false;
var serverUrl = "";
var theTaskToBeSaved = "";
// --/declarations--

// ---call functions---
function fetchTasks() {
    $.ajax({
        type: "GET",
        url: "/API/GetTasks",
        success: function (data) {
            console.log(data)
            for (let i = 0; i < data.length; i++) {
                let task = data[i];
                if (task.user === "JohnnyJ") {
                    myTasks.push(task);
                    displayTask(task);
                }
            }
        },
        error: function (errDetails) {
            console.error(errDetails)
        }
    });
}

function sendNewTask() {
    $.ajax({
        type: "POST",
        url: "/API/savetask",
        data: JSON.stringify(theTaskToBeSaved),
        contentType: 'application/json',
        success: function (res) {
            displayTask(res);
            clearForm();
            console.log(res)
        },
        error: function (error) {
            console.log("Error", error)
        }
    });
}

function deleteTask(id) {
    console.log("Task delete request sent for ID: ", id);
    $.ajax({
        type: "DELETE",
        url: "API/deletetask/" + id,
        success: function () {
            console.log("Task deleted!");
            $("#" + id).toggle("explode", {
                pieces: 16
            }, 2000).remove();
        },
        // error: function (errDetails) {
        //     console.error(errDetails)
        // }
    });

}

function testAjax() {
    $.ajax({
        url: "",
        type: "GET",
        success: function (res) {
            console.log("Yeaay it worked!!", res)
        },
        error: function (error) {
            console.log("We have a problem :(", error)
        }
    });
}
// --/call functions--

// --event handlers--
function toggleImportant() {
    if (important) {
        $("#iconImp").removeClass('fas').addClass('far');
        important = false;
    } else {
        $("#iconImp").removeClass('far').addClass('fas');
        important = true;
    }
}

function closeDetails() {
    $('#closeDetailsButton').addClass('hide');
    $('#details').addClass('hide');
    $('#openDetailsButton').removeClass('hide');
    readOnlyVar = false;
    setReadOnly();
    clearForm();
}

function openDetails() {
    $('#closeDetailsButton').removeClass('hide');
    $('#openDetailsButton').addClass('hide');
    $('#details').removeClass('hide');
}

function validateInput() {
    var title = UI.title.val();
    var description = UI.description.val();
    var status = UI.status.val();
    let descLength = description.length;

    if (title.length < 3) {
        // show an error
        $("#alertTitle").removeClass('hide');
        // use a 1 time timer
        setTimeout(function () {
            $("#alertTitle").addClass('hide');
        }, 3000); // 2 ->time in milliseconds
        // do not continue exec
        return;
    }

    if (descLength > 1 && descLength < 5) {
        $("#alertDesc").removeClass('hide');
        setTimeout(function () {
            $("#alertDesc").addClass('hide');
        }, 3000);
        return;
    }

    if (status == null) {
        $("#alertStatus").removeClass('hide');
        setTimeout(function () {
            $("#alertStatus").addClass('hide');
        }, 3000);
        return;
    }
}


function displayRequiredInput() {
    var title = UI.title.val();
    var description = UI.description.val();
    var status = UI.status.val();

    if (title.length >= 3) {
        $("#txtTitle").removeClass('border-danger');
    } else {
        $("#txtTitle").addClass('border-danger');
        return;
    }

    let descLength = description.length;
    if (descLength < 1 || descLength >= 5) {
        $("#txtDescription").removeClass('border-danger');
    } else {
        $("#txtDescription").addClass('border-danger');
        return;
    }

    if (status !== null) {
        $("#selStatus").removeClass('border-danger');
    } else {
        $("#selStatus").addClass('border-danger');
    }
}

function taskClicked(id) {
    console.log("A task was clicked", id);
    for (i = 0; i < myTasks.length; i++) {
        let task = myTasks[i];
        if (task.id === id) {
            console.log("found it!", task);
            //show the info in the form
            let dueDate = task.dueDate.split("T", 1);
            UI.id.val(task.id);
            UI.title.val(task.title);
            UI.description.val(task.description);
            UI.dueDate.val(dueDate);
            UI.location.val(task.location);
            UI.alertText.val(task.alertText);
            UI.status.val(task.status);
            //show if its important
            important = !task.important;
            toggleImportant();
            // set the form to read-only and remove save task button
            readOnlyVar = true;
            setReadOnly();
            openDetails();
        }
    }
}
// --/event handlers--

// --UI functions--
function clearForm() {
    UI.id.val("");
    UI.title.val("");
    UI.description.val("");
    UI.dueDate.val("");
    UI.location.val("");
    UI.alertText.val("");
    UI.status.val("0")
    if (important) toggleImportant();
}

function setReadOnly() {
    if (readOnlyVar === true) {
        $('#txtTitle').prop("readonly", true);
        $('#txtDescription').prop("readonly", true);
        $('#txtDueDate').prop("readonly", true);
        $('#txtLocation').prop("readonly", true);
        $('#txtAlert').prop("readonly", true);
        $('#selStatus').prop("disabled", true);
        $('#btnSave').prop("disabled", true);
    } else {
        $('#txtTitle').prop("readonly", false);
        $('#txtDescription').prop("readonly", false);
        $('#txtDueDate').prop("readonly", false);
        $('#txtLocation').prop("readonly", false);
        $('#txtAlertText').prop("readonly", false);
        $('#selStatus').prop("disabled", false);
        $('#btnSave').prop("disabled", false);
    }
}

function displayTask(task) {
    let imp = "";
    if (task.important === 1) {
        imp = `<i id="iconImp" class="far fa-star"></i>`;
    } else {
        imp = "";
    }
    let dueDate = new Date(task.dueDate);
    let syntax =
        `<div id="${task.id}"onclick="taskClicked(${task.id});"class="task">
        <table>
        <tr><th span="3">${task.title}</th><th><button hidden onclick="deleteTask(${task.id});" class="deleteTaskButton">&#10006</button></th></tr>
        <tr><td colspan="3">Due: ${dueDate.toDateString()}</td></tr>
        <tr><td colspan="3">Alert: ${task.alertText}</td></tr>
        <tr><td colspan="3">Location: ${task.location}</td></tr>
        </table>
        <p>Description:<br>${task.description}</p>
    </div>`
    $("#pendingTasks").append(syntax);
}

function saveTask() {
    var title = UI.title.val();
    var description = UI.description.val();
    var dueDate = UI.dueDate.val();
    var location = UI.location.val();
    var alertText = UI.alertText.val();
    var status = UI.status.val();
    var serverUrl = "";
    //validate
    validateInput();
    theTaskToBeSaved = new Task(title, description, important, dueDate, location, alertText, status);
    console.log(theTaskToBeSaved);
    //save the task in the BE
    sendNewTask();
}
// --/UI functions--

function init() {
    console.log("Task Manager");
    UI.id = $('#txtId');
    UI.title = $('#txtTitle');
    UI.description = $('#txtDescription');
    UI.dueDate = $('#txtDueDate');
    UI.location = $('#txtLocation');
    UI.alertText = $('#txtAlertText');
    UI.status = $('#selStatus');
    //hook events
    $('#iconImp').click(toggleImportant).mouseenter(toggleImportant).mouseleave(toggleImportant);
    $('#btnSave').click(saveTask);
    $('#openDetailsButton').click(openDetails);
    $('#closeDetailsButton').click(closeDetails);
    $('#txtTitle').on("input", displayRequiredInput);
    $('#txtDescription').on("input", displayRequiredInput);
    $('#selStatus').on("input", displayRequiredInput);
}


window.onload = init;