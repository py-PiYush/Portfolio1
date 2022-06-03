let themeDots = document.getElementsByClassName("theme-dot");

for (let i = 0; i < themeDots.length; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode === "light") {
    document.getElementById("theme-style").href = "css/light.css";
  } else if (mode === "contrast") {
    document.getElementById("theme-style").href = "css/contrast.css";
  } else if (mode === "dark") {
    document.getElementById("theme-style").href = "css/style.css";
  }
}
