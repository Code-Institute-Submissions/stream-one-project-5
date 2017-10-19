function lightbox(imagePosition) {
	var lightbox = document.getElementById("activeImage");
	lightbox.className += " highlight fullImage";

	var walkGallery = document.getElementsByClassName("lightbox");
	var chosenImage = walkGallery[imagePosition-1];
	lightbox.innerHTML = chosenImage.innerHTML;
}

function closebox() {
	var lightbox = document.getElementById("activeImage");
	lightbox.className -= " highlight fullImage";
	lightbox.innerHTML = "";
}