var UI = {};
var myMessages = [];
var theMessageToBeSaved = "";

class Message {
    constructor(name, email, message) {
        this.name = name;
        this.email = email;
        this.message = message;
        this.user = 'JohnnyJ';
    }
}

// ---call functions---
function fetchMessages() {
    $.ajax({
        type: "GET",
        url: "/API/GetMessages",
        success: function (messageData) {
            console.log(messageData);
            for (let i = 0; i < messageData.length; i++) {
                let message = messageData[i];
                console.log(message);
                myMessages.push(message);
            }
        },
        error: function (errDetails) {
            console.error(errDetails);
            console.log("There was an error, fuck!")
        }
    });
}

function sendNewMessage() {
    $.ajax({
        type: "POST",
        url: "/API/SaveMessage",
        data: JSON.stringify(theMessageToBeSaved),
        contentType: 'application/json',
        success: function (res) {
            clearForm();
            $("#alertSuccess").removeClass('hide');
            setTimeout(function () {
                $("#alertSuccess").addClass('hide');
            }, 3000);
            fetchMessages();
        },
        error: function (error) {
            console.log("Error", error)
            $("#alertError").removeClass('hide');
            setTimeout(function () {
                $("#alertError").addClass('hide');
            }, 3000);
        }
    });
}

// --validations--
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

// Regex for email validation
function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

// /validations

function clearForm() {
    $("#txtName, #txtEmail, #txtMessage").val("");
}

function saveMessage() {
    console.log("start sendMessage function")
    var name = UI.name.val();
    var email = UI.email.val();
    var message = UI.message.val();
    if (validateInput()) {
        theMessageToBeSaved = new Message(name, email, message);
        $("#alertSuccess").removeClass('hide');
        setTimeout(function () {
            $("#alertSuccess").addClass('hide');
        }, 3000);
        sendNewMessage();
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
    fetchMessages();
    //hook events
    $('#btnContact').click(saveMessage);
    $('#txtName, #txtEmail, #txtMessage').keypress("keypress", function (e) {if (e.which == 13) {saveMessage();}});
    $('#txtName, #txtEmail, #txtMessage').on("input", liveValidation);
}

window.onload = init;