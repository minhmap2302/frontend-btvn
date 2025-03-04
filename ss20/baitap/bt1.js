let m = prompt("Nhập vào một số: ");
let result=0;
if (m <= 0) {
    document.write("Số bạn nhập không hợp lệ");
} else {
    for (let i = 1; i <= m; i++) {
        result = result + i;
    }
    document.write(result);
}
    