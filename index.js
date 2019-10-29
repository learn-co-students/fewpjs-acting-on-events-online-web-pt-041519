// Define dodger
let dodger = document.getElementById("dodger");

// Move dodger left
function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

// Move dodger right
function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
 
  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}

// Move based on keypress
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});