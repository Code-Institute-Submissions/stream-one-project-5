/* Create global variables for gallery month and chosen image to enable use between functions. */
var chosenImage;
var activeMonth;
var activeGallery;

/* Function for opening lightbox when an image is clicked. */
function openBox(month, imagePosition) {
	/* Set array for photos in the gallery. */
	activeGallery = document.getElementsByClassName(month);

	/* When an image is clicked, display the lightbox element. */
	document.getElementById("lightbox").classList.remove("hiddenContent");

	/* Select an image from the gallery and put its HTML in the lightbox element. */
	chosenImage = imagePosition;
	activeMonth = month;
	document.getElementById("boxImage").innerHTML = '<img src="img/' + month + '/' + imagePosition +'.jpg" alt="Walk Image" />';

	/* Hide the 'previous' icon if the first image is chosen and the 'next' icon if the last image is chosen. */
	if (chosenImage === 1) {
		document.getElementById("previousImage").classList.add("hiddenContent");
	} else if (chosenImage === activeGallery.length) {
		document.getElementById("nextImage").classList.add("hiddenContent");
	}
}

/* After an image is selected, the user can move back to the previous image. */
function previousImage() {

	/* Display the 'next' icon if moving away from the last image. */
	if (chosenImage === activeGallery.length) {
		document.getElementById("nextImage").classList.remove("hiddenContent");
	}

	/* Choose the previous image and put its HTML in the lightbox element. */
	chosenImage--;
	document.getElementById("boxImage").innerHTML = '<img src="img/' + activeMonth + '/' + chosenImage +'.jpg" alt="Walk Image" />';

	/* Hide the 'previous' icon if the new image is the first one. */
	if (chosenImage === 1) {
		document.getElementById("previousImage").classList.add("hiddenContent");
	} 

}

/* After an image is selected, the user can move on to the next image. */
function nextImage() { 

	/* Display the 'previous' icon if moving away from the first image. */
	if (chosenImage === 1) {
		document.getElementById("previousImage").classList.remove("hiddenContent");
	}

	/* Choose the next image and put its HTML in the lightbox element. */
	chosenImage++;
	document.getElementById("boxImage").innerHTML = '<img src="img/' + activeMonth + '/' + chosenImage +'.jpg" alt="Walk Image" />';

	/* Hide the 'next' icon if the new image is the last one. */
	if (chosenImage === activeGallery.length) {
		document.getElementById("nextImage").classList.add("hiddenContent");
	} 

}

/* When the close icon is clicked, hide the lightbox element and ensure that both the 'previous' and 'next' icons do not remain hidden. */
function closeBox() {
	document.getElementById("lightbox").classList.add("hiddenContent");
	document.getElementById("previousImage").classList.remove("hiddenContent");
	document.getElementById("nextImage").classList.remove("hiddenContent");
}