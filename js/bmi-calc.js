const bmi = document.getElementById("bmi");
document.getElementById("bmi-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const weight = getInputValue("weight");
  const heightFeet = getInputValue("height-feet");
  const heightInches = getInputValue("height-inches");
  const height = 2.54 * (heightFeet * 12 + heightInches);

  if (weight > 0 && height > 0) {
    const finalBmi = weight / (((height / 100) * height) / 100);
    bmi.innerText = finalBmi.toFixed(2);
    const background = document.getElementById("add-bg");
    if (finalBmi < 18.5) {
      background.classList.remove("bg-success");
      background.classList.remove("bg-info");
      background.classList.remove("bg-danger");
      background.classList.add("bg-warning");
    }
    if (finalBmi > 18.5 && finalBmi < 25) {
      background.classList.remove("bg-info");
      background.classList.remove("bg-danger");
      background.classList.remove("bg-warning");
      background.classList.add("bg-success");
    }
    if (finalBmi > 25 && finalBmi < 30) {
      background.classList.remove("bg-danger");
      background.classList.remove("bg-warning");
      background.classList.remove("bg-success");
      background.classList.add("bg-info");
    }
    if (finalBmi > 30) {
      background.classList.remove("bg-warning");
      background.classList.remove("bg-success");
      background.classList.remove("bg-info");
      background.classList.add("bg-danger");
    }
  } else {
    alert("Please Fill in everything correctly");
  }
});
document
  .getElementById("bmi-reset-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("weight").value = "";
    document.getElementById("height-feet").value = "";
    document.getElementById("height-inches").value = "";
    bmi.innerText = "00";
  });
