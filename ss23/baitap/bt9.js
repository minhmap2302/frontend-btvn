console.log("=================MENU==============");
console.log("1. Nhập độ dài và giá trị của mảng.");
console.log("2. In ra giá trị của các phần tử trong mảng.");
console.log("3. In ra các phần tử chắn và tổng của các phần tử đó.");
console.log("4. In ra giá trị lớn nhất và nhỏ nhất trong mảng.");
console.log("5. In ra các phần tử là số nguyên tố trong mảng và tính tổng.");
console.log("6. Nhập vào một số và thống kê trong mảng có nhiêu bao phần tử đó.");
console.log("7. Thêm một phần tử vào vị trí chỉ định.");
console.log("8. Thoát");
let arr=[]
while (1) {
    let choice = +prompt("Nhập lựa chọn của bạn: ");
    switch (choice) {
        case 1:
            let n = +prompt("Nhập độ dài cho mảng: ");
            if (n > 0) {
                arr = new Array(n);
                for (let i = 0; i < n; i++) {
                    arr[i] = +prompt(`Nhập phần tử thứ ${i}: `);
                }
                console.log("Thêm thành công.");
            }
            else {
                console.log("độ dài không hợp lệ.");
            }
            break;
        case 2:
            console.log(arr);
            break;
        case 3:
            let result = 0;
            for (let num of arr) {
                if (num % 2 == 0) {
                    result += num;
                }
            }
            console.log(result);
            break;
        case 4:
            let max = arr[0];
            let min = arr[0];
            for (let num of arr) {
                if (num > max) {
                    max = num;
                }
                if (num < min) {
                    min = num;
                }
                
            }
            console.log(`Số lớn nhất là :${max}`);
            console.log(`Số nhỏ nhất là :${min}`);
            break;
        case 5:
            let result2 = 0;
            for (let num of arr) {
                if (num == 1) {
                    continue;
                }
                let count = 0;
                for (let i = 2; i < num; i++) {
                    
                    if (num % i == 0) {
                        count++;
                    }
                }
                if (count == 0) {
                    result2 += num;
                    console.log(num);
                }
            }
            console.log(`tổng các số nguyên tố là :${result2}`);
            break;
        case 6:
            let number = +prompt("Nhập một số bất kì để kiểm tra: ");
            let count = 0;
            for (let num of arr) {
                num == number ? count++ : count;
            }
            console.log(`${number} xuất hiện ${count} lần`);
            break;
        case 7:
            let index = +prompt("Nhập vị trí bạn muốn thêm phần tử");
            let newElement = +prompt("Nhập phần tử mà bạn muốn thêm vào mảng: .");
            arr.splice(index, 0, newElement);
            break;
    }
    if (choice == 8) {
        break;
    } 
    else if (choice > 8) {
        console.log("Lựa chọn không phù hợp, vui lòng nhập lại.");
    }

}