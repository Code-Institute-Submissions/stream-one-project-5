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

	/* Display the position of the current image within the active gallery, e.g. '1/6'. */
	document.getElementById("imageCounter").textContent = imagePosition + '/' + activeGallery.length;

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

/* After an image is selected, the user can move to either the previous or next image. */
function changeImage(direction) {

	/* Ensure both the 'previous' and 'next' icons are displayed in case the old image was either the first or last in the gallery. */
	if (chosenImage === 1) {
		document.getElementById("previousImage").classList.remove("hiddenContent");
	} else if (chosenImage === activeGallery.length) {
		document.getElementById("nextImage").classList.remove("hiddenContent");
	}

	/* If the user selects the previous image, decrease 'chosenImage' by 1. Likewise if the user selects the next image, increase 'chosenImage' by 1. */
	if (direction === 'prev') {
		chosenImage--;
	} else if (direction === 'next') {
		chosenImage++;
	}

	/* Put the HTML of the new image in the lightbox element. */
	document.getElementById("boxImage").innerHTML = '<img src="img/' + activeMonth + '/' + chosenImage +'.jpg" alt="Walk Image" />';

	/* Display the position of the new image within the active gallery. */
	document.getElementById("imageCounter").textContent = chosenImage + '/' + activeGallery.length;

	/* Hide the 'previous' icon if the new image is the first one or the 'next' icon if the new image is the last one. */
	if (chosenImage === 1) {
		document.getElementById("previousImage").classList.add("hiddenContent");
	} else if (chosenImage === activeGallery.length) {
		document.getElementById("nextImage").classList.add("hiddenContent");
	} 

}

/* When the close icon is clicked, hide the lightbox element and ensure that both the 'previous' and 'next' icons do not remain hidden. */
function closeBox() {
	document.getElementById("lightbox").classList.add("hiddenContent");
	document.getElementById("previousImage").classList.remove("hiddenContent");
	document.getElementById("nextImage").classList.remove("hiddenContent");
}