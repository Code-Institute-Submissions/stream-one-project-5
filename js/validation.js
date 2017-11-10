/* Validate the quick contact form on the Home Page. */
function validateQuickForm() {

	/* Display a validation message when the user clicks 'Send Message'. */
	document.getElementById("formValidation").classList.remove("hiddenContent");

	/* Loop to check each of the required fields in turn. */
	var requiredFields = document.getElementsByClassName("required");
	for (var i = 0; i < requiredFields.length; i++) {

		/* If a required field has been left empty, display the failure message and end the loop. */
		if (requiredFields[i].value === "") {
			document.getElementById("validationMessage").textContent = "One or more required fields has been left blank. Please ensure all required fields are filled in and re-send your message.";
			break;

		/* If all required fields are filled, display the success message. */
		} else {
			document.getElementById("validationMessage").textContent = "Thank you for your message. We will be in touch as soon as possible.";
		}
	}
}

/* Validate the membership form on the Join the Group page. */
function validateMembershipForm() {

	/* Display a validation message when the user clicks 'Join the Group'. */
	document.getElementById("formValidation").classList.remove("hiddenContent");

	/* Loop to check each of the required fields in turn. */
	var requiredFields = document.getElementsByClassName("required");
	for (var i = 0; i < requiredFields.length; i++) {

		/* If a required field has been left empty, display the failure message and end the loop. */
		if (requiredFields[i].value === "") {
			document.getElementById("validationMessage").textContent = "One or more required fields has been left blank. Please ensure all required fields are filled in and re-submit the form.";
			break;

		/* If all required fields are filled, display the success message. */
		} else {
			document.getElementById("validationMessage").textContent = "Welcome to the group. You have been added to our mailing list to receive reminders about upcoming events. We look forward to seeing you soon!";

			/* Define an array of possible information message to show to new members. */
			var newMemberMessages = [
				{formElement: "beginner",
				 message: "As you have indicated that you are a beginner, you may be interested to know that our next walk on Saturday 11 November is ideal for less experienced walkers. Much of the route is level and there are no significant uphill sections."},
				{formElement: "bodminMoor",
				 message: "If you are particularly interested in walking on Bodmin Moor, you may like to join us on Saturday 10 February when we will be following a route in that area."},
				{formElement: "liftsYes",
				 message: "We are currently looking for people to help with transportation on Saturday 11 November, so please let us know if you are able to join us on that day and help out by giving lifts to others."}
				];

			/* Check whether each element relating to an information messages is checked. */
			for (var j = 0; j < newMemberMessages.length; j++) {

				/* On reaching such a checked element, display the relevant message and end the loop to ensure than only one message is shown to each user. */
				if (document.getElementById(newMemberMessages[j].formElement).checked == true) {
					document.getElementById("newMemberInformation").textContent = newMemberMessages[j].message;
					break;
				}
			}
		}
	}
}

/* Close the validation message when the user clicks 'OK'. */
function closeValidator() {
	document.getElementById("formValidation").classList.add("hiddenContent");
	document.getElementById("newMemberInformation").textContent = "";
}