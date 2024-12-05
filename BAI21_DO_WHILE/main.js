//Bài 21 Vòng lặp Do While
/*
Cú pháp:
do{
    -> mã lệnh được thực thi ít nhất 1 lần
    -> sau đó vòng lặp sẽ kiểm tra điều kiện
}while (điều_kiện);

 +chú ý:
 Vòng lặp này khác while ở chỗ, nó thi hành khối lệnh này ít nhất 1 lần đầu tiên
 sau đó mới kiểm tra điều_kiện, nếu điều_kiện vẫn TRUE thì lặp tiếp
*/
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);
