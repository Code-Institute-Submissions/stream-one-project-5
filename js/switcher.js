/* Function to display content for a particular month, and choose whether to add a map or a photo gallery. */
function contentSwitcher(month,page) {

	/* Variable to create array of elements with walkSwitcher class. */
	var walkList = document.getElementsByClassName("walkSwitcher");

	/* If no month has been selected, display the first available month by adding the activeMonth class. */
	if (month === undefined) {
		walkList[0].classList.add("activeMonth");

	/* Display the relevant month when a selection is made from the menu. */
	} else {

		/* Ensure the previously shown month is hidden by removing the activeMonth class. */
		for (var i = 0; i < walkList.length; i++) {
			walkList[i].classList.remove("activeMonth");
		}
		/* Display the chosen month by adding the activeMonth class. */
		document.getElementById(month).classList.add("activeMonth");
	}

	/* Run the loadMap function in maps.js if called from the Upcoming Walks page, or the gallerySwitcher function in galleries.js if called from the Photo Galleries page. */
	if (page === 'future') {
		loadMap(month);
	} else if (page === 'past') {
		gallerySwitcher(month);
	}

}

/* Run function when page loads in order to display default month. */
contentSwitcher();