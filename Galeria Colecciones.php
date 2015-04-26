<?php       

       if($_SERVER['HTTP_HOST'] == 'localhost' || $_SERVER['HTTP_HOST'] == '127.0.0.1')
       {                
       }
       
       else if($_SERVER['HTTP_HOST'] == 'www.corsetterie.com.ar')
       {
       }

       $con = mysql_connect($db_host,$db_user,$db_pass);

       mysql_select_db($db_name);

        $actual_url = "$_SERVER[REQUEST_URI]";
        $coleccion = substr($actual_url, strpos($actual_url, '=')+1);

        $query_coleccion =  " SELECT Foto_Sesion.foto_mini_path, Foto_Sesion.foto_sesion_path
                              FROM Foto_Sesion, Sesion
                              WHERE Foto_Sesion.id_sesion_fk = Sesion.ID_sesion_pk                          
                              AND Sesion.nombre = '".$coleccion."'
                            ";

        $query_producto =  " SELECT Producto.nombre_producto, Url.miniatura_path, Url.producto_path, Foto_Sesion.foto_sesion_path, Material.nombre_material
                             FROM Foto_Sesion, Sesion, Producto, Url, Foto_SesionUrl, UrlMaterial, Material
                             WHERE UrlMaterial.id_material_fk = Material.ID_material_pk
                             AND Url.ID_url_pk = UrlMaterial.id_url_fk
                             AND Url.id_producto_fk = Producto.ID_producto_pk
                             AND Foto_SesionUrl.id_url_fk = Url.ID_url_pk
                             AND Foto_Sesion.ID_foto_sesion_pk = Foto_SesionUrl.id_foto_sesion_fk
                             AND Foto_Sesion.id_sesion_fk = Sesion.ID_sesion_pk
                             AND Sesion.nombre = '".$coleccion."'
                             ORDER BY foto_sesion_path, producto_path
                           ";

        $img_coleccion = mysql_query($query_coleccion) or die(mysql_error());

        $img_productos = mysql_query($query_producto) or die(mysql_error());

?>

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
        <link rel="stylesheet" href="css/Galeria Colecciones.css">
        <script src="js/vendor/modernizr-2.6.2.min.js"></script>
    </head>
    <body>
        <?php include_once("analyticstracking.php") ?>
        <div id="wrapper">
            <div id="logo">   
                <a href="index.php"><img src="img/logo.png"></a>
            </div>
            <div id="antiOpacity">
                <div id="Contenedor">  
                    <div id="imgSelecCont">
                        <div id="loadingGaleria"></div>
                        <div id="imgSelec"><img id="imagenGrande" src=""/></div>';
                    </div>
                    <nav id="miniGaleria">
                            <ul id="miniTabla">
                                <?php
                                    $contaImg = 0;
                                        while (($coleccion = mysql_fetch_array($img_coleccion)) || ($producto = mysql_fetch_array($img_productos))) {
                                            $contaImg = $contaImg + 1;
                                            if ($coleccion) {
                                                print '
                                                      <li id="'.$contaImg.'">
                                                           <img id="miniatura" src="'.$coleccion[foto_mini_path].'""/>
                                                      </li>';

                                                $json[] = $coleccion;
                                            }  
                                            if($producto) {
                                                $jsonProductos[] = $producto;
                                            }
                                        }
                                ?>
                                <script>
                                    var $fetch_array =
                                    <?php 
                                        echo json_encode( $json ); 
                                    ?>
                                </script>
                                <script>
                                    var $productos =
                                    <?php 
                                        echo json_encode( $jsonProductos );   
                                    ?>
                                </script>
                            </ul>   
                    </nav>
                    <div id="miniCorsetCont">
                        <div id="contenedorInterno">
                            <img id="miniCorset" src=""/>
                            <div id="nombreProducto"></div>
                        </div>
                    </div>

                </div>
            </div>
            <div id="contenedor">
                <div id="nombreCorset"><p id="nombre"></p></div>
                <div id="tituloMateriales"></div>
                <div id="close"></div>
                <div id="loading"></div>
                <img src="" id="foto">  
                 <div id="borderDiv">
                </div>
                <div id="zoomDiv">
                    <img src="" id="zoomFoto">
                </div>
                <div id="descCont">
                  <div id="materiales"></div>
                </div>
            </div>
            <div id="cortina"></div>
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
        <script src="js/Galeria Colecciones.js"></script>
    </body>
</html>
