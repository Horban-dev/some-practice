/* 
const timer = document.querySelector('#timer');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');

let minutes = 0;
let seconds = 0;
let mseconds = 0;

let startRun = false;
let t = 0;

function tik() {
    mseconds += 60;
    if(mseconds >= 60) {
        mseconds = 0;
        seconds++;
        if(seconds >= 60) {
            seconds = 0;
            minutes++;
        }
    }
}

function add() {
    t = setTimeout (time, 1000);
}

function time() {
    tik();

    timer.innerHTML = (minutes > 9 ? minutes : "0" + minutes)
                + ':' + (seconds > 9 ? seconds : "0" + seconds)
                + ':' + (mseconds > 9 ? mseconds : "0" + mseconds)
    
    add();

}


start.addEventListener('click', () => {
    if(startRun) {
        return;
    }
    startRun = true;
    add();
}); 
stop.onclick = function () {
    clearInterval(t);
    startRun = false;
};
reset.onclick = function () {
    timer.innerHTML = "00:00:00";
    mseconds = 0; seconds = 0; minutes = 0;
    startRun = false;
}; */