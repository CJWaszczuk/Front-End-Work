$(document).ready(function(){
	
	$window = $(window);        

	$('div[data-type="background"]').each(function(){
		var $bgobj = $(this);

		$(window).scroll(function() {
			if ($window.scrollTop() > 400)
				$('#scroll_notifier').fadeOut();

			if ($(window).width() >= 1200) {
				var offset = $bgobj.offset();
				offset = offset.top - $window.scrollTop();
				var yPos = (offset / $bgobj.data('speed')); 
				var coords = '50% '+ yPos + 'px';
				$bgobj.css({ backgroundPosition: coords });
			}
		});
	});	
}); 

document.createElement("article");
document.createElement("section");