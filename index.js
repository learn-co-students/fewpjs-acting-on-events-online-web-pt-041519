// import { emitKeypressEvents } from "readline"

let dodger = document.querySelector('#dodger')

function moveDodgerLeft(mnum = 1){
    let numStr = dodger.style.left.replace('px', '')
    let num = parseInt(numStr)

    if(num > 0){
        dodger.style.left = `${num - mnum}px`
    }

}

function moveDodgerRight(mnum = 1){
    let numStr = dodger.style.left.replace('px', '')
    let num = parseInt(numStr)

    if(num < 360){
        dodger.style.left = `${num + mnum}px`
    }

}


document.addEventListener('keydown', function(e){
    if( e.key === "ArrowLeft"){
        moveDodgerLeft(1)
    }else if(e.key === "ArrowRight"){
        moveDodgerRight(1)
    }
})