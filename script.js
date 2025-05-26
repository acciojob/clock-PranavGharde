function updateTime() {
  const timerElement = document.getElementById("timer");
  const now = new Date();
  const formattedTime = now.toLocaleString();
  timerElement.textContent = formattedTime;
}
updateTime();

setInterval(updateTime, 1000);
