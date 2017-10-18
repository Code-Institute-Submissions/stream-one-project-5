// All code in this file generated using OS Openspace Map Builder

	//variables for routes
	var linesLayer, points, lineFeature, lineString, routeMarkersLayer, routepos, routesize, routeoffset, routeicon;
	var style_blue = {strokeColor: "#0000CD", strokeOpacity: 0.5, strokeWidth: 4.5};

	function novMap() {
	
		//initiate the map
		var options = {resolutions: [2500, 1000, 500, 200, 100, 50, 25, 10, 5, 4, 2.5, 2, 1]};
		osMap = new OpenSpace.Map('map', options);

		//configure map options (basicmap.js)
		setglobaloptions();
		//set the center of the map and the zoom level
		osMap.setCenter(new OpenSpace.MapPoint(255765,70700),7);
		linesLayer = osMap.getVectorLayer();

		// Set up layer for route markers
		routeMarkersLayer = new OpenLayers.Layer.Markers("Route Markers");

		//make a route
		points = new Array();
		points.push(new OpenLayers.Geometry.Point(254695,69250));
		points.push(new OpenLayers.Geometry.Point(254885,69440));
		points.push(new OpenLayers.Geometry.Point(254915,69760));
		points.push(new OpenLayers.Geometry.Point(254845,70220));
		points.push(new OpenLayers.Geometry.Point(254805,70360));
		points.push(new OpenLayers.Geometry.Point(254655,70470));
		points.push(new OpenLayers.Geometry.Point(254525,70610));
		points.push(new OpenLayers.Geometry.Point(254515,70720));
		points.push(new OpenLayers.Geometry.Point(254565,70920));
		points.push(new OpenLayers.Geometry.Point(254675,71040));
		points.push(new OpenLayers.Geometry.Point(254835,71090));
		points.push(new OpenLayers.Geometry.Point(254955,71130));
		points.push(new OpenLayers.Geometry.Point(255155,71260));
		points.push(new OpenLayers.Geometry.Point(255315,71340));
		points.push(new OpenLayers.Geometry.Point(255435,71340));
		points.push(new OpenLayers.Geometry.Point(255575,71480));
		points.push(new OpenLayers.Geometry.Point(255595,71700));
		points.push(new OpenLayers.Geometry.Point(255505,71900));
		points.push(new OpenLayers.Geometry.Point(255345,72050));
		points.push(new OpenLayers.Geometry.Point(255385,72190));
		points.push(new OpenLayers.Geometry.Point(255545,72240));
		points.push(new OpenLayers.Geometry.Point(255765,72240));
		points.push(new OpenLayers.Geometry.Point(256015,72260));
		points.push(new OpenLayers.Geometry.Point(256255,72420));
		points.push(new OpenLayers.Geometry.Point(256375,72580));
		points.push(new OpenLayers.Geometry.Point(256755,72620));
		points.push(new OpenLayers.Geometry.Point(256955,72640));
		points.push(new OpenLayers.Geometry.Point(257105,72460));
		points.push(new OpenLayers.Geometry.Point(257245,72210));
		points.push(new OpenLayers.Geometry.Point(257325,71890));
		points.push(new OpenLayers.Geometry.Point(257335,71670));
		points.push(new OpenLayers.Geometry.Point(257245,71410));
		points.push(new OpenLayers.Geometry.Point(257185,71280));
		points.push(new OpenLayers.Geometry.Point(256995,71120));
		points.push(new OpenLayers.Geometry.Point(256895,71050));
		points.push(new OpenLayers.Geometry.Point(256915,70920));
		points.push(new OpenLayers.Geometry.Point(256905,70670));
		points.push(new OpenLayers.Geometry.Point(256885,70550));
		points.push(new OpenLayers.Geometry.Point(256805,70460));
		points.push(new OpenLayers.Geometry.Point(256755,70390));
		points.push(new OpenLayers.Geometry.Point(256645,70210));
		points.push(new OpenLayers.Geometry.Point(256555,69910));
		points.push(new OpenLayers.Geometry.Point(256485,69590));
		points.push(new OpenLayers.Geometry.Point(256405,69540));
		points.push(new OpenLayers.Geometry.Point(256115,69530));
		points.push(new OpenLayers.Geometry.Point(255965,69520));
		points.push(new OpenLayers.Geometry.Point(255735,69450));
		points.push(new OpenLayers.Geometry.Point(255455,69340));
		points.push(new OpenLayers.Geometry.Point(255315,69280));
		points.push(new OpenLayers.Geometry.Point(255255,69250));
		points.push(new OpenLayers.Geometry.Point(255195,69230));
		points.push(new OpenLayers.Geometry.Point(255025,69230));
		points.push(new OpenLayers.Geometry.Point(254865,69220));
		points.push(new OpenLayers.Geometry.Point(254705,69260));
		points.push(new OpenLayers.Geometry.Point(254695,69250));

		// create a polyline feature from the array of points
		lineString = new OpenLayers.Geometry.LineString(points);
		lineFeature = new OpenLayers.Feature.Vector(lineString, null, style_blue);
		linesLayer.addFeatures([lineFeature]);

		//create a route start/end marker
		routepos = new OpenSpace.MapPoint(254695,69250);
		routesize = new OpenLayers.Size(33,45);
		routeoffset = new OpenLayers.Pixel(-5,-37);
		routeicon = new OpenSpace.Icon('https://openspace.ordnancesurvey.co.uk/osmapapi/img_versions/img_1.1/mapbuilder/routemarker-startend.png', routesize, routeoffset, null, null);
		routeMarkersLayer.addMarker(new OpenLayers.Marker(routepos, routeicon));
		osMap.addLayer(routeMarkersLayer);
	}

	window.onload = novMap();