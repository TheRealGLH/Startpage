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
  document.getElementById("greeting").innerHTML =
    greeting + " It's " + time.getHours() + ":" + time.getMinutes() + ".";
}

function getSites() {
  fetch("resources/sites.json")
    .then((response) => response.json())
    .then((data) => fillItems(data))
    .catch((error) => console.log(error));
}

function fillItems(data) {
  const linkBox = document.querySelector("#linkBox");
  const template = document.querySelector("#linkBoxItemTemplate");
  data.sites.forEach((site) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector(".linkBoxItemText").textContent = site.name;
    clone.querySelector(".LinkBoxLink").href = site.url;
    clone.querySelector(".linkBoxItemImage").src =
      "resources/img/" + site.image_name;

    linkBox.appendChild(clone);
  });
  console.log(data.sites[1].name);
}

function init() {
  getSites();
  setGreeting();
}
