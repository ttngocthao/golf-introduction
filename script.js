$(document).ready(function(){
	
	$('.fadeOut').on('click', function(){
		$(this).fadeOut('slow');
		$('.hide-history').toggle();
	});
	
	$('#closeicon').on('click',function() {
		$('.fadeOut').fadeIn('slow');
		$('.hide-history').hide();
	});
	
	$('.read-object').on('click',function(){
		$('.hide-object').toggle();
	});
	
	$('#icon').on('mouseenter',function(){
		$(this).animate({top:'-=10px'},1000);
	});
	
	$('#icon').on('mouseleave',function(){
		$(this).animate({top:'+=10px'},1000);
	});
	
});