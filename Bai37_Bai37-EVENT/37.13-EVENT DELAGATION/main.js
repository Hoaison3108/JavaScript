// 37.13 - Event - Event delegation
//1. Ngăn submit mặc định của form
//2. Khi nhấn submit thì thêm 1 li vào ul
const form = document.querySelector("form");
const list_Item = document.getElementById("list_item");
form.addEventListener("submit", function (e) {
  e.preventDefault(); //ngăn ngừa submit mặc định của form

  // Lấy giá trị của username và message
  const userName = document.getElementById("username").value;
  const message = document.getElementById("message").value;

  //   tạo thẻ li mới
  const newLi = document.createElement("li");
  newLi.textContent = userName + ":" + message;

  //   thêm li vào ul
  list_Item.append(newLi);

  //   reset form sau send
  form.reset();
});

// 3. xóa phần tử li khi click vào, ko dung event delegation
//chọn tất cả thẻ li
const lis = document.querySelectorAll("li");
console.log(lis);

// duỵet qua dạnh sách li
// for (let li of lis) {
//   //lắng nghe sự kiện click vào li
//   li.addEventListener("click", function () {
//     //xóa thẻ li
//     li.remove();
//   });
// }

// vấn đề khi thê 1 li với vào ul
//thì li đó không có sự kiện click
//xóa phần tử li khi click vào đùng event delegation

list_Item.addEventListener("click", function (e) {
  const li = e.target; //target thuộc tính xác định người dung đang click vào đâu
  //li.remove();
  //Kiểm tra xem thẻ dc click có phải là thẻ li nếu có thì xóa
  if (li.tagName === "LI") {
    li.remove();
  }
});
