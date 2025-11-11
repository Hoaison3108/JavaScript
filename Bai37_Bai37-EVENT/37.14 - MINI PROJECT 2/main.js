// chọn tất cả các pần tử có class là panel
const panels = document.querySelectorAll(".panel");
console.log(panels);

// duyệt qua các phẩn tử trong panels
panels.forEach((item) => {
  // xuất ra các item
  console.log(item);
  //lắng nghe sự kiện click
  item.addEventListener("click", () => {
    //xoa class active của các panel khác
    removeActive();

    // thêm class active cho panel đang được click
    //thêm 1 class vào trong panel
    item.classList.add("active");
  });
});

function removeActive() {
  // duyệt từng phần tử trong panels
  panels.forEach((item) => {
    //xóa class active
    item.classList.remove("active");
  });
}
