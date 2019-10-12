let speech = new SpeechSynthesisUtterance();
speech.lang = 'en';
speech.rate = 1;
speech.volume = 1;
speech.pitch = 1;

document.querySelector('button').addEventListener('click', () => {
	speech.text = document.querySelector('textarea').value;
	window.speechSynthesis.speak(speech);
});
