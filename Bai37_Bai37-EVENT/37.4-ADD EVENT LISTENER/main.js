//1. lấy phần tử
const btn = document.getElementById("btn3");

//2. thêm sự kiện
//2.1 function expression
// btn.addEventListener("click", function () {
//   alert("Bạn đã click vào button");
// });

// 2.2 function declaration
// function handleClick() {
//   alert("Bạn đã click vào button");
// }

// btn.addEventListener("click", handleClick);

// 2.3 arrow function
btn.addEventListener("click", () => {
  alert("Bạn đã click và button");
});

//3. Lợi ích của addEventLister
// 3.1 có thể thêm nhiều sự kiện cho cùng 1 phần tử
// lấy phần tử
const btn4 = document.getElementById("btn4");

// hàm xử lý sự kiện 1

function handleClick1() {
  alert("Đây là sự kiện 1");
}

// hàm xử lý sự kiện 2
function handleClick2() {
  alert("Đây là sự kiện 2");
}

btn4.addEventListener("click", handleClick1);
btn4.addEventListener("click", handleClick2);

// 3.2 xóa sự kiện
btn4.removeEventListener("click", handleClick1);

// 3.3 có thể sử dụng sự kiện với option
btn4.addEventListener("click", handleClick1, { one: true });
btn4.addEventListener("click", handleClick2);
