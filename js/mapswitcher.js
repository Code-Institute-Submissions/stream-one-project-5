function contentSwitcher(month) {

	var walkList = document.getElementsByClassName("walkSwitcher");

	for (var i = 0; i < walkList.length; i++) {
		if (walkList[i].id == month) {
			walkList[i].classList.remove("hiddenContent");
		} else {
			walkList[i].classList.add("hiddenContent");		
		}
	} 

}