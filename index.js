
// BUTTON//

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');


burger.addEventListener('click', function() {
	menu.classList.toggle('active');
})

//AUDIO //

document.addEventListener('DOMContentLoaded', function () {
	var soundButton = document.getElementById('soundButton');
	var audioElement = document.getElementById('audioElement');

	soundButton.addEventListener('click', function () {
		 if (audioElement.paused) {
			  audioElement.play();
			  
		 } else {
			  audioElement.pause();
			  audioElement.currentTime = 0;			  
		 }
	});
});
