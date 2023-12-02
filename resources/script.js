var time;
var hour;

function setTime() {
  time = new Date();
  hour = time.getHours();
}

function setGreeting() {
  setTime();
  var greeting = "";
  switch (true) {
    case (hour < 6) | (hour > 18):
      greeting = "Good evening.";
      break;
    case hour > 12:
      greeting = "Good afternoon.";
      break;
    default:
      greeting = "Good morning.";
      break;
  }
  document.getElementById("greeting").innerHTML = greeting + " It's "+
   time.getHours()+":"+time.getMinutes()+".";
}
