// CHAPTER 43 TO 48

// ANSWER NO: 01
function linkAlert() {
  alert(" MAGIC !!");
}

// ANSWER NO: 02
function imgIphone() {
  alert("This is an iPhone");
}
function imgSamsung() {
  alert("This is Samsung ");
}
function imgPixel() {
  alert("This is Google Pixel");
}
function imgOppo() {
  alert("This is Oppo");
}

// ANSWER NO: 03
function dltRow_1() {
  document.getElementById("jhone").innerHTML = "";
}
function dltRow_2() {
  document.getElementById("doe").innerHTML = "";
}
function dltRow_3() {
  document.getElementById("mark").innerHTML = "";
}
function dltRow_4() {
  document.getElementById("james").innerHTML = "";
}

// ANSWER NO: 04
function overImg() {
  document.getElementById("image").src = "bentleyL.avif";
}
function outImg() {
  document.getElementById("image").src = "bugattiL.avif";
}

// ANSWER NO: 05
var counterValue = 0;

function updateCounter() {
  document.getElementById("count-num").innerText = counterValue;
}

function incr() {
  counterValue++;
  updateCounter();
}

function decr() {
  counterValue--;
  updateCounter();
}
