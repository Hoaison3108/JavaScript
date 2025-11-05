// 37.7
const inp = document.querySelector("#inp");
inp.addEventListener("keydown", function () {
  console.log("Keydown");
});

inp.addEventListener("keyup", function () {
  console.log("Keyup");
});

//Event object
inp.addEventListener("keydown", function (e) {
  console.log(e);
});

inp.addEventListener("keydown", function (e) {
  console.log(e.key);
  console.log(e.code);
});

//Đổi màu nền khi nhấn phím r
document.addEventListener("keydown", function (e) {
  if (e.key === "r") {
    // đôi mau nen
    document.body.style.backgroundColor = "cyan";
  }
});
