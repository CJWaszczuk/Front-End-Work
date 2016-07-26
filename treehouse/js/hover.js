$(document).ready(function(){
 	$( ".portfolioButton" ).hover(
	    function() {
	        $( this ).attr("src","assets/portfolioButton.png");
	    }, function() {
	        $( this ).attr("src","assets/portfolioButtonHover.png");
	    }
	);
	$( ".learnMoreButton" ).hover(
	    function() {
	        $( this ).attr("src","assets/learnMoreButtonHover.png");
	    }, function() {
	        $( this ).attr("src","assets/learnMoreButton.png");
	    }
	);
	$( ".viewDetailsButton" ).hover(
	    function() {
	        $( this ).attr("src","assets/viewDetailsButtonHover.png");
	    }, function() {
	        $( this ).attr("src","assets/viewDetailsButton.png");
	    }
	);
	$( ".contactUsButton" ).hover(
	    function() {
	        $( this ).attr("src","assets/contactUsButtonHover.png");
	    }, function() {
	        $( this ).attr("src","assets/contactUsButton.png");
	    }
	);
	$( ".twitterIcon" ).hover(
	    function() {
	        $( this ).attr("src","assets/twitterIconHover.png");
	    }, function() {
	        $( this ).attr("src","assets/twitterIcon-1.png");
	    }
	);
	$( ".facebookIcon" ).hover(
	    function() {
	        $( this ).attr("src","assets/facebookIconHover.png");
	    }, function() {
	        $( this ).attr("src","assets/facebookIcon.png");
	    }
	);
	$( ".pinterestIcon" ).hover(
	    function() {
	        $( this ).attr("src","assets/pinterestIconHover.png");
	    }, function() {
	        $( this ).attr("src","assets/pinterestIcon.png");
	    }
	);
	$( ".googleIcon" ).hover(
	    function() {
	        $( this ).attr("src","assets/googleIconHover.png");
	    }, function() {
	        $( this ).attr("src","assets/googleIcon.png");
	    }
	);
	$('.homeScroll').click(function(){
		$('html, body').animate({ scrollTop: $(".navigation").offset().top }, 1000);
	});
	$('.servicesScroll').click(function(){
		$('html, body').animate({
        	scrollTop: $(".services").offset().top
    	}, 1000);
	});
	$('.projectsScroll').click(function(){
		$('html, body').animate({
        	scrollTop: $(".projects").offset().top
    	}, 1000);
	});
	$('.testimonialsScroll').click(function(){
		$('html, body').animate({
        	scrollTop: $(".clients").offset().top
    	}, 1000);
	});
	$('.contactScroll').click(function(){
		$('html, body').animate({
        	scrollTop: $(".primaryFooter").offset().top
    	}, 1000);
	});
});