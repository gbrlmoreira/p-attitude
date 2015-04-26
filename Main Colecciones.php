<!DOCTYPE html>
<html class="no-js">
    <head>
        <meta charset="utf-8">
        <link rel="shortcut icon" href="http://www.corsetterie.com.ar/pAttitudeIcon.ico">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>P!Attitude Corsetterie</title>
        <meta name="description" content="Corsets. A eso nos dedicamos. Trabajamos por completo personalizado y a medida, también asesoramos y ayudamos a crear el corset ideal para cada persona.">
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/Main Colecciones.css">
        <script src="js/vendor/modernizr-2.6.2.min.js"></script>
    </head>
    <body>
        <?php include_once("analyticstracking.php") ?>
        <div id="wrapper">
            <div id="logo">   
                <a href="index.php"><img src="img/logo.png"></a>
            </div>
            <div id="antiOpacity">
            <table>
                <tr>
                <?php
                    $imgDir = 'img/colecciones/main/';

                    foreach (glob($imgDir . '*.{jpg}', GLOB_BRACE) as $image) {   

                        $keyword = $image;

                        $imgDesc = substr($image, 0, strpos($image, '.'));
                        $imgDesc = $imgDesc.'.png';

                        $keyword = str_replace("img/colecciones/main/","", $keyword);
                        $keyword = substr($keyword, 0, strpos($keyword, '.'));

                        print'<td>
                                <div class="contBanner">
                                    <div class="imgBanner">
                                        <img src="'.$image.'"/>
                                    </div>                                
                                    <div class="descBanner">
                                        <a href="Galeria Colecciones.php?keyword='.$keyword.'"><img class="descripcion" src="'.$imgDesc.'"/></a>
                                    </div>

                                </div>
                              </td>';
                    }
                ?>
                </tr>
            </table>    
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
        <script src="js/Main Colecciones.js"></script>
    </body>
</html>
