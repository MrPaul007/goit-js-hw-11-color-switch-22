import colors from "./colors.js";

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const bodyRef = document.body;
let timerId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

startBtn.addEventListener("click", timerStarter);

stopBtn.addEventListener("click", onStopBtnPress);

function timerStarter() {
  timerId = setInterval(colorPicker, 1000);
  startBtn.disabled = true;
}

function colorPicker() {
  let randomNumber = randomIntegerFromInterval(0, colors.length - 1);
  bodyRef.style.backgroundColor = colors[randomNumber];
}

function onStopBtnPress() {
  clearInterval(timerId);
  startBtn.disabled = false;
}
