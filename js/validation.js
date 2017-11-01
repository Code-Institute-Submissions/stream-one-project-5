function validateForm() {
	document.getElementById("quickFormValidation").classList.toggle("hiddenContent");
	var requiredFields = document.getElementsByClassName("required");

	for (var i = 0; i < requiredFields.length; i++) {

		if (requiredFields[i].value === "") {

			document.getElementById("validationMessage").innerHTML = "One or more required fields has been left blank. Please ensure all required fields are filled in and re-send your message.";
			break;

		} else {
			document.getElementById("validationMessage").innerHTML = "Thank you for your message. We will be in touch as soon as possible.";
		}

	}

}