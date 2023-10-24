const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetbtn');

let second = 0;
let minute = 0;
let hour = 0;

let frontZeroSecond = 0;
let frontZeroMinute = 0;
let frontZeroHour = 0;

let intervalStatus = "stopped";
let timerInterval = null;

function watchLogic(){
    second++;

    if(second / 60 === 1){
       minute++;
       second = 0;
       if(minute / 60 === 1){
          hour++;
          minute = 0;
       }
    }

    if(second<10){
       frontZeroSecond = "0" + second.toString();
    }else{
        frontZeroSecond = second;
    }

    if(minute<10){
        frontZeroMinute = "0" + minute.toString();
    }else{
        frontZeroMinute = minute;
    }

    if(hour<10){
        frontZeroHour = "0" + hour.toString();
    }else{
        frontZeroHour = hour;
    }

    const timer = document.querySelector('#timer');
    timer.innerText = frontZeroHour + ":" + frontZeroMinute + ":" + frontZeroSecond;
}

startStopBtn.addEventListener('click', function(){
      if(intervalStatus === "stopped"){
        timerInterval = window.setInterval(watchLogic, 1000);
        startStopBtn.innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
         intervalStatus = "running";
      }else{
        window.clearInterval(timerInterval);
        startStopBtn.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
        intervalStatus = "stopped";
      }
});  

resetBtn.addEventListener('click', function(){

    window.clearInterval(timerInterval);
    second = 0;
    minute = 0;
    hour = 0;

    document.getElementById('timer').innerHTML = "00:00:00";
    startStopBtn.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
})