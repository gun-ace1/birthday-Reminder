
const daysE1 = document.getElementById("days");
const hoursE1 = document.getElementById("hours");
const minsE1 = document.getElementById("mins");
const secondsE1 = document.getElementById("seconds");

const form = document.querySelector("form");

function updateCountdown() {
  const birthDate = form.elements.name.value;

  
  const nextBirthday = new Date(birthDate);
  const currentDate = new Date();
  const totalTimeSec = (nextBirthday - currentDate) / 1000;

  const days = Math.floor(totalTimeSec / 3600 / 24);
  const hours = Math.floor((totalTimeSec / 3600) % 24);
  const mins = Math.floor((totalTimeSec / 60) % 60);
  const seconds = Math.floor(totalTimeSec) % 60;

 
  daysE1.innerHTML = days;
  hoursE1.innerHTML = formatTime(hours);
  minsE1.innerHTML = formatTime(mins);
  secondsE1.innerHTML = formatTime(seconds);
}


function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

form.addEventListener("submit", function (event) {
  event.preventDefault(); 
  updateCountdown(); 
});


updateCountdown();


setInterval(updateCountdown, 1000);
