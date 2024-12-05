//Bài 22 VÒng lặp For - For Loop
/*
 Cú pháp:
  for([khởi_tạo];[Điều_kiện];[Bước_lặp])
    {
      <Khối_lệnh>;
    }
*/
//ví dụ 1
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

//Ví dụ 2: xuất các số chẵn từ 0 đến 10
// for (let i = 0; i <= 10; i += 2) {
//   console.log(i);
// }

//ví dụ 3: tính tổng các số chẵn từ 0 đến 10
let tong = 0;
for (i = 0; i <= 10; i += 2) {
  tong += i; //tong = tong + i;
  console.log(tong);
}
