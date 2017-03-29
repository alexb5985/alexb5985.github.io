// This is a simple function in which you can change colors .
function black_white() {
	document.querySelector('#bd').style.cssText += "background-color: #000000; color: #ffffff;"; 
}

function white_black() {
	document.querySelector('#bd').setAttribute ("style", "background-color: #ffffff; color: #000000;");
}
