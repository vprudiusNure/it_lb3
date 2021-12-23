var dayPart = '';
var interval = document.querySelector("input[name='interval']").value;
var timer = setInterval(changeImage, interval * 1000);

document.querySelector("input[name='interval']").addEventListener('change', setNewInterval);

setDayPart();
changeImage();

function setDayPart() {
	let h = new Date().getHours();
	if (h >= 6 && h < 12) {
		dayPart = 'morning';
	}
	else if (h >= 12 && h < 18) {
		dayPart = 'noon';
	}
	else if (h >= 18 && h < 23) {
		dayPart = 'evening';
	}
	else {
		dayPart = 'night';
	}
}

function setNewInterval(event) {
	interval = parseInt(event.target.value);
	clearInterval(timer);
	timer = setInterval(changeImage, interval * 1000);
}

function changeImage() {
	let num = Math.floor(Math.random() * 4);
	let path = `./images/${dayPart}-${num}.jpg`;
	document.body.style.backgroundImage = `url(${path})`;
}
