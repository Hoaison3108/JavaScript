// 37.12 Event - Event Bubbling - Capturing - stopPropagation

const child = document.querySelector("#child");
const parent = document.querySelector("#parent");
const grandparent = document.querySelector("#grandparent");

// child.addEventListener(
//   "click",
//   function () {
//     alert("child clicked");
//   },
//   true
// );

// parent.addEventListener(
//   "click",
//   function () {
//     alert("parent clicked");
//   },
//   true
// );

// grandparent.addEventListener(
//   "click",
//   function () {
//     alert("grandparent clicked");
//   },
//   true
// );

// so sánh phương thức stopPropagation và stopImmediatePropagation
// 1. dùng stopPropagation() chỉ ngăn chặn sự kiện lan truyền từ con lên cha
// Không ngăn chặn được sự kiện trong cùng 1 element
child.addEventListener("click", function (e) {
  e.stopPropagation();
  alert("child clicked");
});

child.addEventListener("click", function (e) {
  e.stopPropagation();
  alert("child clicked 2");
});

parent.addEventListener("click", function (e) {
  e.stopPropagation();
  alert("parent clicked");
});

grandparent.addEventListener("click", function () {
  alert("grandparent clicked");
});

// 2. dung phương thức StopimmediatePropagation ngăn chặn sự kiện cùng 1 element
child.addEventListener("click", function (e) {
  e.stopImmediatePropagation();
  alert("child clicked");
});

child.addEventListener("click", function (e) {
  e.stopPropagation();
  alert("child clicked 2");
});

parent.addEventListener("click", function (e) {
  e.stopPropagation();
  alert("parent clicked");
});

grandparent.addEventListener("click", function () {
  alert("grandparent clicked");
});
