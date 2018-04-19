//setting map
var map = L.map('map').setView([42.5972563,-82.8779754], 13);

// tile layer
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZm9sYXlhbmMiLCJhIjoiY2pnNXJpMHV1MXI2MzMzeGZ3MHRuenRvMiJ9.zWdPkhnfhVfGvIL3a3ixEg'
}).addTo(map);
//marker
var marker = L.marker([51.5, -0.09]).addTo(map);