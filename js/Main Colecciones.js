window.onload = function() {

		$('#titulo').animate({left:'510'});
		$('.descBanner').on('mouseover','img', function() {

			target = $(this);
			target.animate({top:'-425px'});
		});

		$('.descBanner').on('mouseout','img', function() {

			target = $(this);
			target.animate({top:'0px'});
		});

	    $('#social').on('mouseover', 'img', function() {
				$(this).css('-webkit-transform','scale(1.1, 1.1)');
	    });


	    $('#social').on('mouseout', 'img', function() {
				$(this).css('-webkit-transform','scale(1, 1)');
	    });
}