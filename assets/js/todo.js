// todo.js

// Set task as done by clicking
$('li').click(function(){
	$(this).toggleClass('done');
	});

// Click on X to delete Todo
$('span').click(function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
})