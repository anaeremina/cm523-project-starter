/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */

/* TIMER */
let timer = document.getElementById("timeLeft");
const timeNum = timer.getAttribute("timer-num");
let timeLeft = timeNum;

function isTimeLeft() {
  return timeLeft > -1;
}

function runTimer(timerElement) {
  const timerCircle = timerElement.querySelector("svg > circle + circle");
  timerElement.classList.add("animatable");
  timerCircle.style.strokeDashoffset = 1;

  let countdownTimer = setInterval(function () {
    if (isTimeLeft()) {
      const timeRemaining = timeLeft--;
      const normalizedTime = (timeNum - timeRemaining) / timeNum;
      // for clockwise animation
      // const normalizedTime = (timeRemaining - 60) / 60;
      timerCircle.style.strokeDashoffset = normalizedTime;
      timer.innerHTML = timeRemaining;
    } else {
      clearInterval(countdownTimer);
      timerElement.classList.remove("animatable");

      var href = location.pathname;

      timerElement.onclick = function (e) {
        if (href == "/timer.html") {
          location.href = "timer7.html";
        } else if (href == "/timer7.html") {
          location.href = "timer8.html";
        } else if (href == "/timer8.html") {
          alert("over!");
        }
      };
    }
  }, 1000);
}

runTimer(document.querySelector(".timer"));

/* CALENDAR */

/* TASKS */
