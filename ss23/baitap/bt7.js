let n = +prompt("Nhập số phần tử trong chuỗi: ");
let result = 0;
if (n > 0) {
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = prompt("nhập phần tử cho mảng: ");
    }
    let max = 0;
let maxIndex
    for (let index in arr) {
        if (arr[index] > max) {
            max = arr[index];
            maxIndex = index;
        }
    }
    arr[maxIndex] = 0;
    max=0
    for (let num of arr){
        if (num > max) {
            max = num;
        }
    }
    document.write(max);
}
else if (n == 0) {
    document.write("không có ký tự số");
}
else {
    document.write("độ dài không hợp lệ");
} 