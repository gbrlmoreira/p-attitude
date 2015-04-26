window.onload = function() {
		$('#titulo').animate({top:'135'});
	    $('#social').on('mouseover', 'img', function() {
				$(this).css('-webkit-transform','scale(1.1, 1.1)');
	    });
	    $('#social').on('mouseout', 'img', function() {
				$(this).css('-webkit-transform','scale(1, 1)');
	    });
}

