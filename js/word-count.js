const wordCount = document.getElementById("count-word");
document;
const wordInput = document.getElementById("word-input");
wordInput.addEventListener("keyup", function () {
  wordCount.innerText = wordInput.value
    .split(" ")
    .filter((x) => x !== "").length;
});
