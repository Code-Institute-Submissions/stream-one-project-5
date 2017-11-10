function gallerySwitcher(month) {

	/* Set the chosen month to be the first available on page load, otherwise set it to the month selected from the menu. */
	var chosenMonth;
	var walkList = document.getElementsByClassName("walkSwitcher");
	if (month === undefined) {
		chosenMonth = walkList[0].id;
	} else {
		chosenMonth = month;
	}

	/* Ensure that the 'photoGallery' div is empty in readiness for a new gallery. */
	document.getElementById("photoGallery").innerHTML = "";

	/* Object defining how may images are available in each gallery. */
	var availableGalleries = {
		"oct17": 6,
		"sep17": 6,
		"aug17": 6,
		"jul17": 6,
		"jun17": 6,
		"may17": 6,
	};

	/* Loop to generate the gallery for the chosen month by creating a div for each thumbnail image in the gallery and adding the HTML for the thumbnail, then appending the div to the photoGallery element. */
	for (var i = 0; i < availableGalleries[chosenMonth]; i++) {

		var galleryImage = document.createElement("div");
		galleryImage.setAttribute("class", chosenMonth + " walkGallery");
		galleryImage.setAttribute("onclick", "openBox('" + chosenMonth + "'," + (i + 1) + ")");
		galleryImage.innerHTML = '<img src="img/' + chosenMonth + '/' + (i + 1) + '_th.jpg" alt="Walk Image" /></div>';
		document.getElementById("photoGallery").appendChild(galleryImage);
	}

}

/* Run function when page loads in order to display default gallery. */
gallerySwitcher();