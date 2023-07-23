const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = new Audio(); // Create an audio element
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let inpWord = document.getElementById("input-word").value;

  fetch(`${url}${inpWord}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      result.innerHTML = `
        <div class="word">
          <h3>${inpWord}</h3>
          <button onclick="playSound()" class="v-btn">
            <i class="fas fa-volume-up"></i>
          </button>
        </div>
        <div class="details">
          <p>${data[0].meanings[0].partOfSpeech}</p>
          <p>${data[0].phonetic}</p>
        </div>
        <p class="word-meaning">${data[0].meanings[0].definitions[0].definition}</p>
        <p class="word-example">${data[0].meanings[0].definitions[0].example || ""}</p>`;

      sound.src = `https:${data[0].phonetics[0].audio}`;
    })
    .catch(() => {
      result.innerHTML = `
        <div class="error">
          <img src="error.png" class="error-img">
          <p class="text">We couldn't find the result</p>
        </div>`;
    });
});

function playSound() {
  sound.load(); // Load the audio before playing
  sound.play();
}
