let n = prompt("Nhập vào một số để kiểm tra có phải số nguyên tố hay không: ");
let result = 0;
if (n <= 0) {
    document.write("Số bạn nhập không hợp lệ");
} else {
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            result++;
        }
    }
    if (result == 2) {
        document.write("Số bạn nhập là số nguyên tố");
    } else {
        document.write("Số bạn nhập không phải là số nguyên tố");
    }
}