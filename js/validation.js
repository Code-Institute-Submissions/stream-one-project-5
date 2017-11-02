function validateQuickForm() {
	document.getElementById("formValidation").classList.remove("hiddenContent");
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

function validateMembershipForm() {
	document.getElementById("formValidation").classList.remove("hiddenContent");
	var requiredFields = document.getElementsByClassName("required");
	for (var i = 0; i < requiredFields.length; i++) {
		if (requiredFields[i].value === "") {
			document.getElementById("validationMessage").innerHTML = "One or more required fields has been left blank. Please ensure all required fields are filled in and re-submit the form.";
		} else {
			document.getElementById("validationMessage").innerHTML = "Welcome to the group. You have been added to our mailing list to receive reminders about upcoming events. We look forward to seeing you soon!";

			var newMemberMessages = [
				{formElement: "beginner",
				 message: "As you have indicated that you are a beginner, you may be interested to know that our next walk on Saturday 11 November is ideal for less experienced walkers. Much of the route is level and there are no significant uphill sections."},
				{formElement: "bodminMoor",
				 message: "If you are particularly interested in walking on Bodmin Moor, you may like to join us on Saturday 10 February when we will be following a route in that area."},
				{formElement: "liftsYes",
				 message: "We are currently looking for people to help with transportation on Saturday 11 November, so please let us know if you are able to join us on that day and help out by giving lifts to others."}
				];

			for (var j = 0; j < newMemberMessages.length; j++) {
				if (document.getElementById(newMemberMessages[j].formElement).checked == true) {
					document.getElementById("newMemberInformation").innerHTML = newMemberMessages[j].message;
					break;
				}
			}
		}
	}
}

function closeValidator() {
	document.getElementById("formValidation").classList.add("hiddenContent");
	document.getElementById("newMemberInformation").innerHTML = "";
}