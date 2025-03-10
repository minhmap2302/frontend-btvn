let arr = [];
let n;
while (1) {
    console.log("======================MENU===================");
    console.log("1. Nhập số phần tử cần nhập và giá trị của các phần tử. ");
    console.log("2. In ra giá trị các phần tử đang quản lý.");
    console.log("3. In ra các giá trị lớn nhất, nhỏ nhất.");
    console.log("4. tính tổng.");
    console.log("5. Nhập một số và đếm số lần xuất hiện trong mảng.");
    console.log("6. Sắp xếp mảng theo thứ tự tăng dần.")
    console.log("7. Thoát.");
    let choice = +prompt("Nhập lựa chọn của bạn: ");
    switch (choice) {
        case 1:
            n = +prompt("Mời bạn nhập số lượng phần tử : ");
            arr = new Array(n);
            for(let i = 1;i<=n;i++){
                arr[i] = +prompt("Mời bạn nhập phần tử thứ " + i + "là: ");
            }
            console.log("đã lưu mảng thành công");
            break;
        case 2:
            console.log("Mảng là: ");
            for (let index in arr) {
                console.log(arr[index]);
            }
            break;
        case 3:
            let maxIndex;
            let max = arr[0];
            let min = arr[0];
            let minIndex;
            for (let index in arr) {
                if (arr[index] > max) {
                    max = arr[index];
                    maxIndex = index;
                }
                if (arr[index] < min) {
                    min = arr[index];
                    minIndex = index;
                }
            }
            console.log(`Số lớn nhất là ${max}:arr[${maxIndex}]`);
            console.log(`Số nhỏ nhất là ${min}:arr[${minIndex}]`);
            break;
        case 4:
            let sum = 0;
            for (let index in arr){
                sum = arr[index] + sum;
            }
            console.log("Tổng của những số đó là : "+sum);
        case 5:
            let number = +prompt("Nhập một số bất kì để kiểm tra: ");
            let count = 0;
            for (let num of arr) {
                num == number ? count++ : count;
            }
            console.log(`Số ${number} xuất hiện ${count} lần`);
            break;
        case 6:
            console.log(arr.sort((a, b) => a - b));
            break;
        default:
            break;
    }
    if(choice==0 || choice >=7){
        break;
    }
}