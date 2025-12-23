const button = document.querySelectorAll(".btn");
button.forEach((button) => {
  button.addEventListener("click", function (e) {
    // Lấy tọa độ button so với viewport
    const buttonRect = e.target.getBoundingClientRect();
    console.log(buttonRect);

    //lấy tọa độ click so với viewport
    const clickX = e.clientX;
    const clickY = e.clientY;
    console.log(clickX, clickY);

    // Tính tọa độ của click so với button
    const xInside = clickX - buttonRect.left;
    const yInside = clickY - buttonRect.top;
    console.log(xInside, yInside);

    // Thêm thẻ span, Tạo class circle
    const circle = document.createElement("span"); // tạo thẻ span
    circle.classList.add("circle"); // thêm class circle vào thẻ span
    circle.style.left = `${xInside}px`; // gán vị trí left
    circle.style.top = `${yInside}px`; // gán vị trí top

    this.appendChild(circle); // chèn thẻ span vào trong button

    // Xóa circle sau 0.5s
    setTimeout(() => circle.remove(), 500);
  });
});
