$(document).ready(function() {
	$('#contact-name').focusout(function() {
		if ($(this).val().length == 0) {
			console.log("name is missing");
			
		} else {
			console.log("name is present")
		}	
	});
});
