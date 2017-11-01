/* Function to display a particular photo gallery. */
function contentSwitcher(month) {

	/* Variable to create array of elements with walkSwitcher class. */
	var walkList = document.getElementsByClassName("walkSwitcher");

	/* If no month has been selected, display the first gallery by adding the activeGallery class. */
	if (month === undefined) {
		walkList[0].classList.add("activeGallery");

	/* Display the relevant gallery when a month is selected. */
	} else {

		/* Hide visible gallery by removing the activeGallery class. */
		for (var i = 0; i < walkList.length; i++) {
			walkList[i].classList.remove("activeGallery");
		}

		/* Display the chosen gallery by adding the activeGallery class. */
		document.getElementById(month).classList.add("activeGallery");
	}

}

/* Run function when page loads in order to display default gallery. */
contentSwitcher();