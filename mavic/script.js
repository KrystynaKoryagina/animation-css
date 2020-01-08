$(function() {
	const img = $('.mavic-img');

	
	$('.mavic').hover(
		function() {
			const $this = $(this);

			img.addClass('mavic-off')
			   .removeClass('mavic-on');
		},
		function() {

			const $this = $(this);

			img.addClass('mavic-on')
			   .removeClass('mavic-off');
		}
	);


});