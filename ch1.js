let fonts = document.querySelector(".fonts"),
  input = document.querySelector(".input"),
  view = document.querySelector(".view"),
  selects = document.querySelectorAll(".fonts option"),
  bold = document.querySelector(".bold"),
  center = document.querySelector(".center"),
  size = document.querySelector(".size"),
  a = document.querySelector("a");

for (let i = 0; i < selects.length; i++) {
  selects[i].style.fontFamily = selects[i].value;
}

input.addEventListener("input", () => {
  view.innerHTML = input.value;
});

fonts.addEventListener("change", () => {
  view.style.fontFamily = fonts.value;
  fonts.style.fontFamily = fonts.value;
  a.href = `${fonts.value}.ttf`
});

let B = false;
bold.addEventListener("click", () => {
  if (B === false) {
    B = true;
    bold.classList.add("clicked");
    view.style.fontWeight = "bold";
  } else {
    B = false;
    bold.classList.remove("clicked");
    view.style.fontWeight = "normal";
  }
});

let C = false
center.addEventListener("click", () => {
    if (C === false) {
      C = true;
      center.classList.add("clicked");
      view.style.display = "flex";
    } else {
      C = false;
      center.classList.remove("clicked");
      view.style.display = "block";
    }
  });

size.addEventListener("change", () => {
    if (size.value != "" && Number(size.value) > 0) {
        view.style.fontSize = `${Number(size.value)}px`;
    }
  });