let canvas = document.getElementById('canvas');
canvas.addEventListener('mousemove', saveXY);

let x = 0;
let time = 1000;


//setInterval(move, time);//move each sekond


function myFunction() {
    move();
    setTimeout(myFunction, time);
}

setTimeout(myFunction, time);

function saveXY(event) {
    x = event.clientX;
}

function speed() {
    var width = canvas.getBoundingClientRect().width;
    var onePercent = width / 100;

    if (x < onePercent * 20 || x > onePercent * 80) {
        time = 200;
    } else if (x < onePercent * 30 && x > onePercent * 20 || x > onePercent * 60 && x < onePercent * 70) {
            time = 400;
    } else if (x < onePercent * 40 && x > onePercent * 30 || x > onePercent * 70 && x < onePercent * 80) {
        time = 700;
    }
}


function move() {

    speed();
    let con = canvas.getBoundingClientRect().width / 2;//1400
    if (x < con) {
        leftSlide();

    } else {

        rightSlide();
    }


}

//clientX
//offsetX
//pageX
