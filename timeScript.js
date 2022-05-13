/***Id selectors***/
let miliDoc = document.getElementById('milisecond');
let secDoc = document.getElementById('second');
let minDoc =document.getElementById('minute');
let hourDoc =document.getElementById('hour');
/**Button selection***/
var startButton = document.getElementById('start');
var stopButton = document.getElementById('stop');
var resetButton = document.getElementById('reset');
/***Time variables***/
var miliseconds = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;

let timeNow;
let timeElapsed;

let startStop = false;

let intervalControl;

startButton.onclick = function(){
    if (startStop === false){
        timeSetter();
        intervalControl = setInterval(timeControl);
        startButton.disabled = true;
        stopButton.onclick = function(){clearInterval(intervalControl)
        
    };
        startStop = true;
    } else {
        intervalControl = setInterval(timeControl);
        startButton.disabled = true;
        stopButton.onclick = function(){clearInterval(intervalControl)
        
    };
    }
}

resetButton.onclick = function (){
    startStop = false;
    clearInterval(intervalControl)
    miliseconds = 0;
    seconds = 0; 
    minutes = 0;
    hours = 0;
    miliDoc.textContent = "0" + miliseconds;
    secDoc.textContent = "0" + seconds;
    minDoc.textContent = "0" + minutes;
    hourDoc.textContent = "0" + hours;
    startButton.disabled = false;
}
/*
function startOn(){
    
}*/

function timeSetter(){
    return timeNow = Date.now();
}

function timeControl (){
    timeElapsed = Date.now() - timeNow;
    
    miliseconds = Math.floor((timeElapsed/10)-(seconds * 100));
    if (miliseconds < 10) {
        miliDoc.textContent = "0" + miliseconds;
    } else {
        miliDoc.textContent = miliseconds;
    }
    

    seconds = Math.floor(timeElapsed / 1000);
    if (seconds < 10){
        secDoc.textContent = "0" + seconds; 
    } else{
        secDoc.textContent = seconds;
    }

    if (timeElapsed > 60000){
        timeSetter();
        minutes++;
        if (minutes < 10) {
            minDoc.textContent = "0" + minutes;
        } else {
           minDoc.textContent = minutes;
        }    
    }

    if (minutes === 60){
        minutes = 0;
        minDoc.textContent = "0" + minutes;
        hours++;
        if (hours < 10) {
            hourDoc.textContent = "0" + hours;
        } else{
            hourDoc.textContent = hours;
        }
    }


    console.log(timeElapsed);
    
}

