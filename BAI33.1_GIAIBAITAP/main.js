//Bài 33.1 Bài tập thực hành 32, 33
/*
    Bài tập 32: Viết chương trình tạo 1 mảng 1 chiều gồm các phàn tử là số nguyên
    có n phẩn tử, n do người dùng nhập từ bàn phím

    Bài tập 33: 
    1. Viết chương trình tạo 1 mảng 1 chiều gồm các phần tử là số nguyên, có n phần tử ngẫu
    nhiên, n do người dùng nhập từ bàn phím
    2. Xuất các giá trị trong mảng
    3. Đảo ngược mảng, và xuất mảng sau khi đảo ngược
    4. Sắp xếp mảng tăng dần
    5. Tính tổng các phần tử trong mảng
    6. Cho người dùng nhập 1 số bất kỳ, kiểm tra số đó có tồn tại trong mảng hay không,
    nếu có xuất ra vị trí index của số đó trong mảng

*/

/*
    Bài tập 32: Viết chương trình tạo 1 mảng 1 chiều gồm các phàn tử là số nguyên
    có n phẩn tử, n do người dùng nhập từ bàn phím
*/
//Cách 1 tự làm
// function integerNumbers(inputInteger) {
//   let arr = [];
//   //check điều kiện inputInteger là số nguyên, lớn hơn 0
//   while (!Number.isInteger(inputInteger) || inputInteger < 0) {
//     inputInteger = Number(prompt("Nhập vào số nguyên không âm"));
//   }
//   //Duyệt qua các vị trí index để thêm giá trị vào mảng
//   for (let i = 0; i < inputInteger; i++) {
//     arr[i] = Number(prompt(`Nhập vào số nguyên thứ ${i + 1}: `));
//     console.log(i);
//   }
//   return arr;
// }
// //gọi hàm
// inputInteger = Number(prompt("Nhập vào số lượng mảng là số nguyên > 0"));
// let result = integerNumbers(inputInteger);
// console.log(result);

//Cách 2 theo video
// let arr2 = [];
// let inputInteger2;
// //check điều kien đảm bảo inputInteger là sô nguyên và >0
// //sử dụng vòng lặp while(true)
// while (true) {
//   inputInteger2 = Number(
//     prompt(`
//       Mời nhập vào số phần tử của mảng,
//       lưu ý phải là sso nguyên >0`)
//   );
//   //kiểm tra inputInteger2
//   if (Number.isInteger(inputInteger2) && inputInteger2 > 0) {
//     //chỉ khi inputInteger2 là số nguyên >0 thì thoát vòng lặp
//     break;
//   }
// }
// //duyệt mảng và gán giá trị cho mảng
// for (let j = 0; j < inputInteger2; j++) {
//   console.log(j);
//   let input2 = Number(prompt(`Nhap vào giá trị phân tử ${j + 1}`));
//   arr2.push(input2);
// }
// //Xuất mảng sau khi nhập
// console.log(arr2);

/*Bài tập 33: 
    1. Viết chương trình tạo 1 mảng 1 chiều gồm các phần tử là số nguyên, có n phần tử ngẫu
    nhiên, n do người dùng nhập từ bàn phím
    2. Xuất các giá trị trong mảng
    3. Đảo ngược mảng, và xuất mảng sau khi đảo ngược
    4. Sắp xếp mảng tăng dần
    5. Tính tổng các phần tử trong mảng
    6. Cho người dùng nhập 1 số bất kỳ, kiểm tra số đó có tồn tại trong mảng hay không,
    nếu có xuất ra vị trí index của số đó trong mảng
*/
//(1)
function randomIntegerArr(inputInteger3) {
  let arr3 = [];
  //check điều kiện n nhập vào là số nguyên và lớn hơn 0
  while (!Number.isInteger(inputInteger3) || inputInteger3 < 0) {
    inputInteger3 = Number(prompt("nhập lại số nguyên n > 0"));
  }
  for (let i = 0; i < inputInteger3; i++) {
    console.log(i);
    let tempArr = parseInt(Math.random() * 100); //random từ 0-99
    //đẩy giá trị trong biến tạm vào các vị trí của mảng
    arr3.push(tempArr);
  }
  return arr3;
}

let inputInteger3 = Number(prompt("Mời nhập vào n phần tử mảng, với n>0"));
let result2 = randomIntegerArr(inputInteger3);

//(2) xuất mảng
console.log(result2);
// in ra dạng chuỗi sử dụng phương thức join()
console.log("Mảng: " + result2.join(", "));

//(3) Đảo ngược và xuất mảng
//Sử dụng phương thức slice() sao chép mảng trước khi đảo ngược để tránh làm thay đổi giá trị của mảng ban đầu
//sử dụng phuong thức reverse() đảo ngược
let reverseArr = result2.slice().reverse();
console.log(reverseArr);

//(4) sắp xếp mảng tăng dần
//sử dụng phương thức sort
let sortedArrAscending = reverseArr.sort((a, b) => a - b);
console.log(sortedArrAscending);

//(5) tính tổng các phần tử trong mảng
//sử dụng phương thức reduce()
let sumArr = sortedArrAscending.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sumArr);

//(6)nhập số bất kì kiêm tra có thuộc trong mảng
//sử dụng phương thức filter()
let inputN = Number(prompt("nhập số cần kiểm tra"));
if (sortedArrAscending.includes(inputN)) {
  let index = sortedArrAscending.indexOf(inputN); //vị trí đầu tiên

  console.log("Số N thuộc mảng vị trí " + index);
} else {
  console.log("số N không thuộc mảng");
}
