var miniaturaPath = 0;
var productoPath = 1;
var nombreProducto = 2;
var material = 3;

window.onload = function() {

		$('#titulo').animate({left:'367'});

		$('#antiOpacity').on('mouseover','img', function() {

				target = $(this);
				target.css('opacity','1.0');
		});

		$('#antiOpacity').on('mouseout','img', function() {

				target = $(this);
				target.css('opacity','0.7');
		});

		$('#antiOpacity').on('click','img', function() {

			var encontrado = false;
			var index = 0;

			while ((encontrado==false) && (index<=$productos.length-1)) {

				if($(this).attr('src')==$productos[index][miniaturaPath]){
					encontrado = true;
					var imgsizedurl = $productos[index][productoPath];
					var contMateriales = document.createElement('div');
					contMateriales.setAttribute('id','materiales');
					document.getElementById('descCont').appendChild(contMateriales);
					document.getElementById('nombre').innerHTML = $productos[index][nombreProducto];	
					$('#materiales').prepend('<p>'+$productos[index][material]+'</p>');	
					var siguienteIgual = true;

					while ((index<$productos.length-1) && (siguienteIgual==true)) {
						index = index + 1;

						if ($productos[index-1][miniaturaPath]==$productos[index][miniaturaPath]) {
							$('#materiales').prepend('<p> + </p>');	
							$('#materiales').prepend('<p>'+$productos[index][material]+'</p>');	

						}
						else {siguienteIgual =false;}
					}
				}
				else {
					index = index + 1;
				}
			}

			$('#contenedor').css('display','block');
			$('#cortina').css('display','block');


			$('#foto').attr('src',imgsizedurl)
		    $('#loading').css('display','block');

		    $('#foto').hide().load(function () {          
		    	$('#loading').css('display','none');
		        $('#foto').fadeIn();
		    });

			$('#zoomFoto').attr('src',imgsizedurl);

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

				$('#cortina').on('click', function() {
					$('#foto').attr('src','');
					$('#materiales').remove();
					$('#zoomSeek').remove();
					$('#contenedor').css('display','none');
					$('#cortina').css('display','none');

				});
				
				$('#close').on('click', function() {
					$('#foto').attr('src','');
					$('#materiales').remove();
					$('#zoomSeek').remove();
					$('#contenedor').css('display','none');
					$('#cortina').css('display','none');
				});
		});

	    $('#social').on('mouseover', 'img', function() {
				$(this).css('-webkit-transform','scale(1.1, 1.1)');
	    });


	    $('#social').on('mouseout', 'img', function() {
				$(this).css('-webkit-transform','scale(1, 1)');
	    });
}