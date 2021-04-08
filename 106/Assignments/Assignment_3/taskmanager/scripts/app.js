var important = false;
var UI = {};
var serverUrl = "http://fsdi.azurewebsites.net/api";

function toggleImportant(){
    if(important){
        $("#iconImp").removeClass('fas').addClass('far');
        important = false;
    }
    else {
        $("#iconImp").removeClass('far').addClass('fas');
        important = true;
    }
    
}

function saveTask() {
    var title = UI.title.val();
    var description = UI.description.val();
    var dueDate = UI.dueDate.val();
    var location = UI.location.val();
    var alert = UI.alert.val();
    var status = UI.status.val();
    var serverUrl = "http://fsdi.azurewebsites.net/api";

    var theTaskToBeSaved = new Task(title, description, important, dueDate, location, alert, status);
    console.log(theTaskToBeSaved);

    //save the task in the BE
    $.ajax({
        url: serverUrl + "/tasks",
        type: "POST",
        data: JSON.stringify( theTaskToBeSaved ),
        contentType: 'application/json',
        success: function(res) {
            displayTask(res);
            console.log(res)
        },
        error: function(error) {
            console.log("Error", error)
        }
    });

}

function displayTask(task) {
    let imp = "";
    if (task.important === 1) {
        imp = `<i id="iconImp" class="far fa-star"></i>`;
    }
    else {
        imp = "";
    }
    let dueDate = task.dueDate.split("T", 1);
    let syntax = 
    `<div class="task">
        <table>
        <tr> <th>${imp}</th> <th>${task.title}</th> </tr>
        <tr> <td>Due:<br>${dueDate}</td> </tr>
        <tr> <td>Alert:<br>${task.alert}</td> <td>Location:<br> ${task.location}</td></tr>
        </table>
        <p>Description:<br>${task.description}</p>
    </div>`
    $("#pendingTasks").append(syntax);
}

function fetchTasks() {
    $.ajax({
        type: "GET",
        url: serverUrl + "/tasks",
        success: function( data ) {
            console.log(data)
            for(let i=0; i< data.length; i++){
                let task = data[i];
                if(task.user === "Johnny"){
                    displayTask(task);
                }
            }
        },
        error: function( errDetails ) {
            console.error(errDetails)
        }
    });
}

function init() {
    console.log("Task Manager");
    UI.id = $('#txtId');
    UI.title = $('#txtTitle');
    UI.description = $('#txtDescription');
    UI.dueDate = $('#txtDueDate');
    UI.location = $('#txtLocation');
    UI.alert = $('#txtAlert');
    UI.status = $('#selStatus');

    //load data
    fetchTasks();


    //hook events
    $('#iconImp').click(toggleImportant).mouseenter(toggleImportant).mouseleave(toggleImportant);
    $('#btnSave').click(saveTask);
}

function testAjax(){
    $.ajax({
        url: "https://restclass.azurewebsites.net/api/test",
        type: "GET",
        success: function( res ) {
            console.log("Yeaay it worked!!", res)
        },
        error: function( error ) {
            console.log("We have a problem :(", error)
        }
    });
}

window.onload = init;
