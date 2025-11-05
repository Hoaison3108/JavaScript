// 37.8 PreventDefault - form event
const form = document.querySelector("#login");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Form đã submit");
});
