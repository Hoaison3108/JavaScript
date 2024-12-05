//Bài 34.5 Các phương thức sẵn có trong JS
/*
    V) Phương thức sẵn có trong JS
        Có một số phương thức sẵn có mà bạn có thể sử dụng trên các đối tượng
        Dưới đây là một số phương thức quan trọng
            1. Object.keys(obj); 
                -> Trả về một mảng chứa tất cả các key (tên thuộc tính) của đối tượng
            2. Object.values(obj);
                -> Trả về một mảng chứa tất cả các giá trị của đối tượng
            3. Object.entries(obj);
                -> Trả về một mảng chứa các cặp [Khoá, giá trị] của đối tượng dưới dạng mảng con
            4. Object.assign(target, source);
                -> Sao chép các thuộc tính từ một hoặc nhiều đối tượng nguồn (source) vào một đối tượng đích (target)
            5. Object.hasOwnProperty(pro);
                -> Kiểm tra xem đối tượng có một thuộc tính nào đó hay không và trả về true nếu có
            6. Object.freeze(obj);
                -> Phương thức này đóng băng đối tượng, làm cho nó không thể thêm, xoá, sửa
            7. Object.seal(obj);
                -> Ngăn không cho thêm, xóa thuộc tính, cho phép sửa giá trị


*/
//#5.1 Object.key(obj)
//Trả về một mảng chứa tất cả các key (tên thuộc tính) của đối tượng
let person = {
  name: "john",
  age: 30,
};
let keys = Object.keys(person);
console.log(keys); //['name', 'age']

//#5.2 Object.values(obj);
//Trả về một mảng chứa tất cả các giá trị của đối tượng
let person2 = {
  name: "john",
  age: 30,
};
let values = Object.values(person2);
console.log(values); //['john', 30]

//5.3 Object.entries(obj);
//Trả về một mảng chứa các cặp [Khoá, giá trị] của đối tượng dưới dạng mảng con
let person3 = {
  name: "john",
  age: 30,
};
let entries = Object.entries(person3);
console.log(person3); //{name: 'john', age: 30}

//5.4 Object.assign(target, source);
//Sao chép các thuộc tính từ một hoặc nhiều đối tượng nguồn (source) vào một đối tượng đích (target)
let target = { c: 100 };
let source1 = { a: 1 };
let source2 = { b: 2 };
//Sao chép thuộc tính source1 & source2 vào đối tượng target
Object.assign(target, source1, source2);
console.log(target); //{c: 100, a: 1, b: 2}

//sử dụng spread(...) để sao chép thuộc tính
//sao chép thuộc tính s1 và s2 vào đối tượng target2
const target2 = { ...source1, ...source2 };
console.log(target2); //{a: 1, b: 2}

//5.5 Object.hasOwnProperty(pro);
//Kiểm tra xem đối tượng có một thuộc tính nào đó hay không và trả về true nếu có
let person4 = {
  name: "john",
  age: 30,
};
console.log(person4.hasOwnProperty("name")); //true
console.log(person4.hasOwnProperty("job")); //false

//5.6 Object.freeze(obj);
//Phương thức này đóng băng đối tượng, làm cho nó không thể thêm, xoá, sửa
let person5 = {
  name: "john",
  age: 30,
};
Object.freeze(person5); //Đóng băng
//Sửa thuộc tính
person5.age = 100; //không thể sửa
//Thêm thuộc tính
person5.email = "js mail"; // Không thể thêm
//Xóa thuộc tính
delete person5.age; //Không thể xóa
console.log(person5);

//5.7 Object.seal(obj);
//Ngăn không cho thêm, xóa thuộc tính, cho phép sửa giá trị
let person6 = {
  name: "john",
  age: 30,
};
Object.seal(person6);
//Thêm thuộc tính
person6.location = "new York"; //không thêm dc
//Xóa thuộc tính
delete person6.age; //Không xóa dc
//Sửa thuộc tính
person6.age = 100;
console.log(person6);
