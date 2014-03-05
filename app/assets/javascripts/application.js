// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require jquery.min
//= require bootstrap.min
//= require jquery.prettyPhoto
//= require jquery.nicescroll.min
//= require superfish.min
//= require jquery.flexslider-min
//= require owl.carousel
//= require animate
//= require jquery.BlackAndWhite
//= require myscript
//= require_tree .

//PrettyPhoto
jQuery(document).ready(function() {
	$("a[rel^='prettyPhoto']").prettyPhoto();
});

//BlackAndWhite
$(window).load(function(){
	$('.client_img').BlackAndWhite({
		hoverEffect : true, // default true
		// set the path to BnWWorker.js for a superfast implementation
		webworkerPath : false,
		// for the images with a fluid width and height 
		responsive:true,
		// to invert the hover effect
		invertHoverEffect: false,
		// this option works only on the modern browsers ( on IE lower than 9 it remains always 1)
		intensity:1,
		speed: { //this property could also be just speed: value for both fadeIn and fadeOut
			fadeIn: 300, // 200ms for fadeIn animations
			fadeOut: 300 // 800ms for fadeOut animations
		},
		onImageReady:function(img) {
			// this callback gets executed anytime an image is converted
		}
	});
});