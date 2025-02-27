let r = +prompt("Nhập bán kính: ");
let h = +prompt("Nhập chiều cao: ");

let Sxq = 2 * Math.PI * r * h;
let Stp = 2 * Math.PI * r * (r + h);
let V = Math.PI * Math.pow(r, 2) * h;

document.write(
    "Diện tích xung quanh hình trụ là: " + Sxq + "<br>" +
    "Diện tích toàn phần hình trụ là: " + Stp + "<br>" +
    "Thể tích hình trụ là: " + V
);