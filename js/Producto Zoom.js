

window.onload = function() {

		$('#foto').on('mouseover', function() {


				var zoomSeek = document.createElement('div');
				zoomSeek.setAttribute('id','zoomSeek');
				zoomSeek.style.display = 'block';
				document.getElementById('contenedor').appendChild(zoomSeek);

				$('#zoomDiv').css('display','block');
				$('#borderDiv').css('display','none');

				var limiteV = $('#foto').height() - $('#zoomSeek').height()/2;
				var limiteH = $('#foto').width() - $('#zoomSeek').width()/2;

				var fotoMarginLeft = parseInt($('#foto').css('margin-left'));
				var fotoMarginTop = parseInt($('#foto').css('margin-top'));


				$(this).on('mousemove', function(eFoto) {

					var centroX = eFoto.pageX - $('#zoomSeek').width()/2;
				  	var centroY = eFoto.pageY - $('#zoomSeek').height()/2;

					var posZoomImgX = -(centroX*2);
					var posZoomImgY = -(centroY*2);

					if (eFoto.pageY <= fotoMarginTop+$('#zoomSeek').height()/2) {

						zoomSeek.style.top = fotoMarginTop+'px';
						$('#zoomFoto').css('top','0');

					} else {

						if (eFoto.pageY >= limiteV + fotoMarginTop) {

							zoomSeek.style.top = (limiteV-$('#zoomSeek').height()/2)+fotoMarginTop+'px';
							$('#zoomFoto').css('top',-((limiteV*2)-$('#zoomSeek').height())+'px');

						} else {
						
							zoomSeek.style.top = centroY+'px';
							$('#zoomFoto').css('top',(posZoomImgY+fotoMarginTop*2)+'px');
						}
					}

					if (eFoto.pageX <= fotoMarginLeft+$('#zoomSeek').width()/2) {

						zoomSeek.style.left = fotoMarginLeft+'px';
						$('#zoomFoto').css('left','0');

					} else {

						if (eFoto.pageX >= limiteH + fotoMarginLeft) {

							zoomSeek.style.left = (limiteH-$('#zoomSeek').width()/2)+fotoMarginLeft+'px';
							$('#zoomFoto').css('left',-((limiteH*2)-$('#zoomSeek').width())+'px');

						} else {
						
							zoomSeek.style.left = centroX+'px';
							$('#zoomFoto').css('left',(posZoomImgX+fotoMarginLeft*2)+'px');
						}
					}

				});

		});

		$('#foto').on('mouseout', function() {

			$('#zoomSeek').remove();
			$('#zoomDiv').css('display','none');
			$('#borderDiv').css('display','block');

		});

}