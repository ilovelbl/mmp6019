// javascript to create a list element and add it to the existing list
// Please try running the html without the javascript to see what you have
// then run the javascript to see what its adding.

// first create the element and its text:
var newEl = document.createElement('li');
var newText = document.createTextNode('Read the slides');

// now add the text to the list element
newEl.appendChild(newText);

// we now have an element with a text node just hanging in thin air!
// add it to the list.
// First grab the list
var theList = document.getElementById('todo')
theList.appendChild(newEl);

// now you can re-use the variables to create a new item to add to the list
newEl = document.createElement('li');
newText = document.createTextNode('Work on the homework before the lab.');

newEl.appendChild(newText);
theList.appendChild(newEl);
