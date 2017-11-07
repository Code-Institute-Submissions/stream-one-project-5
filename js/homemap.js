// All code in this file generated using OS Openspace Map Builder

//variables for routes
var linesLayer, points, lineFeature, lineString, routeMarkersLayer, routepos, routesize, routeoffset, routeicon;
var style_blue = {strokeColor: "#0000CD", strokeOpacity: 0.5, strokeWidth: 4.5};

function homeMap() {
	var options = {resolutions: [2500, 1000, 500, 200, 100, 50, 25, 10, 5, 4, 2.5, 2, 1]};
	osMap = new OpenSpace.Map('homeMap', options);
	setglobaloptions();
	osMap.setCenter(new OpenSpace.MapPoint(254382.5,68750),7);
}

homeMap();