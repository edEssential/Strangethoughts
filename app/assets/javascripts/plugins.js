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

		  '22 Scrutton Street, London, E5 2PP' +

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

		  '33 Waterfront, Bristol, BS2 7PP' +

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