/* Display the first gallery in the list and hide all others on page load.  */
function defaultDisplay() {
	var walkList = document.getElementsByClassName("walkSwitcher");
	for (i = 0; i < walkList.length; i++) {
		walkList[i].style.display = "none";
	}
	walkList[0].style.display = "block";
}
window.onload = defaultDisplay();

/* Display a given gallery and hide all others when the relevant link is clicked.  */
function contentSwitcher(month) {
	var walkList = document.getElementsByClassName("walkSwitcher");
	for (i = 0; i < walkList.length; i++) {
		walkList[i].style.display = "none";
	}
	document.getElementById(month).style.display = "block";
}