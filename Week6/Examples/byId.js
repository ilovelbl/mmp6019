// example of getElementById to try to change the text
//
// first grab the element
var myList = document.getElementById('item');
// next add an event listener
myList.addEventListener('click',changeText);

// and now the function uses textContent to change the text in that element node
function changeText(e) {
    myList.textContent = "I finished my homework and have nothing on the list";
}
