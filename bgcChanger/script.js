let btn = document.querySelector("#btn");

let randomColor = () => {
  let val = "0123456789ABCDEF";
  let hash = "#";

  for (let i = 0; i < 6; i++) {
    hash = hash + val[Math.floor(Math.random() * val.length)];
  }
  return hash;
};

let changeColor = () => {
  document.body.style.backgroundColor = randomColor();
};

btn.addEventListener("click", changeColor);
