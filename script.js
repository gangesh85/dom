const body = document.body;
const button = document.querySelectorAll("button")[0];
button.addEventListener("click", () => {
  if (button.innerText === "dark") {
    body.style.background = "black";
    body.style.color = "white";
    button.innerText = "light";
    document.title = 'dark'
  } else if (button.innerText === "light") {
    body.style.background = "white";
    body.style.color = "black";
    button.innerText = "dark";
    document.title = "light"
  }
});

console.log(document.title)
