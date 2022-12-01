 /* TIMER 7 seconds */
 let timeLeft = 7;
 let timer = document.getElementById('timeLeftSeven');
 
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
               const normalizedTime = (7 - timeRemaining) / 7;
         // for clockwise animation
         // const normalizedTime = (timeRemaining - 60) / 60;
               timerCircle.style.strokeDashoffset = normalizedTime;
         timer.innerHTML = timeRemaining;
           } else {
               clearInterval(countdownTimer);
               timerElement.classList.remove('animatable');
           }  
       }, 1000);
   }
   
   runTimer(document.querySelector('.timer'));