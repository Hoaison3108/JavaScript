// 37.11 Event - Event Bubbling - stopPropagation

const child = document.querySelector("#child");
const parent = document.querySelector("#parent");
const grandparent = document.querySelector("#grandparent");

// child.addEventListener("click", function () {
//   alert("child clicked");
// });

// parent.addEventListener("click", function () {
//   alert("parent clicked");
// });

// grandparent.addEventListener("click", function () {
//   alert("grandparent clicked");
// });

child.addEventListener("click", function (e) {
  e.stopPropagation(); //Ngăn ngừa hiệu ứng nổi bọt không lan sự kiện ra thẻ cha
  alert("child clicked");
});

parent.addEventListener("click", function (e) {
  e.stopPropagation(); //Ngăn ngừa hiệu ứng nổi bọt không lan sự kiện ra thẻ cha
  alert("parent clicked");
});

grandparent.addEventListener("click", function () {
  alert("grandparent clicked");
});
