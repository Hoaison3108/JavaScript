//Bài 35.1 Browser Object Model
/*
    I) BOM: Browser Object Model
        Bom: là viết tắt của "Browser Object Model" (Mô hình Đối tượng Trình duyệt), là một phần của một trường
        trình duyệt web, cung cấp một giao diện lập tình để tương tác với các thành phần của trình duyệt.
        -> Các trình duyệt khác nhau có Bom sẽ hơi khác nhau nhưng cấu trúc cơ bản thì giống nhau
        - Bom sẽ cung cấp các đối tượng và phương thức cho phép lập tình viên tương tác với trình duyệt
         và các thành phần của trang web, như cửa sổ, khung, các phần ử HTML...
         - Nó cho phép kiểm soát và thao tác các yếu tố trong trang web như tạo cửa sổ mới, điều khiển độ phóng to thử nhỏ...
        + Document: là một đối tượng được tạo bởi trình duyệt web ngay khi trang được tải. DOM không phụ thuộc và ngôn ngữ lập trình
        cụ thể nào, mà là một phần của môi trường trình duyệt web.
        + Screen Object: Đối tượng màn hình cung cấp thông tin về màn hình của người dùng như độ phân giải, kích thước
        số lượng màu sắc, và nhiều thông tin khác.
        + Location Object: Đối tượng vị trí đại diện cho URL hiện tại của trình duyệt và cho phép bạn tương tác
        với các thành phần của URL như phần Protocol, hostname, port, path, v.v
        + History Object: Đối tượng lịch sử cho phép bạn tương tác với lịch sử trình duyệt của người dùng, như
        điều hướng đến các trang trước đó hoặc sau đó trong lịch sử duyệt.
        + Navigator Object: Đối tượng điều hướng chứa thông tin về trình duyệt của người dùng, như tên và phiên bản 
        của trình duyệt, hệ điều hành đang sử dụng và nhiều hơn nữa.

    =======DOM=======
    1) Document Object Model
        + Định nghĩa:
    2) HTML DOM
        - Dom xem tài liệu HTML hoặc XML như một cây đối tượng (object Tree), trong đó mỗi nút (node)
        đại diện cho một phần của tài liệu
        - Vì vậy chúng ta có thể chọn và thay đổi bất kỳ thành phần nào của trang
    3) Cấu trúc DOM
        - Phân loại node quan trọng trong DOM
            + Document node: Đại diện cho toàn bộ tài liệu HTML.
            + Element nodes: Node phần tử đại diện cho một phần tử HTML cụ thể, chẳng hạn như một thẻ <div> 
            hoặc một thẻ <img>
            + Text nodes: Tạo văn bản bên trong các phần tử HTML
            + Attribute node (Node thuộc tính): href, src.....
            + Comment nodes: Chức các comment trong mã HTML 
    4) DOM API
        - API: Application Programming Interface - Giao diện lập trình ứng dụng
        - Một cách đơn giản, API là một công cụ trung gian giúp các phần mềm hoặc ứng dụng giao tiếp với nhau
        - Ví dụ: 
            + API Youtube - cho phép bạn hiển thị video trên trang web
            + API Facebook - cho phép bạn hiển thị thông tin Facebook trên một trang web
        - DOM API là một bộ các phương thức thuộc tính mà JS cung cấp để tương tác với DOM

        =================   36.2 InnerHTML và các phương thức getElement   =====================
      
        4.2) InnerHTML
        -innerHTML là một thuộc tính của các phần tử HTML mà cho phép xem hoặc sửa nội dung HTML bên trong một phần tử
        4.3) getElementByTagName()
        - Chọn các phần tử trên trang web dựa trên thẻ HTML li, ul, <div>, <p>, <a>
        - Trả về 1 mảng chứa các phần tử có tagName được chỉ định
        4.4) getElementsByClassName()
        - Chọn các phần tử trên trang web dựa trên class name
        - Trả về 1 mảng chứa các phần tử có className được chỉ định
        4.5) getElementsById()
        - Cho phép bạn truy cập và thao tác với một phần tử HTML cụ thể trong trang web bằng cách sử dụng ID
        của phần tử
        - Trả về 1 phần tử duy nhất có id trùng lặp, nếu có nhiều id trùng thì chỉ trả về id đầu tiên (tuy nhiên theo 
        quy tắc không được đtặ 2 id trùng nhau trên cùng 1 trang).
        - Nếu không tìm thấy Id trả về Null
    
        =================   36.3 querySelector và querySelectorAll   =====================
        4.6) querySelector()
        - querySelector có thể chấp nhận bất kỳ bộ chọn CSS nào như id, class, tagName hoặc thậm chí là 
        bộ chọn CSS kết hợp (CSS Combinator) để chọn phần tử trên trang web
        - Phương thức này trả về phần tử đầu tiên trong document phù hợp với selector được chỉ định
            1. Chọn phần tử bằng id (#)
                document.querySelector('#heading_title')
            2. Chọn phần tử bằng Class (.)
                document.querySelector('.list')
            3. Để chọn phần tử <a> trong danh sách
                document.querySelector('a').
        4.7) querySelectorAll()
        - querySelectorAll có thể chấp nhận bất kỳ bộ chọn CSS nào như id, class, tagName hoặc thậm chí là
        bộ chọn CSS kết hợp (CSS Combinator) để chọn phần tử trên trang web
        - Phương thức này trả về phần tử danh sách các phần tử trong document phù hợp với selector được chỉ định


*/

//#4.3 getElementByTagName
console.log("getElementsByTagName");
let li_item = document.getElementsByTagName("li");
console.log(li_item); //trả về mảng các phần tử li
//Có thể kiểm tra xem mảng có bao nhiêu phần tử
console.log(li_item.length);
//Sử dụng innerHTML thay đổi giá trị 1 thẻ, index 0
li_item[0].innerHTML = "abc text";

//#4.4 getElementsByClassName
console.log("getElementsByClassName");
let li_class_item = document.getElementsByClassName("list");
console.log(li_class_item);
li_class_item[1].innerHTML = "Phần tử li index 1 đã thay đổi lần 2";

//#4.5 getElementsById
console.log("getElementsById");
let el_id = document.getElementById("list_about");
console.log(el_id);
//thay đổi text trên biến el_id
el_id.innerHTML = "Something about me";

//#4.6 querySelector
// chọn id sử dụng '#', class '.', tag name 'a'
//chọn phần tử có id là "heading_title" và thay đổi nội dung của nó
let title = document.querySelector("#heading_title");
console.log(title);
title.innerHTML = "New Title";
//Chọn phần tử đầu tiên có lớp là "list" và thay đổi nội dung
let firstListItem = document.querySelector(".list");
// firstListItem.innerHTML = "Trang chủ";

//Quan trọng, querySelector có thể chọn css kết hợp
//(xem lại series bài 27)
let firstLinkInList = document.querySelector("ul a");
console.log(firstLinkInList);
//Chọn phần tử input checkbox và đặt thuộc tính checked cho nó
let checkbox = document.querySelector("input");
checkbox.checked = true;

//#4.7 querySelectorAll
let list_item = document.querySelectorAll("li");
console.log(list_item);
list_item[1].innerHTML = "Liên hệ với chúng tôi";
