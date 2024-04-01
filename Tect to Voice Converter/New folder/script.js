let speech = new SpeechSynthesisUtterance();
let voices = [];

document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;

  // Get voices inside the button click event
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0]; // You may want to choose a specific voice here

  window.speechSynthesis.speak(speech);
});

// This function will be called when voices are loaded
function populateVoices() {
  voices = window.speechSynthesis.getVoices();
  voices.forEach((voice, i) => {
    let option = new Option(voice.name, i);
    document.querySelector("select").add(option);
  });
}

// Call populateVoices when voices are changed
window.speechSynthesis.onvoiceschanged = populateVoices;
