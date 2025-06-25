/******************************************************************************************************************************
Waypoints
*******************************************************************************************************************************/ 

$(document).ready(function() {

	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInLeft');
	}, {
		offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInDown');
	}, {
		offset: '55%'
	});
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.wp5').waypoint(function() {
		$('.wp5').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp6').waypoint(function() {
		$('.wp6').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});

});

/******************************************************************************************************************************
Nav Button
*******************************************************************************************************************************/ 

$(window).load(function() {

	$('.nav_slide_button').click(function() {
		$('.pull').slideToggle();
	});

});


$(function() {

	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - 125
				}, 1000);
				return false;
			}
		}
	});

});

/******************************************************************************************************************************
Nav Transform
*******************************************************************************************************************************/ 

document.querySelector("#nav-toggle").addEventListener("click", function() {
	this.classList.toggle("active");
});

/******************************************************************************************************************************
Flexsliders
*******************************************************************************************************************************/ 

$(window).load(function() {

	$('#blogSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: false,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

	$('#servicesSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

	$('#teamSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});
	
		$('#clientSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

});

/******************************************************************************************************************************
Carousel Expands over Hovering and On clicking play or pause video 
*******************************************************************************************************************************/ 


document.addEventListener("DOMContentLoaded", function () {
    let activeCard = null; // Track the currently expanded card

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const video = card.querySelector("video");

        card.addEventListener("mouseenter", () => {
            // Collapse previously expanded card (if different)
            if (activeCard && activeCard !== card) {
                activeCard.style.width = "80px"; // Reset size
                activeCard.style.transition = "width 0.5s ease-in-out"; // Smooth transition
                const prevVideo = activeCard.querySelector("video");
                prevVideo.pause(); // Pause previous video
            }

            // Expand the hovered card
            card.style.transition = "width 0.5s ease-in-out"; // Smooth transition
            card.style.width = "320px";
            activeCard = card;
        });

        card.addEventListener("mouseleave", () => {
            if (activeCard === card) {
                card.style.width = "80px"; // Collapse back
                card.style.transition = "width 0.5s ease-in-out"; // Smooth transition
                video.pause(); // Pause video
                activeCard = null;
            }
        });

        card.addEventListener("click", () => {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });
    });
});
