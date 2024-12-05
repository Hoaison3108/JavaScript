// Bài 15: Hàm Math.Random() _ tạo số ngẫu nhiên

//1. Random trong [0 -> 1]
let randomValue = Math.random();
console.log("Số ngẫu nhiên từ 0 đến 1: " + randomValue);

//2. Random số lớn hơn [0 -> 10]
let randomValue2 = Math.random() * 10;
console.log("Số ngẫu nhiên từ 0 đến 10: " + randomValue2);

//3. Random số nguyên
let randomValue3 = parseInt(Math.random() * 10);
console.log("Số ngẫu nhiên từ 0 đến 10: " + randomValue3);

//4. Random số nguyên [0 -> 30]
let randomValue4 = parseInt(Math.random() * 30);
console.log("Số ngẫu nhiên từ 0 đến 10: " + randomValue4);

//4. Random số nguyên [10 -> 30]
let randomValue5 = parseInt(Math.random() * 20) + 10;
console.log("Số ngẫu nhiên từ 0 đến 10: " + randomValue5);
