/* Function to display a particular photo gallery. */
function contentSwitcher(month) {

	/* Variable to create array of elements with walkSwitcher class. */
	var walkList = document.getElementsByClassName("walkSwitcher");

	/* If no month has been selected, display the first gallery by adding the activeMonth class. */
	if (month === undefined) {
		walkList[0].classList.add("activeMonth");

	/* Display the relevant gallery when a month is selected. */
	} else {
		/* Ensure the previous gallery is hidden by removing the activeMonth class. */
		for (var i = 0; i < walkList.length; i++) {
			walkList[i].classList.remove("activeMonth");
		}
		/* Display the chosen gallery by adding the activeMonth class. */
		document.getElementById(month).classList.add("activeMonth");
	}

}

/* Run function when page loads in order to display default gallery. */
contentSwitcher();