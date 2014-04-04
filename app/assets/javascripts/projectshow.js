jQuery(document).ready(function() {
	
	//$(".zoom").click(function() {
		//$('#myModal').appendTo("body").modal('show');
	//});
	
	jQuery(".zoom").click(function() {
		
		var id = jQuery(this).prev('.modal-object-id').val();
		
		jQuery.ajax({
			dataType: "json",
			url: "./projects/project_show_via_ajax_call",
			data: {id: id},
			success: function(data) {
				console.log(data);
				var project_content = SMT['projectshow'](data);
				jQuery('.modal-content').empty(function() {
					jQuery('.modal-content').append(project_content);
					jQuery('#myModal').appendTo("body").modal('show');
				});
			}
		});
	});
});