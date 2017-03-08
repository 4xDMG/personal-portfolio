$(document).ready(function() {

var breakTime = 1;
var workTime = 1;
var timerRunning = false;
var firstClick	= false;
var firstBreak = false;
var pomodoroTimer = null;
var pomodoroTimeMs = 0;
var tone = new Audio('http://soundbible.com/grab.php?id=2158&type=wav');


$('#break-timer-plus').click(function() {
	breakTime = breakTime + 1;
	breakTimerStr = breakTime + ' minutes';
	$('#break-timer').text(breakTimerStr);
});

$('#break-timer-minus').click(function() {
	breakTime = breakTime - 1;
	breakTimerStr = breakTime + ' minutes';
	$('#break-timer').text(breakTimerStr);
});

$('#work-timer-plus').click(function() {
	workTime = workTime + 1;
	workTimerStr = workTime + ' minutes';
	$('#work-timer').text(workTimerStr);
	$('#pomodoro-timer').text(workTime + ':00');
});

$('#work-timer-minus').click(function() {
	workTime = workTime - 1;
	workTimerStr = workTime + ' minutes';
	$('#work-timer').text(workTimerStr);
	$('#pomodoro-timer').text(workTime + ':00');
});

function resetTimer() {
	clearInterval(pomodoroTimer);
	timerRunning = false;
	firstClick	= false;
	pomodoroTimer = null;
	pomodoroTimeMs = 0;
	firstBreak = false;
	$('#pomodoro-timer').text(workTime + ':00')
};

$('#pomodoro-timer').click(function() {
	if (timerRunning === false) {	
		pomodoroTimer = setInterval(function(){
			timerRunning = true;
			if (firstClick === false) {
				getTimerValues(workTime);
				firstClick = true;
			} else if (pomodoroTimeMs > 0) {			
				updateTimerDisplay(pomodoroTimeMs);
			} else if (firstBreak === false){
				playTone();
				getTimerValues(breakTime);
				firstBreak = true;
			} else {
				clearInterval(pomodoroTimer);
				resetTimer();
				playTone();
			};
		}, 1000);
	} else {
		clearInterval(pomodoroTimer);			
		timerRunning = false;
	};
});

function playTone() {
	tone.play();
}

function getTimerValues(type) {
	$('#pomodoro-timer').text(type + ':00');
	//Convert timer minutes into miliseconds
	pomodoroTimeMs = type*60*1000;
}

function updateTimerDisplay(time) {	
	var timeMins = time/1000/60;		
	var timeSecs = timeMins % 1;
	timeSecs = Math.round(timeSecs * 60);
	timeMins = Math.floor(timeMins);
	if (timeSecs >= 10) {
		$('#pomodoro-timer').text(timeMins + ':' + timeSecs);
	} else {
		$('#pomodoro-timer').text(timeMins + ':0' + timeSecs);
	}
	pomodoroTimeMs = time - 1000;
}

$('#reset-btn').click(function() {
	resetTimer();
});	

});
