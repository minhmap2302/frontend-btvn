let n = prompt("Nhập vào một số: ");
let temp = 0;
if (n <= 0) {
    document.write("Số bạn nhập không hợp lệ"); 
    } else {
        for (let i = 1; i <= n; i++) {
            if (i % 5 == 0) {
                document.write(i + " ");
            }
        }
    }
