// map initialization
var map = L.map('map').setView([30.033333, 31.233334], 7);
// marker
var marker = L.marker([30.033333, 31.233334], {draggable : false}).addTo(map)
// marker popup
marker.bindPopup(`<b>Hello!</b><br>Welcome in Egypt. ${marker.getLatLng()}`)

// osm tile layer
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
// osm layer 2
var sTerrain = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 18,
    ext: 'png'
})
// osm layer 3
var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});
// osm layer 4
var CartoDB_DarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
});
// osm layer 5
var Esri_WorldStreetMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
});
// Control.Layers
var baseLayers = {
    "OpenStreetMap": osm,
    "Mapbox": sTerrain,
    "Esri_WorldImagery": Esri_WorldImagery,
    "Esri_WorldStreetMap": Esri_WorldStreetMap,
    "Dark": CartoDB_DarkMatter,
    
};
var overlays = {
    "Marker": marker
};
L.control.layers(baseLayers, overlays).addTo(map);
// GeoCoder location search
L.Control.geocoder().addTo(map);
//circle
var circle = L.circle([30.033333, 31.233334], {
    color : 'red',
    fillColor : '#f03',
    fillOpcaity: 0.5,
    radius : 500
}).addTo(map)

// get x , y
function onMapClick(e) {
    document.getElementById("mapinfo").value = ` Lng (X) : ${e.latlng.lng} | lat (Y) : ${e.latlng.lat} `
}
map.on("click", onMapClick)
// x,y popup
let pop = L.popup()
function mapPopup(e) {
    pop.setLatLng(e.latlng).setContent( "lng (X) : "+ e.latlng.lng.toString() + "<br>" + " lat (Y) : " + e.latlng.lat.toString()).openOn(map)
}
map.on("click", mapPopup)

// search input and button by Lat,Lng
// JS Script
var searchBtn = document.getElementById("leaflet-search-btn");
searchBtn.onclick = function () {
    var latandLng = document.getElementById("search").value
    var latandLngArr = latandLng.split(',');
    var lat = latandLngArr[0];
    var lng = latandLngArr[1];
    //circle
    var makeCircle = L.circle([lat, lng], {
        color : 'red',
        fillColor : '#f03',
        fillOpcaity: 0.5,
        radius : 10
    }).addTo(map)
    var makeMarker = L.marker([lat,lng], {draggable : false}).addTo(map);
    makeMarker.bindPopup(`<b>Hello!</b><br>Your Location is: ${makeMarker.getLatLng()}`)
    map.setView([lat, lng], 10);
    makeMarker.setLatLng([lat, lng])
}
// lat and lng sible search
var singleSearchBtn = document.getElementById("single-search-btn");
singleSearchBtn.onclick = function () {
    var latValue = document.getElementById("search-lat").value
    var lngValue = document.getElementById("search-lng").value
    //circle
    var puttingCircle = L.circle([latValue, lngValue], {
        color : 'red',
        fillColor : '#f03',
        fillOpcaity: 0.5,
        radius : 10
    }).addTo(map)
    var puttingMarker = L.marker([latValue,lngValue], {draggable : false}).addTo(map);
    puttingMarker.bindPopup(`<b>Hello!</b><br>Your Location is: ${puttingMarker.getLatLng()}`)
    map.setView([latValue, lngValue], 10);
    puttingMarker.setLatLng([latValue, lngValue])
} 