/* Variable set to 0 to ensure the slideshow starts with the first photo in the array */
var currentImage = 0;

function imageSlider() {
	
	var imageSlider = document.getElementsByClassName("sliderImage");

	for (var i = 0; i < imageSlider.length; i++) {
		imageSlider[i].classList.add("hiddenContent");
		imageSlider[i].classList.remove("activeContent");
	}

	if (currentImage >= imageSlider.length) {
		currentImage = 0;
	}

	imageSlider[currentImage].classList.remove("hiddenContent");
	imageSlider[currentImage].classList.add("activeContent");
	
	currentImage++;
}

imageSlider();
setInterval(imageSlider,10000);