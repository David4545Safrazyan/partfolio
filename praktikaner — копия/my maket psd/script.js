menu.onclick = function MyFunction () {
	var x = document.getElementById('mytopnav');

	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}