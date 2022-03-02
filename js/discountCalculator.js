const getInputValue = (id) => {
  const inputValue = document.getElementById(id);
  if (isNaN(inputValue.value) || inputValue.value < 0) {
    inputValue.style.border = "2px solid red";
    return "error";
  } else if (inputValue.value === "") {
    inputValue.value = "Pleass!! Fillup this";
    return 0;
  } else {
    inputValue.style.border = "1px solid #ced4da";
    return parseFloat(inputValue.value);
  }
};
document.getElementById("d-btn").addEventListener("click", function (event) {
  event.preventDefault();
  const amount = getInputValue("d-amount");
  const rate = getInputValue("d-rate");
  const discount = (amount * rate) / 100;
  if (!(amount == "error" || rate == "error")) {
    document.getElementById("d-d-amount").value = discount;
    document.getElementById("d-p-amount").value = amount - discount;
  }
});

document
  .getElementById("d-reset-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("d-amount").value = "";
    document.getElementById("d-rate").value = "";
    document.getElementById("d-d-amount").value = "";
    document.getElementById("d-p-amount").value = "";
  });
