//Program title
var input = document.getElementById("input");
var img = document.getElementById("img");
var out = document.getElementById("result");

img.addEventListener("click", predict);

function predict() {
  var rand = Math.random().toFixed(2);
  if (input.value == "Does a magic 8 ball actually work?") {
    out.innerHTML = `How dare you doubt me!`;
  } else if (input.value == "Is JavaScript awesome?") {
    out.innerHTML = `Of Course!`;
  } else if (input.value == "") {
    out.innerHTML = `Please ask a question...`;
  } else if (rand < 0.2) {
    out.innerHTML = `Without a Doubt!`;
  } else if (rand < 0.4) {
    out.innerHTML = `Dont count on it`;
  } else if (rand < 0.6) {
    out.innerHTML = `As I see it,yes.`;
  } else if (rand < 0.8) {
    out.innerHTML = `Concentrate and ask again.`;
  } else {
    out.innerHTML = `Outlook not so good.`;
  }
}
