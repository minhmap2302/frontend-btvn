let a = prompt("Mời bạn nhập số 1 để kiểm tra: ");
let b = prompt("Mời bạn nhập số 2 để kiểm tra: ");
let c = prompt("Mời bạn nhập số 3 để kiểm tra: ");
let sum = (a > b > c) ? a : (b > c) ? b : c;
document.write("Số lớn nhất trong 3 số bạn nhập là: " + sum);                                                                                               