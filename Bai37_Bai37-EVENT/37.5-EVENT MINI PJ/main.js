// Bài 37.5 js random color
const btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
  // Thay đổi màu nền body

  document.body.style.backgroundColor = changeColor();

  //   thay đổi thẻ h1
  const h1 = document.querySelector("#title");
  h1.textContent = changeColor();
});

function changeColor() {
  const r = Math.floor(Math.random() * 256); //chay từ 0 đến 255
  const g = Math.floor(Math.random() * 256);
  const p = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${p})`;
}
