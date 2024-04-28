<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
	<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui' />
    <title>Taller de Leaflet</title>
  
    <script src="https://code.jquery.com/jquery-3.0.0.min.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="" />
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>

    <link rel="stylesheet" href="assets/css/map.css">
<!--     <link rel="stylesheet" href="Leaflet-MiniMap/dist/Control.MiniMap.min.css">
 -->    </head>
  <body>

    <div id='map'></div>
    <script>
      
      
     txt = <?php $fp = fopen("maravilla.txt", "r"); $datos = fread($fp, filesize("maravilla.txt")); $jsondatos = "[".$datos."]"; echo $jsondatos; fclose($fp); ?>


      stores = {

      "type": "FeatureCollection",

      "features": [
          txt
      ]};

      getSismo = async () => {
        const response = txt 
        //datajson = await response.json();

        //console.log(datajson);
        
        dataSismos = stores;
        sismos = dataSismos;
      
        console.log(stores);
        const getLine = (nameLine) => sismos.filter(sismos => sismos.properties.type.includes(nameLine))
        const sismos1 = getLine("Point")
      
      }

      getSismo()

        //const responseSismos = await fetch("./maravilla.txt");
        //dataSismosjson = await responseSismos.json();


        
        

        //const getLine = (nameLine) => date.filter(date => date.properties.tipogen.includes(nameLine));
        //const sismosOcurridos = getLine("Feature")









    </script>
    <script src="assets/js/map.js"></script>
<!--     <script src="Leaflet-MiniMap/dist/Control.MiniMap.min.js"></script>
 -->
  </body>
</html>