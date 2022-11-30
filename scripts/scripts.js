/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */

/* TIMER */
let timeLeft = 4;
let timer = document.getElementById('timeLeft');

function isTimeLeft() {
  return timeLeft > -1;
}

function runTimer(timerElement) {
	const timerCircle = timerElement.querySelector('svg > circle + circle');
	timerElement.classList.add('animatable');
	timerCircle.style.strokeDashoffset = 1;
    
	let countdownTimer = setInterval(function(){
		if(isTimeLeft()){
			const timeRemaining = timeLeft--;
			const normalizedTime = (4 - timeRemaining) / 4;
      // for clockwise animation

      // for clockwise animation
      // const normalizedTime = (timeRemaining - 60) / 60;      timer.innerHTML = timeRemaining;
		} else {
			clearInterval(countdownTimer);
			timerElement.classList.remove('animatable');
		}  
	}, 1000);
}

runTimer(document.querySelector('.timer'));


/* CALENDAR */ 



/* TASKS */




