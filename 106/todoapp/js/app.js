function saveToDo() {
    console.log("Clicked!")
    // get the text from the input field
    var todo = $('#todotext').val();
    // create DOM element
    var syntax = "<></><li class=list-group-item>" + todo + "</li>";
    $('#pendingTodos').append(syntax);

    // clear the text
    $('#todotext').val(" ").focus();
}

function init() {
    console.log("Todo App");

    // hook events
    $('#btnSave').click(saveToDo);
    $('#todotext').keypress(function (e) {
        if (e.key === "Enter") {
            saveToDo();
        }
    });
}



window.onload = init;