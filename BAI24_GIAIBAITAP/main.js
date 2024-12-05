//Bài 24.2 Giải bài tập 15 - Tính n! dùng vòng lặp while & for -Number.isinteger trong js
/*Bài tập 15: viết chương trình nhập vào số nguyên n,
in ra kết quả n! (giai thừa)
Cách 1: dùng vòng lặp for
Cách 2; dùng vòng lặp while
*/

//Kiểm tra có phải số nhập vào là số nguyên hay không
// let n = parseInt(prompt("Nhập vào số Nguyên n: "));
// if (n % 1 == 0) {
//   for (let i = 1; i <= n; i++) {
//     let kq = kq * i;
//     console.log(`Ket quả ${n}!= ${kq}`);
//   }
// } else {
//   prompt("mời bạn nhập lại số nguyên: ");
// }

// let n = Number(prompt("nhập vào số n: "));
// /* kiểm tra n có phải số nguyên ko sử dụng Number.isInteger
// trả vè giá trị boolean true/false*/
// while (!Number.isInteger(n) || n < 0) {
//   //nếu không phải số nguyên
//   n = Number(prompt("Nhập lại số nguyên n"));
// }
// console.log(n);
// 1. dùng vòng lặp for
// let gt = 1;
// for (let i = 1; i <= n; i++) {
//   console.log(i);
//   //gt =gt*i;
//   gt *= i;
// }
// console.log(n + "!= " + gt);

// 2. dùng vòng lặp While
// let gt = 1;
// let i = 1;
// while (i <= n) {
//   gt *= i;
//   i++;
// }
// console.log(n + "! = " + gt);

/*Bài tập 16: tính tổng số lẻ, chẵn
Viết chương trình nhập vào só a từ bàn phím,
nếu a chẵn thì tính tổng các sổ từ 0 đến a
nếu a lẻ thì in ra dòng chữ "tôi không tính số lẻ, thoát chương trình"
*/
let a = Number(prompt("Nhập vào số a: "));
//Kiểm tra có phải số nguyên
while (!Number.isInteger(a)) {
  a = Number(prompt("Nhập lại a; "));
}
let tong = 0;
if (a % 2 === 0) {
  for (let i = 0; i <= a; i += 2) {
    tong += i;
  }
  console.log(`Tong là : ${tong}`);
} else {
  console.log("Tôi ko tính số lẻ: ");
}

/*Bài tập 17: tính tổng số lẻ từ 1 đến n
Viết chương trình tính tổng các số lẻ từ 1 đến n, n nhập từ bàn phím
nhập n =7, bỏ qua không cộng tổng với số 3 => in ra kết quả
(gợi ý đáp án: 1+5+7 = 13)
thử break khi vòng lặp chạy đến n=3
*/

// let n = Number(prompt("nhập vào số n"));
// // Kiểm tra n có phải số nguyên
// while (!Number.isInteger(n)) {
//   n = Number(prompt("nhập lại số nguyên n: "));
// }
// let tong = 0;
// for (let i = 1; i <= n; i += 2) {
//   if (i === 3) {
//     break;
//     //continue; // bỏ qua giá trị nếu i === 3
//   }
//   tong += i;
// }
// console.log(tong);

/*Bài tập 18:  tím số chia hết
  viết chương trình
  tìm những số chia hết cho 3 từ 10 đến 50
 */
// let count = 0;
// for (let i = 10; i <= 50; i++) {
//   if (i % 3 === 0) {
//     //Nâng cao, đếm có bao nhiêu giá trị
//     count++; // đếm số lượng
//     console.log(i);
//   }
// }
// console.log(count);

/*Bài tập 19:  tính tổng giai thừa S
  viết chương trình
  tính tổng S = 1!+2!+3!+...+10!
 */

// let sum = 0;
// //tạo vòng lặp cho 1 số n từ 1 đến 10
// for (n = 1; n <= 10; n++) {
//   // console.log(n);
//   let gt = 1;
//   for (i = 1; i <= n; i++) {
//     gt *= i;
//   }
//   // console.log(gt);
//   sum += gt;
// }
// console.log(`Tong s= ${sum}`);

/*Bài tập 20:  Số hoàn hảo
  Số hoàn thiện 
  (hay còn gọi là số hoàn chỉnh, số hoàn hảo hoặc số hoàn thành)
  là mốt số nguyên dương mà tổng các ước nguyên dương chính thức của nó
  (số nguyên dương bị nó chia hết ngoại trừ nó) bằng chính nó
  tìm tất cả những số hoàn thiện trong phạm vi từ 1 -1000
 */

//Kiểm tra 1 số có phải số hoàn hảo hay ko
// let sum = 0;
// let n = 6;
// for (let i = 1; i < n; i++) {
//   // console.log(i);
//   if (n % i === 0) {
//     console.log(i);
//     sum += i;
//   }
// }
// console.log("tổng = " + sum);

// //Kiểm tra tong có bằng n nếu bằng n thì là số hoàn hảo
// if (sum === n) {
//   console.log(`gia trị ${n} là số hoàn hảo`);
// } else {
//   console.log("ko là số hoàn hảo");
// }

// Tìm số hoàn hảo từ 1 - 1000 và đếm có bao nhiêu số
// let count = 0;
// for (let n = 1; n <= 1000; n++) {
//   let sum = 0;
//   //Kiểm tra tổng ước thực
//   for (let i = 1; i < n; i++) {
//     if (n % i === 0) {
//       sum += i;
//     }
//   }
//   // so sánh tổng ước có bằng n ko
//   if (sum === n) {
//     count++; //đếm số lượng số hoàn hảo
//     console.log(n);
//   }
// }
// alert("số lượng số hoàn hảo: " + count);

/*Bài tập 21:  Kiểm tra số nguyên tố
  Viết chương trình nhập vào số nguyên a>0 từ bàn phím 
  cho biết số đó có phải là số nguyên tố không
  ( Số nguyên tố là số >1, và chỉ chia hết cho 1 và chính nó)
   ví dụ số nguyên tố: 3,5,7.....
   Kết thúc chương trình hỏi người dùng:
   Bạn có muốn tiếp tục sử dụng phần mềm không?
   nếu chọn không thì thoát chương trình.
 */
while (true) {
  //B1: nhập vào số nguyên a từ người dùng
  let a = Number(prompt("Nhập vào số nguyên a"));

  //B2: Kiểm tra xem a có phải là số nguyên dương không
  while (!Number.isInteger(a) || a <= 0) {
    a = Number(prompt("Nhập lại số nguyên dương a"));
  }
  //alert("giá trị a hợp lệ: " + a);
  //B3: kiểm tra có phải số nguyên tố hay không
  let isPrime = true; //khơi tạo biến là số nguyên tố (true)
  //Kiểm tra nếu chạy từ 2 đến số nhỏ hơn a mà có nhiều hơn 1 ước thì không phải số nguyên tố
  for (let i = 2; i < a; i++) {
    if (a % i === 0) {
      isPrime = false;
      break;
    }
  }
  //B: hiển thị kết quả
  if (isPrime) {
    alert(`số ${a} là số nguyên tố`);
  } else {
    alert(`số ${a} không là số nguyên tố`);
  }
  //B5: Hỏi người dùng có muốn tiếp tục không
  let answer = prompt(`
    Bạn có muốn tiếp tục không?
    Nhập "no" để thoát
    Bấm phím bất kỳ để tiếp tục`);
  if (answer.toLowerCase() === "no") {
    // chuyển ký tự nhập vào sang chữ thường
    break;
  }
}
