var current = 0;

function imageSlider() {
	var imageSlider = document.getElementsByClassName("sliderImage");

	for (i = 0; i < imageSlider.length; i++) {
		imageSlider[i].style.display = "none";
	}

	if (current >= imageSlider.length) {
		current = 0;
	}

	imageSlider[current].style.display = "block";
	current++;
}

imageSlider();
setInterval(imageSlider,10000);