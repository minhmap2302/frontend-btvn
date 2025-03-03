let mon = prompt("Mời bạn nhập 1 tháng bất kì để xem số ngày trong tháng đó: ");
if(mon == 1 || mon == 3 || mon == 5 || mon == 7 || mon == 8 || mon == 10 || mon == 12){
    document.write("Tháng " + mon + "có 31 ngày" );
} else if (mon == 4 || mon == 6 || mon == 9 || mon == 11){
    document.write("Tháng " + mon + "có 30 ngày" );
} else if (mon == 2){
    document.write("Tháng " + mon + "có 28 hoặc 29 ngày" );
} else{
    document.write("Tháng bạn nhập không hợp lệ" );
}