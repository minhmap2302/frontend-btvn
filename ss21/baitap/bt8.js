let a = prompt("Nhập vào số a để tính số Armstrong: ");
let b = a;
let sum = 0;
let count = 0;
while (a > 0) {
    a = parseInt(a / 10);
    count++;
}
a = b;
while (a > 0) {
    sum += Math.pow(a % 10, count);
    a = parseInt(a / 10);
}
if (sum == b) {
    document.write("Số bạn nhập là số Armstrong");
} else {
    document.write("Số bạn nhập không phải là số Armstrong");
}