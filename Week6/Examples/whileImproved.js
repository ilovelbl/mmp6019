var table = 3; // table that we're calculating
var operator= 'addition'; // operator chosen by user
var i = 1; // starting place for our math tables
var msg, p; // holders for our new elements
var el = document.getElementById('blackboard');

if (operator=== 'addition') {
  while (i < 11) {
    msg = document.createTextNode(i + ' + ' + table + ' ' + (i + table));
    // we create a new <p></p> set to hold each
    // row of our "table" (not an HTML table!)
    p = document.createElement("p");
    el.appendChild(p);
    p.appendChild(msg);
    i++;
  }
} // not the end – continues with "else if"
else if (operator=== 'multiplication'){
  while (i < 11) {
    msg = document.createTextNode(i + ' x ' + table + ' ' + (i * table));
    p = document.createElement("p")
    el.appendChild(p);
    p.appendChild(msg);
    i++;
  }
} // not the end – continues with "else"

else {
    msg = document.createTextNode('Sorry, I don't know how to perform that operation.');
    p = document.createElement("p");
    el.appendChild(p);
    p.appendChild(msg);
} // now we're at the end!

