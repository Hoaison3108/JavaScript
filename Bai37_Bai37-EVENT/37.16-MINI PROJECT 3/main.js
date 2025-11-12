//lấy các phần từ cần thao tác từ DOM
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const steps = document.querySelectorAll(".step");

let currentActive = 1; //khơi tạo giá trị ban đầu của buuocws đang hoạt động

//lắng nghe sự kiện cho nút next
next.addEventListener("click", function () {
  changeStep(1); //tăng bước lên 1
});

//lắng nghe sự kiện cho nút prev
prev.addEventListener("click", function () {
  changeStep(-1); //giảm bước đi 1
});

function changeStep(step) {
  currentActive += step; //thay đổi giá trị của currentActive

  update(); //cập nhật lại giao diện
}

function update() {
  //duyệt qua các phần tử của danh sách
  //   step phần tử đáng duyệt trong danh sách
  // idx index của phần tử trong danh sách
  steps.forEach((step, index) => {
    if (index < currentActive) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });

  //bật tắt các nút prev và next dựa trên giá trị currentActive
  prev.disabled = currentActive === 1;
  next.disabled = currentActive === steps.length; //bằng độ dài danh sách tức 4 phàn tử

  //   cập nhật chiều rộng của thanh tiến trình
  progress.style.width = ((currentActive - 1) / (steps.length - 1)) * 100 + "%";
}
