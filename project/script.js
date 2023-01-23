let btn = document.querySelector("#button");

let randomColor = () => {
  let val = "0123456789ABCDEF";
  let hash = "#";

  for (let i = 0; i < 6; i++) {
    hash = hash + val[Math.floor(Math.random() * val.length)];
    btn.innerHTML = hash;
  }
  return hash;
};

function changeColor() {
  document.body.style.backgroundColor = randomColor();
}

btn.addEventListener("click", changeColor);
