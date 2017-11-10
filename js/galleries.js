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

	/* Object defining how may images are available in each gallery. Currently all galleries have six images but gallery length can easily be changed here. */
	var availableGalleries = {
		"oct17": 6,
		"sep17": 6,
		"aug17": 6,
		"jul17": 6,
		"jun17": 6,
		"may17": 6,
	};

	/* Loop to generate the gallery for the chosen month by creating a div for each thumbnail image in the gallery and creating an image element for each thumbnail. Each image is the appended to the div, before the div is appended to the photoGallery element in the HTML file. */
	for (var i = 0; i < availableGalleries[chosenMonth]; i++) {

		var galleryContainer = document.createElement("div");
		galleryContainer.setAttribute("class", chosenMonth + " walkGallery");
		galleryContainer.setAttribute("onclick", "openBox('" + chosenMonth + "'," + (i + 1) + ")");

		var galleryImage = document.createElement("img");
		galleryImage.setAttribute("src", "img/" + chosenMonth + "/" + (i + 1) + "_th.jpg");
		galleryImage.setAttribute("alt", "Walk Image");

		galleryContainer.appendChild(galleryImage);
		document.getElementById("photoGallery").appendChild(galleryContainer);
	}

}

/* Run function when page loads in order to display default gallery. */
gallerySwitcher();