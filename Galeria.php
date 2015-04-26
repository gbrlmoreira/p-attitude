<?php       

       if($_SERVER['HTTP_HOST'] == 'localhost' || $_SERVER['HTTP_HOST'] == '127.0.0.1')
       {                
               $db_host = '';
               $db_name = '';
               $db_user = '';
               $db_pass = '';
       }
       
       else if($_SERVER['HTTP_HOST'] == '')
       {
               $db_host = '';
               $db_name = '';          
               $db_user = '';
               $db_pass = '';
       }

       $con = mysql_connect($db_host,$db_user,$db_pass);

       mysql_select_db($db_name);

       $actual_url = "$_SERVER[REQUEST_URI]";
       $producto = substr($actual_url, strpos($actual_url, '=')+1);       
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
        <link rel="stylesheet" href="css/Galeria.css">
        <script src="js/vendor/modernizr-2.6.2.min.js"></script>
    </head>
    <body>
        <?php include_once("analyticstracking.php") ?>
        <div id="wrapper">
            <div id="logo">   
                <a href="index.php"><img src="img/logo.png"></a>
            </div>
            <?php
                print'<p id="titulo">'.$producto.'</p>
                <div id="antiOpacity">
                    <center>';
                            $conta = 0;
                            $acum = 0;
                            print "<table>";

                             $query_img = " SELECT Url.miniatura_path, Url.producto_path, Producto.nombre_producto, Material.nombre_material
                                            FROM Url, Producto, UrlMaterial, Material
                                            WHERE Material.ID_material_pk = UrlMaterial.id_material_fk 
                                            AND UrlMaterial.id_url_fk = Url.ID_url_pk
                                            AND Url.id_producto_fk = Producto.ID_producto_pk
                                            AND Producto.tipo = '".$producto."'
                                            ORDER BY Url.miniatura_path
                                          ";

                             $img = mysql_query($query_img) or die(mysql_error());

                             while ($row = mysql_fetch_array($img)){
                                
                                $json[$acum] = $row; 
                                if (($acum==0) || ($json[$acum-1][miniatura_path]!=$json[$acum][miniatura_path])){
            
                                    $conta = $conta + 1;
                                    print '<td>
                                               <img id="miniatura" src="'.$row[miniatura_path].'""/>
                                          </td>';     
                                    if ($conta==6) {
                                        $conta = 0;
                                        print '<td><tr>
                                               <tr></td>';
                                    }   
                                }

                                $acum = $acum + 1;
                             }

                            print "</table>";    
                ?>
                <script>
                    var $productos =
                    <?php 
                        echo json_encode( $json );   
                    ?>
                </script>
                </center>
            </div>
            <div id="contenedor">
                <div id="nombreProducto"><p id="nombre"></p></div>
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
        <script src="js/Galeria.js"></script>
    </body>
</html>
