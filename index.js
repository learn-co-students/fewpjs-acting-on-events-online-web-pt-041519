function moveDodgerLeft() {
    let leftNums = dodger.style.left.replace('px', '');
    let left = parseInt(leftNums, 10);
    
    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
     }
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        moveDodgerLeft();
    }
});

function moveDodgerRight() {
    let rightNums = dodger.style.left.replace('px', '');
    let right = parseInt(rightNums, 10);
    
    if (right < 360) {
        dodger.style.left = `${right + 1}px`;
     }
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight') {
        moveDodgerRight();
    }
});