function gallerySwitcher(month) {

	/* Set the chosen month to be the first available on page load, otherwise set it to the month selected from the menu. */
	var chosenMonth;
	var walkList = document.getElementsByClassName("walkSwitcher");
	if (month === undefined) {
		chosenMonth = walkList[0].id;
	} else {
		chosenMonth = month;
	}

	/* Ensure that the 'photoGallery' div is empty in readiness for a new map. */
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

	/* Loop to add the HTML code for each thumbnail image and generate the gallery for the chosen month. */
	for (var i = 0; i < availableGalleries[chosenMonth]; i++) {
		document.getElementById("photoGallery").innerHTML += '<div class="' + chosenMonth + ' walkGallery" onclick="openBox(&apos;' + chosenMonth + '&apos;,' + (i + 1) + ')"><img src="img/' + chosenMonth + '/' + (i + 1) + '_th.jpg" alt="Walk Image" /></div>';
	}

}

/* Run function when page loads in order to display default gallery. */
gallerySwitcher();