/* 
==================================================

1. Basic
2. Navbar
3. Jumbotron
4. About
5. Order
6. Footer
7. AOS

==================================================
*/

/*
==================================================
2. Navbar
==================================================
*/

$(function() {

  let navMain = $(".navbar-collapse");

  navMain.on("click", ".nav-item:not([data-toggle])", null, function() {
    navMain.collapse('hide');
  });

});

$(document).ready(function() {
	$(window).scroll(function() {

		if ($(this).scrollTop() < $("#jumbotron").height() *2 / 8.5) {

			$(".navbar-nav").addClass("navbar-nav-color");
			$(".nav-link").addClass("nav-link-color");
			$(".navbar").removeClass("navbar-style-1");

		} 
		
		else {

			$(".navbar-nav").removeClass("navbar-nav-color");
			$(".nav-link").removeClass("nav-link-color");
			$(".navbar").addClass("navbar-style-1");

		}

	});
});

$(function() {

	$.scrollIt({

		upKey: 38,
		downKeyy: 40,
		easing: 'easeInOutExpo',
		scrolltime: 600,
		scrolldelay: 100,
		activeClass: 'active',
		onPageChange: null,
		topOffset: 0

	});

});

/*
==================================================
7. AOS
==================================================
*/

(function() {

	AOS.init({

		useClassNames: true,
		initClassnames: false,
		animatedClassName: 'animated',
		once: true,
		easing: 'easeInOut'
	});

})();

$(".jumbotron .jumbotron-button button:nth-child(1)").click(
	function alert1() {
		Swal.fire('Not Available')
});


$(".order .row .col-xl-6 .card p:nth-child(4) a").click(
	function alert2() {
		Swal.fire('Link Is Disabled')
});