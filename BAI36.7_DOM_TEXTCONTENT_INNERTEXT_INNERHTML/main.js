//Bài 36.7 JS DOM - textContent - innerText - innerHTML
/*
    I) So sánh
        - Thuộc tính textContent, innerHTML, innerText
        - Điểm chung: cả ba đều sử dụng để get hoặc set với phần tử HTML chứa nội dung văn bản, 
        như các phần tử <p>, <span>, <div>....
        - Điểm khác: 
            + textContent : trả về nội dung nằm bên trong phần tử, bao gồm các khoảng trắng, tab xuống dòng...
            + innerText: trả về văn bản mà người dùng có thể nhìn thấy trên trình duyệt, loại bỏ các phần tử 
            được ẩn bằng CSS
            + innerHTML: trả về toàn bộ nội dung HTML của phần tử, bao gồm các thẻ HTML và cấu trúc của chúng

*/
//chọn đến phần tử có id là demo
let elm = document.getElementById("demo");

//textContent
console.log("textContent");
console.log(elm.textContent);
//innerText
console.log("innerText");
console.log(elm.innerText);
//innerHTML
console.log("innerHTML");
console.log(elm.innerHTML);

//chọn đến phần tử có id là demo2
let elm2 = document.getElementById("demo2");
elm2.innerHTML = "<p><i>abc.cc</i></p>"; //cố gắng chuyển đổi thành định dạng html
elm2.textContent = "<p><i>abc.cc</i></p>"; //đưa trực tiếp lên web mà ko chuyển đổi thành html
