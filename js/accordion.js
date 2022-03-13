const accordion = document.querySelectorAll(".accordion");
const allDiscription = document.querySelectorAll(".discreaption");
const activeAccordion = document.getElementsByClassName("accordion active");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    const discreaption = this.nextElementSibling;
    if (discreaption.style.maxHeight) {
      // Remove active class & maxHeight if allrady exist
      discreaption.style.maxHeight = null;
      this.classList.remove("active");
    } else {
      //   Remove active class for all activeAccordion
      for (let i = 0; i < activeAccordion.length; i++) {
        activeAccordion[i].classList.remove("active");
      }
      // Remove maxHeight from all discreaption
      for (let i = 0; i < allDiscription.length; i++) {
        allDiscription[i].style.maxHeight = null;
      }
      // set active class & maxHeight on current tab clicked
      discreaption.style.maxHeight = discreaption.scrollHeight + "px";
      this.classList.add("active");
    }
  });
}
