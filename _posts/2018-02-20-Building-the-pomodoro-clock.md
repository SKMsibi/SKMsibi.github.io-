---
Layout :
Title : "Building the Pomodoro clock"
Date : 2018-02-20 14:03:04 -0600
--- 

## Building the Pomodoro clock.
### What is the Pomodoro clock.
The Pomodoro clock is a clock that uses the Pomodoro technique.
The technique uses a timer to break down work into intervals, commonly 25 minutes in length, separated by short breaks of 5 minutes in length.
These intervals are named pomodoro.

### The Pomodoro clock in code.
In the HTML file, I had two input boxes in the working period one for minutes and the other for seconds, I also had two other input boxes with the same structure in the break period sections.
The design was that the user can type in the amount of time they want to spend working and the amount of time their break should be and intervals would be created using the users inputs.

In the javascript file I created a function that retrieved the users input's and stored them separately.
Minutes in the minutes variable and the same with seconds.
I then had a while that checked if the minutes and seconds where equal to zero and if not then the while loop would decrement seconds by one until seconds are equal to zero then it would decrement minutes by one and adding 60 to seconds.
The while loop would display the minutes and seconds after every iteration and it would carry out iterations until both seconds and minutes are equal to zero.

Once the function is done counting down the working period it would be executed one again for the break period.
This resulted in the a perfect count down of the working period and once done a count down of the break period.

`
var arr = [];
function countDown(minutes, seconds) {
    arr = [];
    var checkIfDone = "";
    var sec = seconds;
    var min = minutes;

    while (seconds !== 0 && minutes !== 0) {
        if (sec >= 1) {
            sec = sec - 1;
            arr.push([`${min} : ${sec}`]);
            continue;
        } else if (sec == 0 && min >= 1) {
            min = min - 1;
            sec = sec + 60;
            arr.push([`${min} : ${sec}`]);
            continue;
        } else {
            checkIfDone = "the count Down is done";
            console.log(checkIfDone);
            return checkIfDone;
            break;
        }
    }
    console.log(arr);
    return "this is going to work";
}
var playSound = function () {
    playSound("old-fashioned-school-bell-daniel_simon.mp3");
};

function start() {

    var index = 0;
    var timeSet = document.getElementById("countDownDisplay").innerHTML;
    var inter = setInterval(function () {
        if (arr[index] === undefined) {
            document.getElementById("countDownDisplay").innerHTML = "Count Down Area";
            index = 0
        } else {
            document.getElementById("countDownDisplay").innerHTML = arr[index];
            index += 1;
        }
        if (arr[index] == "0 : 0") {
            document.getElementById("countDownDisplay").innerHTML = "0 : 0";
            var alarmSound = new Audio();
            alarmSound.src = "old-fashioned-school-bell-daniel_simon.mp3";
            alarmSound.play();
            clearInterval(inter);
            arr = [];
            alert("Count Down Complete.");
        }
    }, 1000);
}
function callOthers() {
    var minutes = document.getElementById("minutes").value;
    var seconds = document.getElementById("seconds").value;
    countDown(minutes, seconds);
    start();
}

function startBreak() {
    var index = 0;
    var timeSet = document.getElementById("countDownBreakDisplay").innerHTML;
    var inter = setInterval(function () {
        console.log(arr[index]);
        if (arr[index] === undefined) {
            document.getElementById("countDownBreakDisplay").innerHTML = "Count Down Area";
            index = 0
        } else {
            document.getElementById("countDownBreakDisplay").innerHTML = arr[index];
            index += 1;
        }
        if (arr[index] == "0 : 0") {
            document.getElementById("countDownBreakDisplay").innerHTML = "0 : 0";
            clearInterval(inter);
            var alarmSound = new Audio();
            alarmSound.src = "old-fashioned-school-bell-daniel_simon.mp3";
            alarmSound.play();
            clearInterval(inter);
            arr = [];
            alert("Count Down Complete.");
        }
    }, 1000);
}

function callOthersBreak() {
    var minutes = document.getElementById("minutesBreak").value;
    var seconds = document.getElementById("secondsBreak").value;
    countDown(minutes, seconds);
    startBreak();
}
`