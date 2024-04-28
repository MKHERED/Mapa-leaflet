var map = L.map('map', {
    center: [7.0596886,-66.0217061],
    zoom: 6,
    //minZoom: 10,
    //maxZoom: 18,
    //maxBounds: [[37.65882,-5.01595], [38.03836,-4.33411]]
});

var basemapOSM = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

basemapOSM.addTo(map);

/* Práctica 6.- Añadiendo capa vectorial GeoJSON (JQuery) */
/*
var centros = L.geoJson(null);

centros.getAttribution = function() {
 return 'Fuente: <a href="http://www.juntadeandalucia.es/institutodeestadisticaycartografia/DERA/" target="_blank">IECA</a>';
};

$.getJSON("data/centros_educativos.geojson", function (data) {
  centros.addData(data);
});

centros.addTo(map);

*/
/* Práctica 7.- Control de capas */

/*
var baseMaps = {
  "OSM": basemapOSM
};

var overlayMaps = {
  "Centros educativos": centros
};

L.control.layers(baseMaps, overlayMaps,{
  position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
  collapsed: false // true
}).addTo(map);
*/
/* Práctica 8.- Escala */
/*
L.control.scale({
  imperial: false
}).addTo(map);
*/
/* Práctica 10.- Información de los centros */
/*
function centrosInfoPopup(feature, layer) {

layer.bindPopup(feature.properties.nombre);
  }
/*
var centros = L.geoJson(null, {
onEachFeature: centrosInfoPopup,
});
*/
/*
map.eachLayer(function(layer){
  layer.bindPopup('Hello');
});
*/
/*
var centros = L.geoJson(null, {
  onEachFeature: function (feature, layer){
    var popupContent ="hola";
    layer.bindPopup(popupContent);
  }
}).addto(map)

centros.addData(data)*/



//aqui funciona bien **** NO BORRAR ****

/*
getData = async () => {
  var responses = await fetch('./data/centros_educativos.geojson');
  const dataResponses = await responses.json();
  var date = dataResponses.features;
  //console.log(data)

  const getLine = (nameLine) => date.filter(date => date.properties.tipogen.includes(nameLine));

  const date1 = getLine("Educación Infantil y Primaria");


  /*
  bindPopup(function (date, layer){
    return layer.date.properties.nombre
  }).addTo(map)
  */

  /*
  L.geoJson(date).bindPopup( function (layer){
    popupContent =  "<h4>" + layer.feature.properties.nombre + "</h4><hr>"+"<strong> Tipo: </strong>"+layer.feature.properties.tipo+"<br/>"+ "<strong> Gestión: </strong>"+layer.feature.properties.gestion+"<br/>"+ "<strong> Domicilio: </strong>"+layer.feature.properties.direccion+"<br/>"+ "<strong> Localidad: </strong>"+layer.feature.properties.localidad+"<br/>"+ "<strong> Teléfono: </strong>"+layer.feature.properties.tlfno+"<br/>"+ "<strong> Enseñanza: </strong>"+layer.feature.properties.enseñanza+"<br/>"+ "<strong> Servicios: </strong>"+layer.feature.properties.servicios+"<br/>"+ "<strong> Bilingüe: </strong>"+layer.feature.properties.bilingüe+"<br/>"
    return popupContent;
  }).addTo(map);
  console.log(date1)

  L.control.scale({
    imperial: false
  }).addTo(map);
}

getData()*/


function style() {											
    return {
      color: 'white',
      //width:1,
      fillColor: 'grey',
      opacity:0.3,
      fillOpacity:0,
 };}

getData = async () => {
  const vnzjson = await fetch('./data/venezuela.geojson');
  const vnzdata = await vnzjson.json(); 

  //const getLine = (nameLine) => sismos.filter(sismo => sismo.type.includes(nameLine))
  //const sismosOcurridos = getLine("Feature")

  L.geoJson(vnzdata, {style: style}).bindPopup(
    function (layer) {
      popupContent = layer.feature.properties.ESTADO;
      return popupContent;
    }).addTo(map);
}

getData()



  /*
  $fp = fopen("maravilla.json", "w");
  fwrite($fp, $jsondatos);
  fclose($fp); 
  */