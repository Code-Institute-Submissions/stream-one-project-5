/* Function to display a particular photo gallery. */
function contentSwitcher(month) {

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

	/* On the Upcoming Walks page, empty the 'mapElement' div in readiness for a new map. */
	document.getElementById("mapElement").innerHTML = "";

}

/* Run function when page loads in order to display default gallery. */
contentSwitcher();