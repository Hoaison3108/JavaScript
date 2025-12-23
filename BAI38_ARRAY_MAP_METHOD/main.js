// ví dụ 1: nhân đôi giá rị trong mảng
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// ví dụ 2: chuyển đổi mảng các đối tượng thành mảng các tên
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

const names = users.map((user) => user.name);
console.log(names); // ["Alice", "Bob", "Charlie"]

// ví dụ 3: sử dụng đầy đủ tham số currentValue, index, array
const M = [10, 20, 30, 40, 50];
const result = M.map(function (currentValue, index, array) {
  console.log(`index: ${index}`);
  console.log(`Giá trị hiện tại: ${currentValue}`);
  console.log(`Mảng gốc: ${array}`);
  return currentValue / 10;
});

console.log(result); // [1, 2, 3, 4, 5]

// ví dụ 4: đối số thisArg
const config = {
  calculate(value) {
    return value * 3;
  },
};

const M2 = [1, 2, 3, 4, 5];
const kq = M2.map(function (value) {
  return this.calculate(value);
}, config);

console.log(kq); // [3, 6, 9, 12, 15]
