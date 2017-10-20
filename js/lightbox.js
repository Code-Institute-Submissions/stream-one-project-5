/* Set variable to control activeImage element. */
var lightbox = document.getElementById("activeImage");

/* Set variable for default HTML of activeImage element. */
var boxControls = document.getElementById("activeImage").innerHTML;

function openBox(month, imagePosition) {
	/* When an image is clicked, display the activeImage element. */
	lightbox.style.display = "block";

	/* Select the correct image from the walkGallery array and put its HTML in the activeImage element. */
	var walkGallery = document.getElementsByClassName(month);
	var chosenImage = walkGallery[imagePosition-1];
	lightbox.innerHTML += chosenImage.innerHTML;
}

function closeBox() {
	/* When the close icon is clicked, remove the image HTML from the activeImage element and hide it. */
	lightbox.style.display = "none";
	lightbox.innerHTML = boxControls;
}