

var screenWidth = screen.availWidth;
var screenHeight = screen.availHeight;


$('#wrapper').width(screenWidth);
$('#wrapper').height(screenHeight);


window.onload = function() {

		var open = false;
		var i = 0;

		$('#menu').animate({top:'200'});

		var nextbg = document.createElement('img');
		nextbg.setAttribute('id','nextbg');
		nextbg.className = 'bgClass';
		nextbg.style.top = '0px';
		nextbg.style.left = screenWidth+'px';
		nextbg.style.display = 'block';
		nextbg.zIndex = '0';
		document.getElementById('wrapper').appendChild(nextbg);

		document.getElementById('nextbg').src = 'img/fondos/fondoMainProductos.jpg';

		$('#bg').animate({left: '-'+screenWidth+'px'});
		$('#nextbg').animate({left: '0px'});
		nextbg.setAttribute('id','actbg');


	    $(function(){ // when DOM ready

	        $('#overbust').reel({
	          images:      'img/360/overbust/###.JPG|001..012'
	        });

	    });

	    $(function(){ // when DOM ready

	        $('#underbust').reel({
	          images:      'img/360/underbust/###.JPG|001..012'
	        });

	    });
}

