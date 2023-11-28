let $ = document;
let btn1 = $.querySelector(".btn1");
let btn2 = $.querySelector(".btn2");
let btn3 = $.querySelector(".btn3");
let btn4 = $.querySelector(".btn4");
let btn5 = $.querySelector(".btn5");

function themColor(event) {
  let colorThem = event.target.dataset.color;
  console.log(colorThem);
  document.documentElement.style.setProperty("--theme-color", colorThem);
  console.log(colorThem);
}

btn1.addEventListener("click", themColor);
btn2.addEventListener("click", themColor);
btn3.addEventListener("click", themColor);
btn4.addEventListener("click", themColor);
btn5.addEventListener("click", themColor);
