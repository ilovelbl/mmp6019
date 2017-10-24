// count numbers 1 - 10
var counter = 0;
var text = "";
while (counter < 10) {
	text += "<br/> The number is " + counter;
  counter++;
}
var txt = document.getElementById('myText').innerHTML = text;
