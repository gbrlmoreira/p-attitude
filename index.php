<?php
    $fondosDir = 'img/fondos/main';
    foreach (glob($fondosDir . '/*.*', GLOB_BRACE) as $image) {   

        $json[] = $image;
    }     
?>
<script>
    var $fondos =
    <?php 
        echo json_encode( $json );   
    ?>
</script>
<!DOCTYPE html>
<html class="no-js">
    <head>
        <link rel="shortcut icon" href="http://www.corsetterie.com.ar/pAttitudeIcon.ico">
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>P!Attitude Corsetterie</title>
        <meta name="description" content="Corsets. Trabajamos por completo personalizado y a medida, también asesoramos y ayudamos a crear el corset ideal para cada persona.">
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/main.css">
        <script src="js/vendor/modernizr-2.6.2.min.js"></script>
    </head>
    <body>
        <?php include_once("analyticstracking.php") ?>
        <div id="wrapper">
            <div id="contWelcome">
                <div id="logoWelcome"></div>
                <div id="loading"></div>
            </div>
            <div id="logo">   
                <a href="index.php"><img src="img/logo.png"></a>
            </div>
            <nav id="menu">
                    <ul>
                        <li><a href="index.php">Home</a></li>
                        <hr>
                        <li><a href="Galeria.php?keyword=Underbust">Underbust</a></li>
                        <li><a href="Galeria.php?keyword=Overbust">Overbust</a></li>
                        <li><a href="Galeria.php?keyword=Polleras">Polleras</a></li>
                        <li><a href="Galeria.php?keyword=Especiales">Especiales</a></li>
                        <hr>
                        <li><a href="Main Colecciones.php">Colecciones</a></li>
                        <hr>
                        <li><a href="Contacto.php">Contacto</a></li>
                        <hr>
                        <li><a href="QSomos.php">¿Quiénes somos?</a></li>
                        <hr>
                        <li><a href="FAQ.php">FAQ</a></li>
                    </ul>
            </nav>
            <div id="social">
                <div id="fb-btn">
                    <a href="http://www.facebook.com/corsetterie?fref=ts" target="_blank"><img class="socialbtn" src="img/logoFB.png"></a>
                </div>
                <div id="be-btn">
                    <a href="http://www.behance.net/corsetterie" target="_blank"><img class="socialbtn" src="img/logoBe.png"></a>
                </div>
            </div>            
        </div>
        <script src="js/vendor/jquery-1.9.0.min.js"></script>
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>
    </body>
</html>
