let number = prompt("Nhap so nam kinh nghiem cua nhan vien : ");
if (number < 1) {
    document.write("Moi vao nghe");
}
else if (number < 4) {
    document.write("Nhan vien co kinh nghiem");
}
else if (number < 7) {
    document.write("Chuyen vien");
}
else {
    document.write("Quan ly");
}