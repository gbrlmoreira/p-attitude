window.onload = function() {
		$('#contacto').animate({opacity:'1'});
		$('#placaContacto').animate({opacity:'1'}, function(){
			$('#contacto').animate({left:'100px'});
			$('#placaContacto').animate({left:'0px'}, function(){
				$('#titulo').animate({opacity:'1'});
				$('#titulo').animate({top:'80px'});

			});		
		});
	    $('#social').on('mouseover', 'img', function() {
				$(this).css('-webkit-transform','scale(1.1, 1.1)');
	    });
	    $('#social').on('mouseout', 'img', function() {
				$(this).css('-webkit-transform','scale(1, 1)');
	    });
	    $('.contactos').on('mouseover','div', function() {
				$(this).css('-webkit-transform','scale(1.1, 1.1)');
	    });
	    $('.contactos').on('mouseout','div', function() {
				$(this).css('-webkit-transform','scale(1, 1)');
	    });
}