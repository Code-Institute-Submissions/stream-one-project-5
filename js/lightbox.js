/* Set variable to control activeImage element. */
var lightbox = document.getElementById("activeImage");

/* Set array for photos in the gallery. */
var walkGallery = document.getElementsByClassName("walkGallery");

/* Create global variables for gallery month and chosen image to enable use between functions. */
var chosenImage;
var activeMonth;

/* Set variable with HTML for lightbox controls. */
var boxControls = '\
	<div id="boxCloser" onclick="closeBox()">&times;</div>\
	<div id="previousImage" onclick="previousImage()">&#10094;</div>\
	<div id="nextImage" onclick="nextImage()">&#10095;</div>\
	';

/* Function for opening lightbox when an image is clicked. */
function openBox(month, imagePosition) {
	/* When an image is clicked, display the activeImage element. */
	lightbox.style.display = "block";

	/* Select the correct image from the walkGallery array and put its HTML in the activeImage element. */
	chosenImage = imagePosition;
	activeMonth = month;
	lightbox.innerHTML = boxControls + '<img src="img/' + month + '/' + imagePosition +'.jpg" alt="Walk Image" />';
	if (chosenImage === 1) {
		document.getElementById("previousImage").style.display = "none";
	} else if (chosenImage === walkGallery.length) {
		document.getElementById("nextImage").style.display = "none";
	}
}

/* After an image is selected, the user can move back to the previous image. */
function previousImage() {
	chosenImage--;
	lightbox.innerHTML = boxControls + '<img src="img/' + activeMonth + '/' + chosenImage +'.jpg" alt="Walk Image" />';
	if (chosenImage === 1) {
		document.getElementById("previousImage").style.display = "none";
	}
}

/* After an image is selected, the user can move on to the next image. */
function nextImage() { 
	chosenImage++;
	lightbox.innerHTML = boxControls + '<img src="img/' + activeMonth + '/' + chosenImage +'.jpg" alt="Walk Image" />';
	if (chosenImage === walkGallery.length) {
		document.getElementById("nextImage").style.display = "none";
	}
}

/* When the close icon is clicked, remove the image HTML from the activeImage element and hide it. */
function closeBox() {
	lightbox.style.display = "none";
}