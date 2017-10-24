"use strict"
	var form = document.getElementById('contactInfo');
	form.addEventListener('submit', processForm);

	function processForm(e){
		e.preventDefault(); // to stop the form from submitting
		var userName = document.getElementById('name').value;
		console.log("The nanme is: " + userName);
		var userEmail = document.getElementById('mail').value;
		console.log("the email address is: " + userEmail);
		var theMessage = document.getElementById('msg').value;
		// for text area just get the id.value
		console.log("the message from the user is: "  + theMessage);
        document.getElementById('formContainer').textContent = "thanks so much, " + userName + " for leaving your information.  We will be in touch soon!";
	}

