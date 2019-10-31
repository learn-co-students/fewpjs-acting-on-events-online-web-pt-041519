// set dodger id to variable of dodger
let dodger = document.getElementById("dodger");

// if called moves dodger to the left
function moveDodgerLeft() {
  // set value of pixel location of dodger with 'px' removed from returned string to variable
  let leftNumbers = dodger.style.left.replace("px", "");
  // parse string to integer and set to variable
  let left = parseInt(leftNumbers, 10);

  // dodger will move so long as pixels greater than 0
  if (left > 0) {
    // move dodger to the left 1 pixel per key board press, convert number back to pixel string
    dodger.style.left = `${left - 1}px`;
  }
}

// if called moves dodger to the right
function moveDodgerRight() {
  // set value of pixel location of dodger with 'px' removed from returned string to variable
  let leftNumbers = dodger.style.left.replace("px", "");
  // parse string to integer and set to variable
  let left = parseInt(leftNumbers, 10);

  // dodger will move so long as pixels less than 360
  if (left < 360) {  
    // move dodger to the right 1 pixel per key board press, convert number back to pixel string
    dodger.style.left = `${left + 1}px`;
  }
}

// listen for keys pressed on keyboard
document.addEventListener("keydown", function(e) {
  // listen for left button on keyboard pushed
  if (e.key === "ArrowLeft") {
    // invoke moveDodgerLeft function
    moveDodgerLeft();
  // listen for right button on keyboard pushed  
  } else if (e.key === "ArrowRight") {
    // invoke moveDodgerRight funtion
      moveDodgerRight();
    }
});