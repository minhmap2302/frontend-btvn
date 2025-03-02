let math = prompt("Nhập vào một số: ");
let english = prompt("Nhập vào một số: ");
let physic = prompt("Nhập vào một số: ");
let point = (math + english + physic) / 3;
if (point >= 8.0) {
    document.write("Học lực: Giỏi");
} else if (point >= 6.5 || point <=7.9){
    document.write("Học lực: Khá");
}else if (point >= 5.0 || point <=6.4){
    document.write("Học lực: Trung bình");
}
else if (point <5.0) {
    document.write("Học lực: Yếu");
} else {
    document.write("Nhập sai");
}