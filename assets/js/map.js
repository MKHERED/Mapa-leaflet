var map = L.map('map', {
    //center: [7.0596886,-66.0217061],
    zoomControl: false,
    zoom: 5,
    //minZoom: 10,
    maxZoom: 17,
    //maxBounds: [[37.65882,-5.01595], [38.03836,-4.33411]]
});

var basemapOSM = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'by Mike Naranjo'
});

basemapOSM.addTo(map);

L.control.zoom({
  zoomInTitle: 'Acercar',
  zoomOutTitle: 'Alejar',
  position: "topright",
}).addTo(map)

//L.control.attribution(, options)

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

L.control.scale({
  imperial: false
}).addTo(map);

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





getSismo = async () => {
  var responsesismo = await fetch('./maravilla.json');
  const dataResponsesismos = await responsesismo.json();
  var date = dataResponsesismos.features;
  
  console.log(date)

  const getLine = (nameLine) => date.filter(date => date.type.includes(nameLine));

  const sismosOcurridos = getLine("Feature");

  let sismoIcon = L.icon({
      iconUrl: './img/marker4.png',
      
      iconSize:     [80, 40], // size of the icon
      iconAnchor:   [50, 50], // point of the icon which will correspond to marker's location
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
      })

  let markerIcon = L.icon({
      iconUrl: './img/marker4.png',
      
      iconSize:     [50, 50], 
      })
    /*
  const acercar = function(ev) {
      var coord = ev.latlng.toString().split(',');
      var lat = coord[0].split('(');
      var lng = coord[1].split(')');

      map.flyTo([lat[1], lng[0]], 14);
  }
*/


  function objetoReciente(localizado, lat, long, fecha, hora, profundidad, magnitud){
    barra = document.querySelector("#sidebar")
    //<div class="border-top border-bottom pb-1 p-2"><b>a 20 km de tal parte</b><p>Fecha y hora · profundidad 0.0km <br> Magnitud 3.2</p></div>
    barra.insertAdjacentHTML('afterbegin','<div class="border-top border-bottom pb-1 p-2 bg-light" onclick="acercar('+lat+','+long+')"><b>'+localizado+'</b><p>'+fecha+' '+hora+' · '+profundidad+' <br>Magnitud: '+magnitud+'</p></div>')
  }

  marcador = L.geoJson(sismosOcurridos, {
          onEachFeature: function(feature, layer){
              layer.bindPopup(
                  '<h4 style="font-size: 17px !important; text-decoration-line: underline; text-decoration-color: orange; margin-bottom: 0px !important;">Información del sismo</h4>'+
                  
                  '<b>Fecha: </b>'+ feature.properties.postalCode+
                  '<br>'+
                  '<b>Hora (HLV): </b>'+ feature.properties.city+
                  '<br>'+
                  '<b>Magnitud: </b>'+ feature.properties.phone+
                  '<br>'+
                  '<b>Epicentro</b>'+
                  '<br>'+
                      '<b> &nbsp; Latitud: </b>' + feature.properties.lat+ '°'+
                      '<br>'+
                      '<b> &nbsp; Longitud: </b>'+ feature.properties.long+ '°'+
                      '<br>'+
                      '<p style="margin:0px; max-width:170px" ><b> &nbsp; Localizado a: </b>'+ feature.properties.address+ '</p>'+
                      
                  '<b>Profundidad: </b>'+ feature.properties.state
                  );
                
              layer.setIcon(markerIcon);
              //layer.acercar
              //acercar(feature.properties.lat, feature.properties.long)
              objetoReciente(feature.properties.address, feature.properties.lat, feature.properties.long, feature.properties.postalCode, feature.properties.city, feature.properties.state, feature.properties.phone)

          }
      }).addTo(map)

    map.fitBounds(marcador.getBounds())
}

getSismo()

function acercar(lat, long) {
  map.flyTo([lat, long], 10);
}