window.onload = function() {
		$('#titulo').animate({top:'130'});

		$('#p1').on('mouseover', function(){
			$('#FAQrespuestas').append('<p>Trabajamos a pedido y a medida, por completo personalizado. Podés elegir tela, modelo, detalles, y customizar totalmente tu corset.</p>');
		});
		$('#p2').on('mouseover', function(){
			$('#FAQrespuestas').append('<p>Todos nuestros corsets llevan ballenas de hierro y modesty panel (solapa debajo de los cordones), a menos que se indique lo contrario. Este mismo salvaguarda tu espalda del roce directo de los lazos. En cuanto a las ballenas, también tened la opción en plástico de 1cm y 0.5cm. Cada corset es confeccionado a mano, conformando una pieza única e irrepetible.</p>');
		});
		$('#p3').on('mouseover', function(){
			$('#FAQrespuestas').append('<p>Los pedidos se toman por internet (facebook, mail), y se coordina una reunión en nuestro taller en Caballito (a cuadras de Parque Centenario). En el caso de no poder reunirnos, podés tomar las medidas vos misma (ante cualquier duda, te las indicamos sin problema).</p>');
		});
		$('#p4').on('mouseover', function(){
			$('#FAQrespuestas').append('<p>Si podes. Tene en cuenta que si tomás tus propias medidas, nos atenemos a ellas, y no se aceptan reclamos a posteriori.</p>');
		});
		$('#p5').on('mouseover', function(){
			$('#FAQrespuestas').append('<p>Más allá de lo decorativo como cintas, hebillas, puntillas, etc... te ofrecemos la alternativa de extras como un cierre para hacer más fácil y rápido poner y sacar la prenda sin ayuda.</p>');
			$('#FAQrespuestas').append('<p>Todos nuestros corsets llevan una solapa en la espalda, por debajo de los cordones (Modesty panel). Este se utiliza sobre todo en corsets reductores, para evitar el roce de los cordones y cubrir el escote de la espalda.</p>');
		});
		$('#p6').on('mouseover', function(){
			$('#FAQrespuestas').append('<p>Al ser artesanal, cada pedido demora entre 2 y 4 semanas, por eso es que necesitamos que hagas tu pedido CON TIEMPO (15 días por lo menos).</p>');
		});
		$('#p7').on('mouseover', function(){
			$('#FAQrespuestas').append('<p>Una vez retirado, probado y pasados los 10 días desde la entrega, no aceptamos reclamos sobre el corset.</p>');
			$('#FAQrespuestas').append('<p>Si después de pactada la entrega, y pasados 30 días no se retiró el corset, este pasa a ser stock de P! Attitude Corsetterie.</p>');
		});
		$('#p8').on('mouseover', function(){
			$('#FAQrespuestas').append('<p>Si nos traés la tela para confeccionar tu corset, los sobrantes útiles te serán devueltos y se tendrá en cuenta el material en el precio final.</p>');
		});
		$('#p9').on('mouseover', function(){
			$('#FAQrespuestas').append('<p>Hacemos envíos Nacionales con depósito previo de precio del corset + costos de envío.</p>');
			$('#FAQrespuestas').append('<p>Los envíos dentro de Capital Federal se harán solo por única excepción y se cobrará un monto de 30$.</p>');
		});
		$('#p10').on('mouseover', function(){
			$('#FAQrespuestas').append('<p>Ante cualquier duda se pueden comunicar por mensaje a privado a FB de Putitah Attitude Corsetterie, por mail a p.attitude.wear@gmail.com o por medio de la interfaz de esta pagina en la seccion contacto.</p>');
		});
		$('#p11').on('mouseover', function(){
			$('#FAQrespuestas').append('<p>Nuestros corsets reducen entre 3 y 5 cm de cintura. Usamos ballenas de hierro revestidas, que aseguran un ajuste importante. En el caso de que sea tu primer corset o no estés acostumbrada, también podemos confeccionarlos con ballenas de plástico, que son más ligeras y moldeables, pero no garantizan el mismo soporte que las metálicas.</p>');
		});
		$('#p12').on('mouseover', function(){
			$('#FAQrespuestas').append('<p>Aunque los corsets son nuestro principal producto, también realizamos por encargo especial otras prendas como faldas, blusas, vestidos, etc… </p>');
		});
		$('.pregunta').on('mouseout', function(){
			$('#FAQrespuestas p').remove();
		});
	    $('#social').on('mouseover', 'img', function() {
			$(this).css('-webkit-transform','scale(1.1, 1.1)');
	    });
	    $('#social').on('mouseout', 'img', function() {
			$(this).css('-webkit-transform','scale(1, 1)');
	    });
}