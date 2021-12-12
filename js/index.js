var value;
var second = 11;

function StopSecond() {
  window.clearInterval(value);
}

function secondStart() {
  second--;
  if (second >= 0) {
    document.getElementById('second').innerHTML = second;
  } else {
    window.clearInterval(value);
    document.getElementById('warning').innerHTML = "Your period is over!";
  }
}
var value = window.setInterval('secondStart()', 1000);
