let canvas = document.getElementById('canvas');
canvas.addEventListener('mousemove', move);
let mouseClickerLeft = 0;
let mousClickerRight = 0;

function move(event) {
    console.log("x = " + event.clientX);
    console.log("y = " + event.clientY);

    let con = canvas.getBoundingClientRect().width / 2;
    if (event.clientX < con) {
        mouseClickerLeft++;
        if (mouseClickerLeft >= 50) {
            leftSlide();
            mouseClickerLeft = 0;
        }
    } else {
        mousClickerRight++;
        if (mousClickerRight >= 50) {
            rightSlide();
            mousClickerRight = 0;
        }
    }

}

//clientX
//offsetX
//pageX
