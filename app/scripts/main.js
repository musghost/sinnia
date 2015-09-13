'use strict';
$('.dates input').datepicker({
	minDate: new Date(2006, 5, 1)
});
$('.dates button').click(function(e){
	e.preventDefault();
	$(this).parent().find('input').first().datepicker('show');
});

$('#query-form').find('.get-mail').first().click(function(e){
	e.preventDefault();
	var search = $("#search"),
		from = $("#from"),
		to = $("#to"),
		error = false;

	if(search.val() === '') {
		search.parent().addClass('error');
		error = true;
	}
	if(from.val() === '') {
		from.addClass('error');
		error = true;
	}
	if(to.val() === '') {
		to.addClass('error');
		error = true;
	}

	if(!error) {
		$('.form-query').fadeOut(function(){
			$('.form-email').fadeIn();
		});
	}
});
$('#query-form').submit(function(e){
	var email = $('#email'),
		emailVal = email.val(),
		found = false;
	_.each(domains, function(value){
		if(emailVal.indexOf(value) !== -1) {
			found = true;
		}
	});
	if (found) {
		email.parent().addClass('error');
		e.preventDefault();
	}
});