const showVowell = document.getElementById("count-vowel");
const inputText = document.getElementById("input-vowel");

inputText.addEventListener("keyup", function () {
  let vowellCount = 0;
  let inputWord = inputText.value.toLowerCase();
  for (let i = 0; i < inputWord.length; i++) {
    if (inputWord[i].match(/([a,e,i,o,u])/)) {
      vowellCount++;
    }
  }
  showVowell.innerText = vowellCount;
});
