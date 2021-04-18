var UI = {};

class Message {
    constructor(name, email, message) {
        this.name = name;
        this.email = email;
        this.message = message;
        this.user = 'JohnnyJ';
    }
}

//validations for contactus form
function validateInput() {
    console.log("start validation function")
    var name = UI.name.val();
    var email = UI.email.val();
    var message = UI.message.val();

    if (name.length < 3) {
        $("#alertName").removeClass('hide');
        setTimeout(function () {
            $("#alertName").addClass('hide');
        }, 3000);
        return false;
    }

    if (emailIsValid(email) == false) {
        console.log(email + " is not a valid email");
        $("#alertEmail").removeClass('hide');
        setTimeout(function () {
            $("#alertEmail").addClass('hide');
        }, 3000);
        return false;
    } else {
        console.log(email + " is a valid email")
    }

    if (message.length < 5) {
        $("#alertMessage").removeClass('hide');
        setTimeout(function () {
            $("#alertMessage").addClass('hide');
        }, 3000);
        return false;
    }
    console.log("Successfully validated!")
    return true;
}

function liveValidation() {
    var name = UI.name.val();
    var email = UI.email.val();
    var message = UI.message.val();

    if (name.length < 3) {
        $("#txtName").addClass('border-danger');
        return;
    } else {
        setTimeout(function () {
            $("#txtName").removeClass('border-danger');
        }, 1000);
    }

    if (emailIsValid(email) == false) {
        $("#txtEmail").addClass('border-danger');
        return;
    } else {
        setTimeout(function () {
            $("#txtEmail").removeClass('border-danger');
        }, 1000);
    }

    if (message.length < 5) {
        $("#txtMessage").addClass('border-danger');
        return;
    } else {
        setTimeout(function () {
            $("#txtMessage").removeClass('border-danger');
        }, 1000);
    }
    return true;
}

// Regex for validating email syntax
function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

// /validations

function sendMessage() {
    console.log("start sendMessage function")
    var name = UI.name.val();
    var email = UI.email.val();
    var message = UI.message.val();
    if (validateInput()) {
        saveMessage = new Message(name, email, message);
        console.log(saveMessage);
        $("#alertSuccess").removeClass('hide');
        setTimeout(function () {
            $("#alertSuccess").addClass('hide');
        }, 3000);
    } else {
        console.log("Send message unsuccessful");
        $("#alertError").removeClass('hide');
        setTimeout(function () {
            $("#alertError").addClass('hide');
        }, 3000);
        return;
    };
    console.log("Sendmessage completed")
}

function init() {
    UI.name = $('#txtName');
    UI.email = $('#txtEmail');
    UI.message = $('#txtMessage');

    //load data
    //fetchTasks();
    //hook events
    $('#btnContact').click(sendMessage);
    $('#txtName, #txtEmail, #txtMessage').keypress("keypress", function (e) {
        if (e.which == 13) {
            sendMessage();
        }
    });
    $('#txtName, #txtEmail, #txtMessage').on("input", liveValidation);
}

window.onload = init;