'use strict';

// Toggle hover menu
function toggleHoverMenu() {
	//let hoverMenu = document.getElementsByClassNames("hover-menu");
	// Mobile
	if (window.matchMedia("(max-width: 1080px)").matches) {
		let cardAuthorInfo = document.getElementsByClassName("card-author-info")[0];

		// Check state
		if (cardAuthorInfo.childNodes[1].style.display == "none") {
			cardAuthorInfo.childNodes[1].style.display = "flex";
			cardAuthorInfo.childNodes[3].style.display = "none";
			cardAuthorInfo.style.backgroundColor = "inherit";
			cardAuthorInfo.childNodes[5].childNodes[1].style.backgroundColor = "var(--light-grayish-blue)";
			cardAuthorInfo.childNodes[5].childNodes[1].firstChild.style.filter = "none";
		} else {
			cardAuthorInfo.childNodes[1].style.display = "none";
			cardAuthorInfo.childNodes[3].style.display = "flex";
			cardAuthorInfo.style.backgroundColor = "var(--very-dark-grayish-blue)";
			cardAuthorInfo.childNodes[5].childNodes[1].style.backgroundColor = "var(--grayish-blue)";
			cardAuthorInfo.childNodes[5].childNodes[1].firstChild.style.filter = "brightness(100)";
		}
	} else if (window.matchMedia("(min-width: 1088px)").matches) {
		let hoverMenu = document.getElementsByClassName("hover-menu")[0];
		console.log(hoverMenu.style.display);
		if (hoverMenu.style.display == "none" || hoverMenu.style.display == "") {
			hoverMenu.style.display = "flex";
		} else {
			hoverMenu.style.display = "none";
		}
	}
		
}
