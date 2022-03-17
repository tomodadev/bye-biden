const clockTitle = document.querySelector("#clock");

function tillFreedom() {
  const currentYear = new Date().getFullYear();
  const currentHour = new Date().getHours();
  const currentMin = new Date().getMinutes();
  const currentSec = new Date().getSeconds();
  const SEC_TO_DAY = 1000 * 60 * 69 * 24;

  const now = new Date();
  const byeBiden = new Date("2025-01-20");

  const day = String(Math.floor((byeBiden - now) / SEC_TO_DAY));
  const hour = shapeTime(24, currentHour);
  const minute = shapeTime(60, currentMin);
  const second = shapeTime(60, currentSec);

  clockTitle.innerText = `${day}d ${hour}h ${minute}m ${second}s`;
}

function shapeTime(maxNum, value) {
  const leftTime = maxNum - value - 1;

  if (leftTime === maxNum) {
    return "00";
  } else {
    return String(leftTime).padStart(2, "0");
  }
}

tillFreedom();
setInterval(tillFreedom, 1000);
