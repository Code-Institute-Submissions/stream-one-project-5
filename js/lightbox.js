/* Set variable for default HTML of activeImage element. */
var boxControls = document.getElementById("activeImage").innerHTML;

function openBox(imagePosition) {
	/* When an image is clicked, give the activeImage element a grey background and set a class for large image display. */
	var lightbox = document.getElementById("activeImage");
	lightbox.className += " lightsDown fullImage";
	lightbox.style.display = "block";

	/* Select the correct image from the walkGallery array and put its HTML in the activeImage element. */
	var walkGallery = document.getElementsByClassName("lightbox");
	var chosenImage = walkGallery[imagePosition-1];
	lightbox.innerHTML += chosenImage.innerHTML;
}

function closeBox() {
	/* When the lightbox is clicked, remove the lightbox classes and the HTML from the activeImage element. */
	var lightbox = document.getElementById("activeImage");
	lightbox.style.display = "none";
	lightbox.innerHTML = boxControls;
	lightbox.className -= "lightsDown fullImage";
}