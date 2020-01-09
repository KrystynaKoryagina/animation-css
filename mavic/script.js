$(function() {
	const img = $('.mavic-img');
	
	$('.mavic').hover(
		function() {
			$(this).addClass('animate-on')
				   .removeClass('animate-off');

			img.addClass('mavic-on')
			   .removeClass('mavic-off');
		},
		function() {
			$(this).addClass('animate-off')
				   .removeClass('animate-on');

			img.addClass('mavic-off')
			   .removeClass('mavic-on');
		}
	);
});