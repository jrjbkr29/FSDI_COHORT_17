var UI = {};


//validations for contactus form
function contactMessage(){
    var name = UI.name.val();
    var description = UI.email.val();
    var dueDate = UI.message.val();
    if(name.length < 1 ) {
        // show an error
        $("#alertTitle").removeClass('hide');
        
        // use a 1 time timer
        setTimeout(function() {
            $("#alertTitle").addClass('hide');
        }, 8000); // 2 ->time in milliseconds

        // do not continue exec
        return;
    }

    let descLength = description.length;
    if(descLength >= 1 && descLength <= 3) {
        $("#alertDesc").removeClass('hide');
        setTimeout(function() {
            $("#alertDesc").addClass('hide');
        }, 8000); 

        return;

    }

}

function init() {
    UI.name = $('#txtName');
    UI.email = $('#txtEmail');
    UI.message = $('#txtMessage');

    //load data

    //fetchTasks();


    //hook events
    $('#btnContact').click(contactMessage);
}