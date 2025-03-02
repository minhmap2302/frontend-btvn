let a = prompt("Nhap canh a : ");
let b = prompt("Nhap canh b : ");
let c = prompt("Nhap canh c : ");
if (a == b && b == c) {
    document.write("Tam giac deu");
}
else if (a == b || b == c || a == c) {
    document.write("Tam giac can");
}
else if (a * a + b * b == c * c || a * a + c * c == b * b || b * b + c * c == a * a) {
    document.write("Tam giac vuong");
}
else {
    document.write("Tam giac thuong");
}