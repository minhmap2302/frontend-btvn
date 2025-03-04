let m = prompt("Nhập vào một số kiểm tra có bao nhiêu số nguyên tố từ số đó đến 0: ");
let temp = 0;
if (m <= 0) {
    document.write("Số bạn nhập không hợp lệ"); 
    } else {
        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= i; j++) {
                if (i % j == 0) {
                    temp++;
                }
            }
            if (temp == 2) {
                document.write(i + " ");
            }
            temp = 0;
        }
    }