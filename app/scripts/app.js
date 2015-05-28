$(document).ready(function(){


var listo = [];
var Task = function(task) {
	this.task = task;
	this.id = 'new';
}

var addTask = function(task) {
	if(task) {
		task = new Task(task);
		listo.push(task);
		console.log(task);

		$('#newItemInput').val('');

		$('#newList').append('<a href="#" class="" id="item"><li class="list-group-item">' + task.task + '<span class="arrow pull-right"><i class="glyphicon glyphicon-arrow-right"></span></li></a>');
	}
	$('#newTaskForm, #newListItem').fadeToggle('fast', 'linear');
};

var deleteTask = function(task) {
	if(task.id === 'archived'){
		$(task).remove();
	}
};


$('#newTaskForm').hide();

$('#saveNewItem').on('click', function(e) {
	e.preventDefault();
	var task = $('#newItemInput').val().trim();
	addTask(task);
});

//opens form
$('#newListItem').on('click', function() {
	$('#newTaskForm, #newListItem').fadeToggle('fast', 'linear');
});

//closes form
$('#cancel').on('click', function(e) {
	e.preventDefault();
	$('#newTaskForm, #newListItem').fadeToggle('fast', 'linear');
});

//move from 'new' to 'inProgress'
$(document).on('click', '#item', function(e) {
	e.preventDefault();
	var task = this;
	console.log(task.outerHTML);
	task.id = 'inProgress';
	$('#currentList').append(task);
});

//move from 'inProgress' to 'archived'
$(document).on('click', '#inProgress', function(e) {
	e.preventDefault();
	var task = this;
	var tusk = 'i';
	task.id = "archived";
	$(task).find('i').removeClass('glyphicon-arrow-right');
	$(task).find('i').addClass('glyphicon-remove');
	$('#archivedList').append(task);
});

//delete task from archived
$(document).on('click', '#archived', function(e) {
	e.preventDefault();
	var task = this;
	deleteTask(task);
	console.log(listo);
});

})