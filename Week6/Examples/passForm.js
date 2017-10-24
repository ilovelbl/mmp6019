// Form to get the user name and password

var form = document.getElementById('login');       // Get form element

form.addEventListener('submit', welcomeUser);

function welcomeUser (event) {

	event.preventDefault(); // to stop the form from submitting
	var userName = document.getElementById('username');
	var msg = 'Welcome ' + username.value + "!";
	document.getElementById('main').textContent = msg;
}
