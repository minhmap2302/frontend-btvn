let year = prompt("Nhap nam bat ki : ");
if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            document.write("Nam nhuan");
        } else {
            document.write("Khong phai nam nhuan");
        }
    } else {
        document.write("Nam nhuan");
    }
}
else {
    document.write("Khong phai nam nhuan");
}