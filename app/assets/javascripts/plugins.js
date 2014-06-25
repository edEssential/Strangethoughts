/* ==============================================
Google Map
=============================================== */

	$(document).ready(function() {
		'use strict';

		//Google Map Open&Close Effect
		$( ".google-map-big-button" ).click(function(){
			$( "#map" ).toggleClass( "close-map", "open-map", 1000 );
			$( "#map" ).toggleClass( "open-map", "close-map", 1000 );
			return false;
		});

		// Map Coordination

		var latlng = new google.maps.LatLng(51.691287, -1.395263);

		// Map Options
		var myOptions = {
			zoom: 8,
			center: latlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			disableDefaultUI: true,
			scrollwheel: false,
		};

		var map = new google.maps.Map(document.getElementById('google-map'), myOptions);

		// Marker Image
		var image = 'assets/marker.png';
		
	  	/* ========= First Marker ========= */

	  	// First Marker Coordination
		
		var myLatlng = new google.maps.LatLng(51.523267,-0.082129);

		// Your Texts 

		 var contentString = '<div id="content">'+
		  '<div id="siteNotice">'+
		  '</div>'+
		  '<h4>' +

		  'London Office'+

		  '</h4>'+
		  '<p>' +

		  '32-38 Scrutton Street, London, EC2A 4RQ' +

		  '</p>'+
		  '</div>';
		

		var marker = new google.maps.Marker({
			  position: myLatlng,
			  map: map,
			  title: 'London',
			  icon: image
		  });


		var infowindow = new google.maps.InfoWindow({
		  content: contentString
		  });

		  
		 google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		  });

		 /* ========= End First Marker ========= */




		 /* ========= Second Marker ========= */

		 // Second Marker Coordination

		 var myLatlngSecond = new google.maps.LatLng(51.450754,-2.598224);

		 // Your Texts

		 var contentStringSecond = '<div id="content">'+
		  '<div id="siteNotice">'+
		  '</div>'+
		  '<h4>' +

		  'Bristol Office'+

		  '</h4>'+
		  '<p>' +

		  'Pervasive Media Studio, Leadworks, Anchor Square,' + '<br/>' + 'Harbourside, Bristol, Avon BS1 5DB' +

		  '</p>'+
		  '</div>';

		  var infowindowSecond = new google.maps.InfoWindow({
			  content: contentStringSecond,
			  });

		 var markerSecond = new google.maps.Marker({
			  position: myLatlngSecond,
			  map: map,
			  title: 'Bristol',
			  icon: image
		  });

		 google.maps.event.addListener(markerSecond, 'click', function() {
			infowindowSecond.open(map,markerSecond);
		  });

		 /* ========= End Second Marker ========= */
		
		/* ========= Third Marker ========= */

		 // Third Marker Coordination

		 var myLatlngThird = new google.maps.LatLng(45.466256,9.18354);

		 // Your Texts

		 var contentStringThird = '<div id="content">'+
		  '<div id="siteNotice">'+
		  '</div>'+
		  '<h4>' +

		  'Milan Office'+

		  '</h4>'+
		  '<p>' +

		  'Street Address Goes Here' +

		  '</p>'+
		  '</div>';

		  var infowindowThird = new google.maps.InfoWindow({
			  content: contentStringThird,
			  });

		 var markerThird = new google.maps.Marker({
			  position: myLatlngThird,
			  map: map,
			  title: 'Milan',
			  icon: image
		  });

		 google.maps.event.addListener(markerThird, 'click', function() {
			infowindowThird.open(map,markerThird);
		  });

		 /* ========= End Second Marker ========= */
	
	})
	/*-----------------------------------------------------------------------------------*/
	/*	MENU
	/*-----------------------------------------------------------------------------------*/
	function calculateScroll() {
		var contentTop      =   [];
		var contentBottom   =   [];
		var winTop      =   $(window).scrollTop();
		var rangeTop    =   100;
		var rangeBottom =   300;
		$('.navmenu').find('.scroll_btn a').each(function(){
			contentTop.push( $( $(this).attr('href') ).offset().top );
			contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
		})
		$.each( contentTop, function(i){
			if ( winTop > contentTop[i] - rangeTop && winTop < contentBottom[i] - rangeBottom ){
				$('.navmenu li.scroll_btn')
				.removeClass('active')
				.eq(i).addClass('active');			
			}
		})
	};

	$(document).ready(function() {
		//MobileMenu
		if ($(window).width() < 768){
			jQuery('.menu_block .container').prepend('<a href="javascript:;" class="menu_toggler"><span class="fa fa-align-justify"></span></a>');
			jQuery('header .navmenu').hide();
			jQuery('.menu_toggler, .navmenu ul li a').click(function(){
				jQuery('header .navmenu').slideToggle(300);
				$('.navmenu li.scroll_btn')
				.removeClass('active')
			});
		}

		// if single_page
		if (jQuery("#page").hasClass("single_page")) {			
		}
		else {
			$(window).scroll(function(event) {
				calculateScroll();
			});
			$('.navmenu ul li a, .mobile_menu ul li a, .btn_down').click(function() {  
				$('html, body').animate({scrollTop: $(this.hash).offset().top - 80}, 1000);
				return false;
			});
		};
	});


	/* Superfish */
	$(document).ready(function() {
		if ($(window).width() >= 768){
			$('.navmenu ul').superfish();
		}
	});
	