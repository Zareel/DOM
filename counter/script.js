let fullName = document.querySelector("#fullName");
let counter = document.querySelector("#counter");
let developer = document.querySelector("#developer");

fullName.innerHTML = "Zareel Kalam";

let count = 1;

setInterval(() => {
  if (count < 1000) {
    count++;
    counter.innerHTML = count;
  }
}, 1);

setTimeout(() => {
  developer.innerHTML = "JavaScript Developer";
}, 4000);
