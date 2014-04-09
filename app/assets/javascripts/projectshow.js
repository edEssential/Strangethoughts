jQuery(document).ready(function() {
	
	jQuery(".zoom").click(function() {
		var id = jQuery(this).prev('.modal-object-id').val();
		loadMustacheTemplate(id);
	});
	
	function loadMustacheTemplate(id) {
		jQuery.ajax({
			dataType: "json",
			url: "./projects/project_show_via_ajax_call",
			data: {id: id},
			success: function(data) {
				jQuery('.modal-fade').fadeOut(50);
				jQuery('#myModal').appendTo("body").modal('show');
				var project_content = SMT['projectshow'](data);
				jQuery('.projectPreloader').fadeIn(75);
				
				setTimeout(function() {
					jQuery('.projectPreloader').fadeOut(75);
					jQuery('.modal-fade').empty();
					jQuery('.modal-fade').append(project_content);
					jQuery('.modal-fade').fadeIn(75);
					if(data.hasOwnProperty("image")) {
						jQuery('.modalVideo').hide();
						jQuery('.modalImage').show();
					} else {
						jQuery('.modalVideo').show();
						jQuery('.modalImage').hide();
					}
					detectAndAmmendPrevious(data.prev_project);
					detectAndAmmendNext(data.next_project);
				}, 750);
			}
		});
	}
	
	function detectAndAmmendPrevious(id) {
		jQuery("#prevArrow").click(function(){
			nextPreviousProject(id);
		});
	}
	
	function detectAndAmmendNext(id) {
		jQuery("#nextArrow").click(function(){
			nextPreviousProject(id);
		});
	}
	
	function nextPreviousProject(id) {
		jQuery.ajax({
			dataType: "json",
			url: "./projects/project_show_via_ajax_call",
			data: {id: id},
			success: function(data) {
				jQuery('.modal-fade').fadeOut(50);
				loadMustacheTemplate(id);
			}
		});
	}
	
});