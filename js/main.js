
var first=true;
var screenWidth = $(window).width();

for (var j = 0; j < $fondos.length; j++) {
			first2 = false;
			var bg = document.createElement('div');
			bg.setAttribute('id','bg'+j);
			bg.className = 'bgClass';
			bg.style.top = '0px';
			bg.style.left = screenWidth+'px';
			bg.style.display = 'none';
			document.getElementById('wrapper').appendChild(bg);
			$('#bg'+j).css('background','url('+$fondos[j]+') no-repeat center center fixed');
			$('#bg'+j).hide().load();
};

window.onload = function() {

	$(document).ready(function() { 

		var open = false;
		var i = 0;
		var finishload = false;

		function setLeft() {
			var screenWidth = $(window).width();
			$('#bg'+i).css('left',screenWidth+'px');
		}

	    function changeBackground() {
		    
		    $('#contWelcome').animate({opacity:'0'}, function(){$('#contWelcome').remove();});
		   // $('#pastilla').animate({bottom:'50px'});

	        if (i == $fondos.length) {
	                i = 0;
	        }

			setLeft();

			if (first==false) {
				

				if (i ==0 ) { var k = $fondos.length - 1; }
				else        { var k = i - 1; }
				
				$('#bg'+k).animate({left: '-'+screenWidth+'px'} , function() {
																	$(this).css('left',screenWidth+'px');
																	$(this).css('display','none');
																  });
			}
				
			$('#bg'+i).css('display','block'); 
			$('#bg'+i).animate({left: '0px'}, 
				function() { if (first==true) {
								first=false;
								$('#menu').animate({height:'390px'}, 500, 
									function() { $(this).animate({top:'200px'}); 
									});			
					     	 } 
				});
			i++;
	    }

	    setInterval(changeBackground, 3500);

	    $('#social').on('mouseover', 'img', function() {
				$(this).css('-webkit-transform','scale(1.1, 1.1)');
	    });


	    $('#social').on('mouseout', 'img', function() {
				$(this).css('-webkit-transform','scale(1, 1)');
	    });
/*
	    $('#pastilla').on('mouseover', function() {
				$(this).css('transform','scale(1.05, 1.05)');
				console.log('yo');
	    }); 

	    $('#pastilla').on('mouseout', function() {
				$(this).css('transform','scale(1, 1)');
	    });
*/

	});
}