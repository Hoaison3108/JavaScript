//Bài 36.4 JS DOM Digital Clock - Hiển thị thời gian thực với DOM
/*



*/
//Tạo function lấy thời gian thực
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0"); //padstart(2,"0") chèn số 0 vào trước nếu giá trị không đủ 2 ký tự
  const minute = String(now.getMinutes()).padStart(2, "0");
  const second = String(now.getSeconds()).padStart(2, "0");
  const timeString = `${hours}:${minute}:${second}`;
  //console.log(timeString);
  document.getElementById("clock").innerHTML = timeString;
}
//sử dụng phương thức để làm mới thời gian liên tục mỗi giây, tương đương nhấn F5
setInterval(updateClock, 1000);
