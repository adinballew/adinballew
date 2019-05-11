"use strict";
// Dropdown toggle
$('.dropdown-toggle').dropdown();

// Carousel Controller
$('#carouselController').carousel();

const url = document.location.toString();
if (url.match('#')) {
	// Clear active item
	$('#carouselController .carousel-item.active').removeClass('active');

	// Activate item number #hash
	let index = url.split('#')[1];
	$('#carouselController .carousel-item[id="' + index + '"]').addClass('active');
}