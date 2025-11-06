// 37.10 Input & Change Events
//Change event: sự kiện xảy ra khi giá trị thay đổi và mất focus

const inputFrm = document.querySelector("#name");
// inputFrm.addEventListener("change", function (e) {
//   console.log(e.target.value);
// });

// input event: đây là sự kiện mà khi trình duyệt kích hoạt khi người dùng
// thực hiện bất kỳ hành động nhập liệu nào trên một phần tử HTML

inputFrm.addEventListener("input", function (e) {
  console.log(e.target.value);
  // đưa giá trị input vào thẻ h2
  const hi = document.querySelector("#hi");
  hi.textContent = e.target.value;
});
