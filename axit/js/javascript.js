$(document).ready(function(){
	$(".tabButtons button").click(function(){
		$(".tabButtons button").removeClass("button active");
		$(this).addClass("button active");
		if ($( ".tabButton1" ).hasClass( "button active" ) == true){
			$(".tab2").fadeOut( "slow" );
			$(".tab3").fadeOut( "slow" );
			$(".tab1").fadeIn( "slow" );
		} else if ($( ".tabButton2" ).hasClass( "button active" ) == true) {
			$(".tab1").fadeOut( "slow" );
			$(".tab3").fadeOut( "slow" );
			$(".tab2").fadeIn( "slow" );
		} else if ($( ".tabButton3" ).hasClass( "button active" ) == true) {
			$(".tab2").fadeOut( "slow" );
			$(".tab1").fadeOut( "slow" );
			$(".tab3").fadeIn( "slow" );
		}
	});
});