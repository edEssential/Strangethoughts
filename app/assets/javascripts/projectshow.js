jQuery(document).ready(function() {
	
	$('#myModal2').appendTo("body").modal('show');
	
	jQuery(".zoom").click(function() {
		var id = jQuery(this).prev('.modal-object-id').val();
		jQuery.ajax({
			dataType: "json",
			url: "./projects/project_show_via_ajax_call",
			data: {id: id},
			success: function(data) {
				var project_content = SMT['projectshow'](data);
				jQuery('.modal-content').empty();
				jQuery('.modal-content').append(project_content);
				jQuery('#myModal').appendTo("body").modal('show');
			}
		});
	});
	
	jQuery("#prevArrow").click(function(){
		console.log("prevArrow clicked");
		var id = jQuery(this).prev('.modal-object-id').val();
		console.log(id);
		jQuery.ajax({
			dataType: "json",
			url: "./projects/project_show_via_ajax_call",
			data: {id: id + 1},
			success: function(data) {
				console.log(success);
			}
		});	
	});
	
});