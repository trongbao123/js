// function MyFunction(){
//     console.log('hàm cơ bản');
// }
// MyFunction();


var num1 = 8;
var num2 = 7;
var num3 = 4;
var num4 = 5;
var num5 = 6;
var num6 = 9;
var total = 0;
// function sum(){
//     total = num1 + num2;
//     console.log(total);
// }
//  gọi hàm
// sum ();
// các đoạn code có chung công thức xử lý chỉ khác giá trị sử dụng
function sumParam(param1,param2){
   var totalparam = param1 + param2;
   console.log(totalparam)
}
// gọi hàm
// ?khi truyền giá trị cho hàm phải theo đúng thứ tự và số lượng tham số đã khai báo
// giá trị truyền vào tham số có tên gọi là đối số(argument)
sumParam(num1,num2);
sumParam(num3,num2);
sumParam(num4,num5);
sumParam(9,6);

/**
 * hàm có kết quả trả về (return)
 *  
 * 
 * 
 * */
// !phạm vi biến (variable scope)-ebs
// !biến được phép sử dụng ở đâu
// !2 phạm vi: toàn cục(global scope),cục bộ (function scope)
// !phạm vi ngoài hàm và phạm vi trong hàm
// global scope
// ưu điểm :được dùng ở trong và ngoài hàm đều được
// nhược điểm : Dễ bị chỉnh sửa ngoài mong đợi
var age = 20;
function checkinfo(address){
    console.log("Gọi age trong hàm"+ age);
    // function scope
    // chỉ dùng bên trong hàm mà biến được khai báo
    // thứ tự ưu tiên : ưu tiên sử dụng biến trong hàm
    var fullName = "Nguyễn thị khách hàng";
    console.log("gọi tên trong hàm" + fullName);
    console.log("gọi address trong hàm" + address);
}
checkinfo("aaaadddd");

console.log("gọi age ngoài hàm" + age);
//! console.log("gọi tên ngoài hàm" + fullName);

var fullName = "llkjkljkl";



// tính điểm trung binh
function tinhTB(diem1,diem2,diem3){
    var dtb = (diem1 + diem2 + diem3) / 3;
    console.log(dtb)
    // chỉ return 1 biến
    // cần sử dụng kết quả tính toán ở nhiều hàm khác
    // gọi hàm xếp loại trong hàm tinhTB
    xeploai(dtb);
    return dtb;
}

tinhTB("");
// xếp loại học sinh
function xeploai(diemTB){
    if(diemTB >= 0 && diemTB <=5){
        console.log("TB")
    }else if(diemTB > 5 && diemTB <=8){
        console.log("khá")
    }else{
        console.log("giỏi")
    }
}

// Ngoài hàm
// tinhTB trả về giá trị dtb => giá trị dtb lưu vào biến ketQua
var KetQua = tinhTB(6,7,9);
console.log("Ngoài hàm: "+ KetQua);

xeploai(KetQua);

// c3: callback Function
// khi 1 hàm nhận vào 1 hàm khác ở vị trí đối số
xeploai(9);
xeploai(KetQua);
xeploai(tinhTB(6,7,9));