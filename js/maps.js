/* All the code in this file was generated by OS Openspace Map Builder at https://www.ordnancesurvey.co.uk/business-and-government/help-and-support/web-services/os-openspace/web-map-builder.html, before being edited to improve functionality. */

function loadMap(month) {

	/* Set the chosen month to be the first available on page load, otherwise set it to the month selected from the menu. */
	var chosenMonth;
	var walkList = document.getElementsByClassName("walkSwitcher");
	if (month === undefined) {
		chosenMonth = walkList[0].id;
	} else {
		chosenMonth = month;
	}

	/* Ensure that the 'mapElement' div is empty in readiness for a new map. */
	document.getElementById("routeMap").innerHTML = "";

	/* Variables to initialise the map, generated by OS Openspace Map Builder. Variable osMap created in remotely hosted OS Openspace file basicmap.js. */
	var options = {resolutions: [2500, 1000, 500, 200, 100, 50, 25, 10, 5, 4, 2.5, 2, 1]};
	osMap = new OpenSpace.Map('routeMap', options);

	/* Variables to create the route line, generated by OS Openspace Map Builder. */
	var linesLayer, points, lineFeature, lineString, routeMarkersLayer, routepos, routesize, routeoffset, routeicon;
	var style_blue = {strokeColor: "#0000cc", strokeOpacity: 0.5, strokeWidth: 4.5};

	/* Function to configure map options, defined in OS Openspace file basicmap.js. */
	setglobaloptions();

	/* Variables to set grid references based on values in the MAP_DATA object, stored in mapdata.js. */
	var centerPoint = MAP_DATA[chosenMonth].center;
	var startPoint = MAP_DATA[chosenMonth].start;
	var routePoint = MAP_DATA[chosenMonth].route;

	/* Code to set the centre point of the map and the zoom layer, generated by OS Openspace Map Builder. */
	osMap.setCenter(new OpenSpace.MapPoint(centerPoint.x, centerPoint.y),7);
	var linesLayer = osMap.getVectorLayer();

	/* Empty array to hold map reference points for route map. */
	var points = [];

	/* Loop to push points into route array. */
	for (var i = 0; i < routePoint.length; i++) {
		points.push(new OpenLayers.Geometry.Point(routePoint[i].x, routePoint[i].y));
	}

	/* Variables to create a polyline feature from the array of points, generated by OS Openspace Map Builder. */
	var routeMarkersLayer = new OpenLayers.Layer.Markers("Route Markers");
	var lineString = new OpenLayers.Geometry.LineString(points);
	var lineFeature = new OpenLayers.Feature.Vector(lineString, null, style_blue);
	linesLayer.addFeatures([lineFeature]);

	/* Variables to create and position the start/finish marker, generated by OS Openspace Map Builder. */
	var routepos = new OpenSpace.MapPoint(startPoint.x,startPoint.y);
	var routesize = new OpenLayers.Size(33,45);
	var routeoffset = new OpenLayers.Pixel(-5,-37);
	var routeicon = new OpenSpace.Icon('https://openspace.ordnancesurvey.co.uk/osmapapi/img_versions/img_1.1/mapbuilder/routemarker-startend.png', routesize, routeoffset, null, null);
	routeMarkersLayer.addMarker(new OpenLayers.Marker(routepos, routeicon));
	osMap.addLayer(routeMarkersLayer);

}

loadMap();