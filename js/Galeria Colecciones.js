var path_fotoMiniatura = 0;
var path_imgColeccion = 1;

var nombre_producto = 0;
var path_corsetMiniatura = 1;
var path_producto = 2;
var path_foto_sesion = 3;
var material = 4
var contaSelecciones = 0;

window.onload = function() {

		console.log($productos);
		$('#titulo').animate({left:'300'});
		$('#miniGaleria').on('mouseover','img', function() {
				target = $(this);
				target.css('opacity','1.0');
		});

		$('#miniGaleria').on('mouseout','img', function() {
				target = $(this);
				target.css('opacity','0.7');
		});

		$('#miniGaleria').on('click', 'li', function() {
			var imgSeleccionada = $(this).attr('id') - 1;
			var match = false;
			var index = 0;
			$(function() {
				$('#imagenGrande').animate({opacity:'0'}); 
				$('#miniCorsetCont').animate({opacity:'0'});
				$('.nombreProductos').remove();
				$('.miniCorsets').animate({opacity:'0'},function(){$(this).remove();});
				$('#nombreProducto').animate({opacity:'0'}, function(){
										
					while((match==false) && (index<=$productos.length-1)) {
						
						$('#loadingGaleria').css('display','block');

						if($fetch_array[imgSeleccionada][path_imgColeccion]==$productos[index][path_foto_sesion]) {
							match = true;

							$('#imagenGrande').attr('src', $productos[index][path_foto_sesion]);
							$('#imagenGrande').css('display','none');
							$('#imagenGrande').load( function() {

									if ($('#imagenGrande').height() > $('#imagenGrande').width()) {

										$('#imagenGrande').css('height','100%');
										$('#imagenGrande').css('width','auto');
										$('#imgSelec').width($('#imagenGrande').width());
										$('#imgSelec').css('height','643px');
									} 

									else {

										$('#imagenGrande').css('height','auto');
										$('#imagenGrande').css('width','100%');
										$('#imgSelec').height($('#imagenGrande').height());
										$('#imgSelec').css('width','960px');
									}
									$('#imgSelec').height($('#imagenGrande').height());
									$('#imgSelec').width($('#imagenGrande').width());			
									$('#loadingGaleria').css('display','none');
									$('#imagenGrande').css('display','block');
							});

							document.getElementById('nombreProducto').innerHTML = $productos[index][nombre_producto];	
							$('#miniCorset').attr('src', $productos[index][path_corsetMiniatura]);
							$(this).animate({opacity:'1'});
							$('#miniCorsetCont').animate({opacity:'1'});
							$('#imagenGrande').animate({opacity:'1'});

							var siguienteIgual = true;
							var top = 0;
							while ((index<$productos.length-1) && (siguienteIgual==true)) {
								index = index + 1;

								if ($productos[index-1][path_foto_sesion]==$productos[index][path_foto_sesion]) {

									if ($productos[index-1][nombre_producto]!=$productos[index][nombre_producto]) {
										top = top + 200; 
										
										var newContenedor = document.createElement('div');
										newContenedor.setAttribute('id','contenedorInterno'+index);
										newContenedor.className = 'contenedoresInternos';
										newContenedor.style.top = top+'px';
										newContenedor.style.display = 'block';
										document.getElementById('miniCorsetCont').appendChild(newContenedor);
															
										var newCorset = document.createElement('img');
										newCorset.setAttribute('id','miniCorset'+index);
										newCorset.className = 'miniCorsets';
										newCorset.style.top = '0px';
										newCorset.style.display = 'block';
										newCorset.style.zIndex = '1';
										document.getElementById('contenedorInterno'+index).appendChild(newCorset);
										document.getElementById('miniCorset'+index).src = $productos[index][path_corsetMiniatura];
								
										var newNombreProducto = document.createElement('div');
										newNombreProducto.setAttribute('id','nombreProducto'+index);
										newNombreProducto.className = 'nombreProductos';
										newNombreProducto.style.top = '0px';
										newNombreProducto.style.display = 'block';
										newNombreProducto.style.zIndex = '3';
										document.getElementById('contenedorInterno'+index).appendChild(newNombreProducto);
										document.getElementById('nombreProducto'+index).innerHTML = $productos[index][nombre_producto];
									}
								} else {siguienteIgual=false;}
							}
						}
					  index = index + 1;	
					}
				});			
			});
		});

		$('#miniGaleria').on('click','li',function() {

			target = $(this);
			var posicion = $('#miniTabla').position().left;

				if ((target.attr('id') <= 4 + contaSelecciones)&&(contaSelecciones!=0)) {
					posicion = posicion + 98;
					$('#miniTabla').animate({left: posicion});
					contaSelecciones = contaSelecciones - 1;
				}
				else {
					if ((target.attr('id') >= 5 + contaSelecciones)&&(contaSelecciones!=($fetch_array.length-8))) {
						posicion = posicion - 98;
						$('#miniTabla').animate({left: posicion});
						contaSelecciones = contaSelecciones + 1;
					}
				}
		});

		$('#miniCorsetCont').on('mouseover','div', function(){

			$(this).find('div').css('display','block');
			$(this).find('div').css('opacity','0.5');

		});

		$('#miniCorsetCont').on('mouseout','div', function(){

			$(this).find('div').css('display','none');
		});

		$('#miniCorsetCont').on('click','div', function() {

			var encontrado = false;
			var index = 0;

			while ((encontrado==false) && (index<=$productos.length-1)) {

				if($(this).find('img').attr('src')==$productos[index][path_corsetMiniatura]){
					encontrado = true;
					var imgsizedurl = $productos[index][path_producto];
					var contMateriales = document.createElement('div');
					contMateriales.setAttribute('id','materiales');
					document.getElementById('descCont').appendChild(contMateriales);
					document.getElementById('nombre').innerHTML = $productos[index][nombre_producto];	
					$('#materiales').prepend('<p>'+$productos[index][material]+'</p>');	

					var siguienteIgual = true;

					while ((index<$productos.length-1) && (siguienteIgual==true)) {
						index = index + 1;

						if (($productos[index-1][path_producto]==$productos[index][path_producto]) && ($productos[index-1][path_foto_sesion]==$productos[index][path_foto_sesion])) {
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