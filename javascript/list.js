//Changes the color of list element when clicked on
function state(e) {
	let el;
	if (!e) {
		e = window.event;
	}
	el = e.target || e.srcElement;

	if (el.className === 'normal') {
		el.classList.replace('normal', 'cool');
	} else if (el.className === 'cool') {
		el.classList.replace('cool', 'completed');
	} else if (el.className === 'completed') {
		el.classList.replace('completed', 'hot');
	} else {
		el.classList.replace('hot', 'normal')
	}
}

var elClick = document.getElementsByTagName('li');
elClick = Array.from(elClick);
elClick.forEach(element => element.addEventListener('click', function(e) {state(e)}, false));


// add new items in list
function addListItem() {
	let listItem = document.createElement('li');
	listItem.classList.add('normal');
	let newItem = document.createTextNode(document.getElementById("newItems").value);
	listItem.appendChild(newItem);
	let newListItem = document.getElementById("list");
	newListItem.appendChild(listItem);
	listItem.addEventListener('click', function(e){state(e)}, false);
}

let submit = document.getElementsByClassName('submit');
submit[0].addEventListener('click', function() {addListItem()}, false);

