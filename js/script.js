/* // actual  conversion code starts here

var ones = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
var tens = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];
var teens = [
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

function convert_millions(num) {
  if (num >= 1000000) {
    return (
      convert_millions(Math.floor(num / 1000000)) +
      " million " +
      convert_thousands(num % 1000000)
    );
  } else {
    return convert_thousands(num);
  }
}

function convert_thousands(num) {
  if (num >= 1000) {
    return (
      convert_hundreds(Math.floor(num / 1000)) +
      " thousand " +
      convert_hundreds(num % 1000)
    );
  } else {
    return convert_hundreds(num);
  }
}

function convert_hundreds(num) {
  if (num > 99) {
    return ones[Math.floor(num / 100)] + " hundred " + convert_tens(num % 100);
  } else {
    return convert_tens(num);
  }
}

function convert_tens(num) {
  if (num < 10) return ones[num];
  else if (num >= 10 && num < 20) return teens[num - 10];
  else {
    return tens[Math.floor(num / 10)] + " " + ones[num % 10];
  }
}

function convert(num) {
  if (num == 0) return "zero";
  else return convert_millions(num);
}
// Test
// for (let i = 0; i <= 10; i++) {
//   console.log(convert(i));
// }
 */
// Projects option

const projectsShow = [
  "converter",
  "calculator",
  "clock",
  "counter",
  "generator",
  "app",
  "web-component",
];
const calculatorShow = [
  "discount-calculator",
  "intarest-calculator",
  "simple-calculator",
  "bmi-calculator",
  "tip-calculator",
  "age-calculator",
  "pmt-calculator",
  "gpa-calculator",
];
const clockShow = ["digital-clock", "analog-clock", "stopwatch", "timmer"];
const counterShow = [
  "character-count",
  "word-count",
  "vowel-count",
  "palindrome-check",
];
const generotorShow = ["password-generate", "random-number", "color-number"];
const appShow = [
  "quiz-app",
  "weather-app",
  "counter-app",
  "notes-app",
  "bookmark-app",
  "curd-app",
  "math-app",
  "paint-app",
  "store-app",
  "to-do-app",
  "to-do-list-app",
];

const webShow = [
  "acc-container",
  "card-payment",
  "custom-alert",
  "custom-confirm",
  "range-slider",
  "dark-light",
  "filterable-gallery",
  "action-button",
  "form-validation",
  "img-gallery",
  "img-slider",
  "modal",
  "progress-bookmark",
  "movie-app",
  "multi-Step",
  "music-player",
  "page-animation",
  "smoth-scrolling",
  "pricing-table",
  "product-filter",
  "product-slider",
  "responsive-menu",
  "scroll-top",
  "vertical-tabs",
  "writing-effect",
  "click-to-copy",
];

for (let i = 1; i < projectsShow.length; i++) {
  document.getElementById(projectsShow[i]).classList.add("d-none");
}
for (let i = 1; i < calculatorShow.length; i++) {
  document.getElementById(calculatorShow[i]).classList.add("d-none");
}
for (let i = 1; i < clockShow.length; i++) {
  document.getElementById(clockShow[i]).classList.add("d-none");
}
for (let i = 1; i < counterShow.length; i++) {
  document.getElementById(counterShow[i]).classList.add("d-none");
}
for (let i = 1; i < generotorShow.length; i++) {
  document.getElementById(generotorShow[i]).classList.add("d-none");
}
for (let i = 1; i < appShow.length; i++) {
  document.getElementById(appShow[i]).classList.add("d-none");
}
for (let i = 1; i < webShow.length; i++) {
  document.getElementById(webShow[i]).classList.add("d-none");
}

function handleSelectChange(e) {
  for (let i = 0; i < projectsShow.length; i++) {
    document.getElementById(projectsShow[i]).classList.add("d-none");
  }
  document.getElementById(e.target.value).classList.remove("d-none");
}
function handleCalculatorChange(e) {
  for (let i = 0; i < calculatorShow.length; i++) {
    document.getElementById(calculatorShow[i]).classList.add("d-none");
  }
  document.getElementById(e.target.value).classList.remove("d-none");
}
function handleClockShow(e) {
  for (let i = 0; i < clockShow.length; i++) {
    document.getElementById(clockShow[i]).classList.add("d-none");
  }
  document.getElementById(e.target.value).classList.remove("d-none");
}
function handleCounterShow(e) {
  for (let i = 0; i < counterShow.length; i++) {
    document.getElementById(counterShow[i]).classList.add("d-none");
  }
  document.getElementById(e.target.value).classList.remove("d-none");
}
function handleGenerotorShow(e) {
  for (let i = 0; i < generotorShow.length; i++) {
    document.getElementById(generotorShow[i]).classList.add("d-none");
  }
  document.getElementById(e.target.value).classList.remove("d-none");
}
function handleAppShow(e) {
  for (let i = 0; i < appShow.length; i++) {
    document.getElementById(appShow[i]).classList.add("d-none");
  }
  document.getElementById(e.target.value).classList.remove("d-none");
}
function handleweb(e) {
  for (let i = 0; i < webShow.length; i++) {
    document.getElementById(webShow[i]).classList.add("d-none");
  }
  document.getElementById(e.target.value).classList.remove("d-none");
}
