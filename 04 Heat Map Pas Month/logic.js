///

var mapbox = 'https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2pnMzEwIiwiYSI6ImNpdGRjbWhxdjAwNG0yb3A5b21jOXluZTUifQ.T6YbdDixkOBWH_k9GbS8JQ'

var myMap = L.map('map', {
    center: [39.8283, -98.5795],
    zoom: 4
});

L.tileLayer(mapbox).addTo(myMap);

var usgs = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson"



d3.json(usgs, function (response) {

    var heatArray = [];

    //console.log(response.features[0].properties.title);

    for (var i = 0; i < response.features.length; i++) {
        var location = response.features[i].geometry.coordinates;
        var lat = location[1];
        var lng = location[0];
        //var info = response.features[i].properties.title;

        if (location) {
            heatArray.push([lat, lng]);
        }
    }

    var heat = L.heatLayer(heatArray, {
        radius: 10,
        blur: 5
    }).addTo(myMap)
});
///