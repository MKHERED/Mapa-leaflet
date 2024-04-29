<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
	<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui' />
    <title>Taller de Leaflet</title>
  
    <script src="https://code.jquery.com/jquery-3.0.0.min.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="" />
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">

    <link rel="stylesheet" href="assets/css/map.css">
<!--     <link rel="stylesheet" href="Leaflet-MiniMap/dist/Control.MiniMap.min.css">
 -->    </head>
  <body class="h-100">
    <div class="h-100">
      <div class="row m-0 w-100 h-100" style="height:100vh !important">
        
        <div class="col-lg-4 col-md-4 col-sm-4 p-0 bg-warning" style="border: orange solid 1px; height:500px">
          <h4 class="p-2 text-light"><b>Sismos Recientes</b></h4>
          <div class="" style="position:relative; height: 445px; overflow-x: hidden; overflow-y: scroll; width: 100%;">
            <div id='sidebar' class="" style="height: 500px;">
            </div>            
          </div>


        </div>
        <div id="map" class="col-lg-8 col-md-8 col-sm-8" style="position: relative; height:500px">
        </div>          
        

      </div>

    </div>

    <?php $fp = fopen("maravilla.txt", "r"); $datos = fread($fp, filesize("maravilla.txt")); fclose($fp); 
              $fp2 = fopen("maravilla.json", "w");  fwrite($fp2, '{"type": "FeatureCollection","features": ['.$datos."]}"); fclose($fp2);?>
    
    <script src="assets/js/map.js"></script>
    
<!--     <script src="Leaflet-MiniMap/dist/Control.MiniMap.min.js"></script>
 -->
  </body>
</html>