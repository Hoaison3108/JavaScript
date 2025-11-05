function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

//Chọn phần tử
const btnList = document.querySelectorAll(".btn");

//Mỗi lần click  thay đổi màu nền màu chữ
// for (let btn of btnList) {
//   if (btn instanceof HTMLElement) {
//     btn.addEventListener("click", function () {
//       btn.style.backgroundColor = randomColor();
//       btn.style.color = randomColor();
//     });
//   }
// }

//chọn phần tử có class title
const titles = document.querySelectorAll(".title");

//mỗi lần click thì thây đổi màu chữ tittle

// for (let tittle of titles) {
//   if (tittle instanceof HTMLElement) {
//     tittle.addEventListener("click", function () {
//       tittle.style.backgroundColor = randomColor();
//       tittle.style.color = randomColor();
//     });
//   }
// }

function changeColor() {
  this.style.backgroundColor = randomColor();
  this.style.color = randomColor();
}

for (let btn of btnList) {
  btn.addEventListener("click", changeColor);
}

for (let title of titles) {
  title.addEventListener("click", changeColor);
}
