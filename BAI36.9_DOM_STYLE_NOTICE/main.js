let buttons = document.querySelectorAll(".btn");

//duyệt qua các phần tử btn
for (let btn of buttons) {
  if (btn instanceof HTMLBRElement) {
    btn.style.backgroundColor = "blue";
    btn.innerHTML = "Click me";
    btn.style.fontSize = "2em";
    btn.style.color = "yellow";
  }
}
