// Bài 13: Các hàm toán học cơ bản
/*
    1) hàm `Math.sqrt()` : hàm lấy căn bậc 2
    2) hàm `Math.pow(base, exponent)` : hàm lấy số mũ
    3) hàm `Math.abs()` : hàm lấy giá trị tuyệt đối
    4) hàm `Math.ceil()` : hàm làm tròn lên số nguyên gần nhất
    5) hàm `Math.floor()` : hàm làm tròn xuống số nguyên gần nhất
    6) hàm `Math.round()` : làm tròn 0.5 thành 1
    7) hàm toFixed()    : làm tròn sau dấu thập phân, sau khi làm tròn sữ liệu có kiểu là String, muốn tính toán cần ép kiểu lại
    8) hàm `Math.min()` : tìm số nhỏ nhất trong dãy số đưa vào
    9) hàm `Math.max()` : tìm số lớn nhất trong dãy số đưa vào
*/

// hàm Math.sqrt()
let a = Math.sqrt(4);
console.log(a);

// hàm Math.pow(base , exponent)
let b = Math.pow(2, 3);
console.log(b);

// hàm Math.abs()
let c = Math.abs(-5);
console.log(c);

// hàm Math.ceil()
let d = Math.ceil(5.2);
console.log(d);

// hàm Math.floor()
let e = Math.floor(7.8);
console.log(e);

// hàm Math.round()
let f = Math.round(6.39); // trả về kiểu dữ liệu là String cần ép kiểu khi tính toán
console.log(f);

// hàm Math.min() & Math.max()
let h = Math.min(1, 2, 3, 5, 7, 10, 100);
console.log(h);

let k = Math.max(1, 2, 3, 5, 7, 10, 100);
console.log(k);
