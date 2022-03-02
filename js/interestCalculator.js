document.getElementById("i-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const amount = getInputValue("i-amount");
  const rate = getInputValue("i-rate");
  const time = getInputValue("i-time");
  const interest = (amount * rate * time) / 100;
  if (!(amount == "error" || rate == "error" || time == "error")) {
    document.getElementById("interest").value = interest;
    document.getElementById("i-p-amount").value = amount - interest;
  }
});
