// All code in this file generated using OS Openspace Map Builder

//variables for routes
var linesLayer, points, lineFeature, lineString, routeMarkersLayer, routepos, routesize, routeoffset, routeicon;
var style_blue = {strokeColor: "#0000CD", strokeOpacity: 0.5, strokeWidth: 4.5};

function nov17() {
	
	//initiate the map
	var options = {resolutions: [2500, 1000, 500, 200, 100, 50, 25, 10, 5, 4, 2.5, 2, 1]};
	osMap = new OpenSpace.Map('mapElement', options);

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

function dec17() {

//initiate the map
var options = {resolutions: [2500, 1000, 500, 200, 100, 50, 25, 10, 5, 4, 2.5, 2, 1]};
osMap = new OpenSpace.Map('mapElement', options);

//configure map options (basicmap.js)
setglobaloptions();
//set the center of the map and the zoom level
osMap.setCenter(new OpenSpace.MapPoint(258380,64435),7);
linesLayer = osMap.getVectorLayer();
// Set up layer for route markers
routeMarkersLayer = new OpenLayers.Layer.Markers("Route Markers");
//make a route
points = new Array();
points.push(new OpenLayers.Geometry.Point(257000,63195));
points.push(new OpenLayers.Geometry.Point(257150,63055));
points.push(new OpenLayers.Geometry.Point(257460,63215));
points.push(new OpenLayers.Geometry.Point(257700,63395));
points.push(new OpenLayers.Geometry.Point(257680,63655));
points.push(new OpenLayers.Geometry.Point(257700,63715));
points.push(new OpenLayers.Geometry.Point(257830,63615));
points.push(new OpenLayers.Geometry.Point(257950,63775));
points.push(new OpenLayers.Geometry.Point(258050,63665));
points.push(new OpenLayers.Geometry.Point(258280,63545));
points.push(new OpenLayers.Geometry.Point(258500,63455));
points.push(new OpenLayers.Geometry.Point(258740,63385));
points.push(new OpenLayers.Geometry.Point(259020,63105));
points.push(new OpenLayers.Geometry.Point(259340,63395));
points.push(new OpenLayers.Geometry.Point(259740,63735));
points.push(new OpenLayers.Geometry.Point(259910,64065));
points.push(new OpenLayers.Geometry.Point(260230,64545));
points.push(new OpenLayers.Geometry.Point(259520,65265));
points.push(new OpenLayers.Geometry.Point(259150,65515));
points.push(new OpenLayers.Geometry.Point(258670,66075));
points.push(new OpenLayers.Geometry.Point(258540,65985));
points.push(new OpenLayers.Geometry.Point(258270,65985));
points.push(new OpenLayers.Geometry.Point(258190,65995));
points.push(new OpenLayers.Geometry.Point(258140,65885));
points.push(new OpenLayers.Geometry.Point(258150,65805));
points.push(new OpenLayers.Geometry.Point(257990,65865));
points.push(new OpenLayers.Geometry.Point(257850,65835));
points.push(new OpenLayers.Geometry.Point(257850,65655));
points.push(new OpenLayers.Geometry.Point(257760,65365));
points.push(new OpenLayers.Geometry.Point(257770,65115));
points.push(new OpenLayers.Geometry.Point(257700,65005));
points.push(new OpenLayers.Geometry.Point(257610,65045));
points.push(new OpenLayers.Geometry.Point(257250,65015));
points.push(new OpenLayers.Geometry.Point(257190,64905));
points.push(new OpenLayers.Geometry.Point(257100,64635));
points.push(new OpenLayers.Geometry.Point(257110,64365));
points.push(new OpenLayers.Geometry.Point(257100,63885));
points.push(new OpenLayers.Geometry.Point(257100,63725));
points.push(new OpenLayers.Geometry.Point(257040,63405));
points.push(new OpenLayers.Geometry.Point(257000,63195));
// create a polyline feature from the array of points
lineString = new OpenLayers.Geometry.LineString(points);
lineFeature = new OpenLayers.Feature.Vector(lineString, null, style_blue);
linesLayer.addFeatures([lineFeature]);
//crate a route start/end marker
routepos = new OpenSpace.MapPoint(257000,63195);
routesize = new OpenLayers.Size(33,45);
routeoffset = new OpenLayers.Pixel(-5,-37);
routeicon = new OpenSpace.Icon('https://openspace.ordnancesurvey.co.uk/osmapapi/img_versions/img_1.1/mapbuilder/routemarker-startend.png', routesize, routeoffset, null, null);
routeMarkersLayer.addMarker(new OpenLayers.Marker(routepos, routeicon));
osMap.addLayer(routeMarkersLayer);
}


function jan18() {

//initiate the map
var options = {resolutions: [2500, 1000, 500, 200, 100, 50, 25, 10, 5, 4, 2.5, 2, 1]};
osMap = new OpenSpace.Map('mapElement', options);

//configure map options (basicmap.js)
setglobaloptions();
//set the center of the map and the zoom level
osMap.setCenter(new OpenSpace.MapPoint(258505,69755),7);
linesLayer = osMap.getVectorLayer();
// Set up layer for route markers
routeMarkersLayer = new OpenLayers.Layer.Markers("Route Markers");
//make a route
points = new Array();
points.push(new OpenLayers.Geometry.Point(256900,69275));
points.push(new OpenLayers.Geometry.Point(257180,69305));
points.push(new OpenLayers.Geometry.Point(257800,69315));
points.push(new OpenLayers.Geometry.Point(257980,69265));
points.push(new OpenLayers.Geometry.Point(258200,69285));
points.push(new OpenLayers.Geometry.Point(258980,69415));
points.push(new OpenLayers.Geometry.Point(259560,69525));
points.push(new OpenLayers.Geometry.Point(260010,69805));
points.push(new OpenLayers.Geometry.Point(260410,69915));
points.push(new OpenLayers.Geometry.Point(260400,70045));
points.push(new OpenLayers.Geometry.Point(260290,70365));
points.push(new OpenLayers.Geometry.Point(260030,70485));
points.push(new OpenLayers.Geometry.Point(259940,70605));
points.push(new OpenLayers.Geometry.Point(259850,70605));
points.push(new OpenLayers.Geometry.Point(259670,70615));
points.push(new OpenLayers.Geometry.Point(259430,70445));
points.push(new OpenLayers.Geometry.Point(259090,70355));
points.push(new OpenLayers.Geometry.Point(258780,70325));
points.push(new OpenLayers.Geometry.Point(258580,70415));
points.push(new OpenLayers.Geometry.Point(258520,70415));
points.push(new OpenLayers.Geometry.Point(258270,70445));
points.push(new OpenLayers.Geometry.Point(258120,70215));
points.push(new OpenLayers.Geometry.Point(258000,70115));
points.push(new OpenLayers.Geometry.Point(257780,70115));
points.push(new OpenLayers.Geometry.Point(257520,70075));
points.push(new OpenLayers.Geometry.Point(257320,69985));
points.push(new OpenLayers.Geometry.Point(257100,69795));
points.push(new OpenLayers.Geometry.Point(257100,69635));
points.push(new OpenLayers.Geometry.Point(256900,69475));
points.push(new OpenLayers.Geometry.Point(256830,69495));
points.push(new OpenLayers.Geometry.Point(256780,69425));
points.push(new OpenLayers.Geometry.Point(256920,69275));
points.push(new OpenLayers.Geometry.Point(256900,69275));
// create a polyline feature from the array of points
lineString = new OpenLayers.Geometry.LineString(points);
lineFeature = new OpenLayers.Feature.Vector(lineString, null, style_blue);
linesLayer.addFeatures([lineFeature]);
//crate a route start/end marker
routepos = new OpenSpace.MapPoint(256900,69275);
routesize = new OpenLayers.Size(33,45);
routeoffset = new OpenLayers.Pixel(-5,-37);
routeicon = new OpenSpace.Icon('https://openspace.ordnancesurvey.co.uk/osmapapi/img_versions/img_1.1/mapbuilder/routemarker-startend.png', routesize, routeoffset, null, null);
routeMarkersLayer.addMarker(new OpenLayers.Marker(routepos, routeicon));
osMap.addLayer(routeMarkersLayer);
}


function feb18() {

//initiate the map
var options = {resolutions: [2500, 1000, 500, 200, 100, 50, 25, 10, 5, 4, 2.5, 2, 1]};
osMap = new OpenSpace.Map('mapElement', options);

//configure map options (basicmap.js)
setglobaloptions();
//set the center of the map and the zoom level
osMap.setCenter(new OpenSpace.MapPoint(225435,72915),7);
linesLayer = osMap.getVectorLayer();
// Set up layer for route markers
routeMarkersLayer = new OpenLayers.Layer.Markers("Route Markers");
//make a route
points = new Array();
points.push(new OpenLayers.Geometry.Point(225930,71095));
points.push(new OpenLayers.Geometry.Point(226070,71175));
points.push(new OpenLayers.Geometry.Point(226150,71445));
points.push(new OpenLayers.Geometry.Point(226220,71565));
points.push(new OpenLayers.Geometry.Point(226270,71805));
points.push(new OpenLayers.Geometry.Point(226180,71975));
points.push(new OpenLayers.Geometry.Point(225950,72185));
points.push(new OpenLayers.Geometry.Point(225730,72325));
points.push(new OpenLayers.Geometry.Point(225740,72565));
points.push(new OpenLayers.Geometry.Point(225660,73095));
points.push(new OpenLayers.Geometry.Point(225860,73245));
points.push(new OpenLayers.Geometry.Point(225950,73595));
points.push(new OpenLayers.Geometry.Point(226010,73785));
points.push(new OpenLayers.Geometry.Point(225780,74425));
points.push(new OpenLayers.Geometry.Point(225420,74905));
points.push(new OpenLayers.Geometry.Point(225300,74775));
points.push(new OpenLayers.Geometry.Point(225280,74585));
points.push(new OpenLayers.Geometry.Point(225110,74435));
points.push(new OpenLayers.Geometry.Point(225020,74365));
points.push(new OpenLayers.Geometry.Point(224820,74275));
points.push(new OpenLayers.Geometry.Point(224800,73965));
points.push(new OpenLayers.Geometry.Point(224870,73625));
points.push(new OpenLayers.Geometry.Point(225150,73375));
points.push(new OpenLayers.Geometry.Point(225370,73225));
points.push(new OpenLayers.Geometry.Point(225320,73055));
points.push(new OpenLayers.Geometry.Point(225420,72975));
points.push(new OpenLayers.Geometry.Point(225410,72615));
points.push(new OpenLayers.Geometry.Point(225390,72435));
points.push(new OpenLayers.Geometry.Point(225280,72265));
points.push(new OpenLayers.Geometry.Point(225430,72155));
points.push(new OpenLayers.Geometry.Point(225440,71925));
points.push(new OpenLayers.Geometry.Point(225670,71415));
points.push(new OpenLayers.Geometry.Point(225830,71375));
points.push(new OpenLayers.Geometry.Point(225830,71265));
points.push(new OpenLayers.Geometry.Point(225930,71095));
// create a polyline feature from the array of points
lineString = new OpenLayers.Geometry.LineString(points);
lineFeature = new OpenLayers.Feature.Vector(lineString, null, style_blue);
linesLayer.addFeatures([lineFeature]);
//crate a route start/end marker
routepos = new OpenSpace.MapPoint(225930,71095);
routesize = new OpenLayers.Size(33,45);
routeoffset = new OpenLayers.Pixel(-5,-37);
routeicon = new OpenSpace.Icon('https://openspace.ordnancesurvey.co.uk/osmapapi/img_versions/img_1.1/mapbuilder/routemarker-startend.png', routesize, routeoffset, null, null);
routeMarkersLayer.addMarker(new OpenLayers.Marker(routepos, routeicon));
osMap.addLayer(routeMarkersLayer);
}

function mar18() {

//initiate the map
var options = {resolutions: [2500, 1000, 500, 200, 100, 50, 25, 10, 5, 4, 2.5, 2, 1]};
osMap = new OpenSpace.Map('mapElement', options);

//configure map options (basicmap.js)
setglobaloptions();
//set the center of the map and the zoom level
osMap.setCenter(new OpenSpace.MapPoint(243670,50400),7);
linesLayer = osMap.getVectorLayer();
// Set up layer for route markers
routeMarkersLayer = new OpenLayers.Layer.Markers("Route Markers");
//make a route
points = new Array();
points.push(new OpenLayers.Geometry.Point(243155,50310));
points.push(new OpenLayers.Geometry.Point(243365,50210));
points.push(new OpenLayers.Geometry.Point(243305,50160));
points.push(new OpenLayers.Geometry.Point(243495,49870));
points.push(new OpenLayers.Geometry.Point(243815,49650));
points.push(new OpenLayers.Geometry.Point(244065,49410));
points.push(new OpenLayers.Geometry.Point(244105,49160));
points.push(new OpenLayers.Geometry.Point(244165,48830));
points.push(new OpenLayers.Geometry.Point(243875,48890));
points.push(new OpenLayers.Geometry.Point(243525,48950));
points.push(new OpenLayers.Geometry.Point(243075,48950));
points.push(new OpenLayers.Geometry.Point(242645,48970));
points.push(new OpenLayers.Geometry.Point(242375,48830));
points.push(new OpenLayers.Geometry.Point(242205,48710));
points.push(new OpenLayers.Geometry.Point(242125,48570));
points.push(new OpenLayers.Geometry.Point(241915,48470));
points.push(new OpenLayers.Geometry.Point(241895,48840));
points.push(new OpenLayers.Geometry.Point(241805,48940));
points.push(new OpenLayers.Geometry.Point(242105,49210));
points.push(new OpenLayers.Geometry.Point(242245,49790));
points.push(new OpenLayers.Geometry.Point(242385,49850));
points.push(new OpenLayers.Geometry.Point(242435,49850));
points.push(new OpenLayers.Geometry.Point(242695,50010));
points.push(new OpenLayers.Geometry.Point(242885,50130));
points.push(new OpenLayers.Geometry.Point(243045,50240));
points.push(new OpenLayers.Geometry.Point(243155,50320));
points.push(new OpenLayers.Geometry.Point(243315,50300));
points.push(new OpenLayers.Geometry.Point(243335,50300));
points.push(new OpenLayers.Geometry.Point(243405,50360));
points.push(new OpenLayers.Geometry.Point(243485,50580));
points.push(new OpenLayers.Geometry.Point(244035,51100));
points.push(new OpenLayers.Geometry.Point(244375,51320));
points.push(new OpenLayers.Geometry.Point(244735,51430));
points.push(new OpenLayers.Geometry.Point(245015,51570));
points.push(new OpenLayers.Geometry.Point(245385,51610));
points.push(new OpenLayers.Geometry.Point(245445,51790));
points.push(new OpenLayers.Geometry.Point(245555,51670));
points.push(new OpenLayers.Geometry.Point(245825,51790));
points.push(new OpenLayers.Geometry.Point(245885,51960));
points.push(new OpenLayers.Geometry.Point(245875,52210));
points.push(new OpenLayers.Geometry.Point(245855,52420));
points.push(new OpenLayers.Geometry.Point(245765,52440));
points.push(new OpenLayers.Geometry.Point(245535,52170));
points.push(new OpenLayers.Geometry.Point(245365,52280));
points.push(new OpenLayers.Geometry.Point(245255,52380));
points.push(new OpenLayers.Geometry.Point(245055,52420));
points.push(new OpenLayers.Geometry.Point(244915,52250));
points.push(new OpenLayers.Geometry.Point(244555,52050));
points.push(new OpenLayers.Geometry.Point(244385,51820));
points.push(new OpenLayers.Geometry.Point(244215,51790));
points.push(new OpenLayers.Geometry.Point(244075,51710));
points.push(new OpenLayers.Geometry.Point(243935,51680));
points.push(new OpenLayers.Geometry.Point(243965,51570));
points.push(new OpenLayers.Geometry.Point(243835,51320));
points.push(new OpenLayers.Geometry.Point(243905,51180));
points.push(new OpenLayers.Geometry.Point(243855,51090));
points.push(new OpenLayers.Geometry.Point(243535,50750));
points.push(new OpenLayers.Geometry.Point(243395,50650));
points.push(new OpenLayers.Geometry.Point(243415,50440));
points.push(new OpenLayers.Geometry.Point(243355,50320));
points.push(new OpenLayers.Geometry.Point(243135,50310));
points.push(new OpenLayers.Geometry.Point(243155,50310));
// create a polyline feature from the array of points
lineString = new OpenLayers.Geometry.LineString(points);
lineFeature = new OpenLayers.Feature.Vector(lineString, null, style_blue);
linesLayer.addFeatures([lineFeature]);
//crate a route start/end marker
routepos = new OpenSpace.MapPoint(243155,50310);
routesize = new OpenLayers.Size(33,45);
routeoffset = new OpenLayers.Pixel(-5,-37);
routeicon = new OpenSpace.Icon('https://openspace.ordnancesurvey.co.uk/osmapapi/img_versions/img_1.1/mapbuilder/routemarker-startend.png', routesize, routeoffset, null, null);
routeMarkersLayer.addMarker(new OpenLayers.Marker(routepos, routeicon));
osMap.addLayer(routeMarkersLayer);
}

function apr18() {
	
//initiate the map
var options = {resolutions: [2500, 1000, 500, 200, 100, 50, 25, 10, 5, 4, 2.5, 2, 1]};
osMap = new OpenSpace.Map('mapElement', options);

//configure map options (basicmap.js)
setglobaloptions();
//set the center of the map and the zoom level
osMap.setCenter(new OpenSpace.MapPoint(254284,86838),7);
linesLayer = osMap.getVectorLayer();
// Set up layer for route markers
routeMarkersLayer = new OpenLayers.Layer.Markers("Route Markers");
//make a route
points = new Array();
points.push(new OpenLayers.Geometry.Point(252509,85393));
points.push(new OpenLayers.Geometry.Point(252919,85683));
points.push(new OpenLayers.Geometry.Point(253059,85713));
points.push(new OpenLayers.Geometry.Point(252969,86183));
points.push(new OpenLayers.Geometry.Point(253029,86313));
points.push(new OpenLayers.Geometry.Point(253179,86403));
points.push(new OpenLayers.Geometry.Point(253429,86833));
points.push(new OpenLayers.Geometry.Point(253649,87063));
points.push(new OpenLayers.Geometry.Point(253689,87263));
points.push(new OpenLayers.Geometry.Point(253709,87473));
points.push(new OpenLayers.Geometry.Point(253859,87713));
points.push(new OpenLayers.Geometry.Point(254219,87943));
points.push(new OpenLayers.Geometry.Point(254379,88083));
points.push(new OpenLayers.Geometry.Point(254479,88403));
points.push(new OpenLayers.Geometry.Point(254549,88793));
points.push(new OpenLayers.Geometry.Point(254659,88483));
points.push(new OpenLayers.Geometry.Point(254929,88123));
points.push(new OpenLayers.Geometry.Point(255039,87773));
points.push(new OpenLayers.Geometry.Point(254999,87483));
points.push(new OpenLayers.Geometry.Point(255269,87233));
points.push(new OpenLayers.Geometry.Point(255219,86833));
points.push(new OpenLayers.Geometry.Point(255469,86653));
points.push(new OpenLayers.Geometry.Point(255909,86503));
points.push(new OpenLayers.Geometry.Point(255809,86273));
points.push(new OpenLayers.Geometry.Point(255719,86113));
points.push(new OpenLayers.Geometry.Point(255409,85543));
points.push(new OpenLayers.Geometry.Point(255279,85343));
points.push(new OpenLayers.Geometry.Point(254669,85373));
points.push(new OpenLayers.Geometry.Point(254489,85443));
points.push(new OpenLayers.Geometry.Point(253909,85653));
points.push(new OpenLayers.Geometry.Point(253779,85593));
points.push(new OpenLayers.Geometry.Point(253579,85533));
points.push(new OpenLayers.Geometry.Point(253249,85753));
points.push(new OpenLayers.Geometry.Point(253079,85723));
points.push(new OpenLayers.Geometry.Point(252849,85653));
points.push(new OpenLayers.Geometry.Point(252579,85453));
points.push(new OpenLayers.Geometry.Point(252509,85393));
// create a polyline feature from the array of points
lineString = new OpenLayers.Geometry.LineString(points);
lineFeature = new OpenLayers.Feature.Vector(lineString, null, style_blue);
linesLayer.addFeatures([lineFeature]);
//crate a route start/end marker
routepos = new OpenSpace.MapPoint(252509,85393);
routesize = new OpenLayers.Size(33,45);
routeoffset = new OpenLayers.Pixel(-5,-37);
routeicon = new OpenSpace.Icon('https://openspace.ordnancesurvey.co.uk/osmapapi/img_versions/img_1.1/mapbuilder/routemarker-startend.png', routesize, routeoffset, null, null);
routeMarkersLayer.addMarker(new OpenLayers.Marker(routepos, routeicon));
osMap.addLayer(routeMarkersLayer);
}

nov17();