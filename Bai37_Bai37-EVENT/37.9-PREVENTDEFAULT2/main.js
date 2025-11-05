// 39.7 ví dụ vận dụng preventDefault and form events
const form = document.querySelector("#login");
const userName = document.querySelector("#name");
const password = document.querySelector("#password");

// chọn thẻ ul cha
const list = document.querySelector("#list");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  //   trích xuất dữ liệu dùng value
  console.log(userName.value);
  //tạo thẻ li
  const newLi = document.createElement("li");
  newLi.innerText = userName.value;

  //   thêm li và list
  list.append(newLi);

  //   reset input
  userName.value = "";
  password.value = "";
});

const link = document.querySelector("a");
link.addEventListener("click", function (e) {
  e.preventDefault();
  alert("Link đã đc click");
});
