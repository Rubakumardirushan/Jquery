$('document').ready(function() {

$('#addtask').click(function() {
   
    var task = $('#taskInput').val();

    if(task){
        $('#tasklist').append('<li class="list-group-item">' + task + '</li>');
        $('#taskInput').val('');
    }
});

});