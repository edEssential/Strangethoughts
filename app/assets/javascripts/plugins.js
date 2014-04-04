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

		var latlng = new google.maps.LatLng(41.862274,-87.661328);

		// Map Options
		var myOptions = {
			zoom: 15,
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
		
		var myLatlng = new google.maps.LatLng(41.856774,-87.679928);

		// Your Texts 

		 var contentString = '<div id="content">'+
		  '<div id="siteNotice">'+
		  '</div>'+
		  '<h4>' +

		  'Office 1'+

		  '</h4>'+
		  '<p>' +

		  'Your description is here.' +

		  '</p>'+
		  '</div>';
		

		var marker = new google.maps.Marker({
			  position: myLatlng,
			  map: map,
			  title: 'Hello World!',
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

		 var myLatlngSecond = new google.maps.LatLng(41.863774,-87.639928);

		 // Your Texts

		 var contentStringSecond = '<div id="content">'+
		  '<div id="siteNotice">'+
		  '</div>'+
		  '<h4>' +

		  'Office 2'+

		  '</h4>'+
		  '<p>' +

		  'Your description is here.' +

		  '</p>'+
		  '</div>';

		  var infowindowSecond = new google.maps.InfoWindow({
			  content: contentStringSecond,
			  });

		 var markerSecond = new google.maps.Marker({
			  position: myLatlngSecond,
			  map: map,
			  title: 'Hello World!',
			  icon: image
		  });

		 google.maps.event.addListener(markerSecond, 'click', function() {
			infowindowSecond.open(map,markerSecond);
		  });

		 /* ========= End Second Marker ========= */
	
	})