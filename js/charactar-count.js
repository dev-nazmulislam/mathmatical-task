const countCharacter = document.getElementById("count-character");
document;
const characterInput = document.getElementById("input-character");
characterInput.addEventListener("keyup", function () {
  countCharacter.innerText = characterInput.value.length;
});
