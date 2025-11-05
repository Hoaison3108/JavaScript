//1.1 xác định phần tử có id là btn
const button1 = document.getElementById("btn");

//1.2 gán sự kiện click cho btn, sử dụng function expression
// button1.onclick = function () {
//   alert("Bạn đã click vào button");
// };

//1.3 dùng function declaration khai báo hàm
//sau đó gán hàm đó cho sự kiện click
// function clickHandler() {
//   alert("Bạn đã nhấn vàp button1");
// }

// button1.onclick = clickHandler;

// 1.4 dùng arrow function
button1.onclick = () => {
  alert("Bạn đã nhấn vàp button 1");
};

function mouseOver() {
  document.getElementById("message").textContent = "Mouse is over the button";
}

function mouseOut() {
  document.getElementById("message").textContent = "Mouse is out the button";
}

//1.5 ví dụ 2
function setup() {
  var button = document.getElementById("btn2");
  button.onmouseover = mouseOver;
  button.onmouseout = mouseOut;
}

//sự kiện onload: khi trang web đã load đầy đủ thì mới gọi hàm setup
window.onload = setup;
