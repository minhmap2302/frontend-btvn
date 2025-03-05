let day = +prompt("Nhập vào ngày: ");
let month = +prompt("Nhập vào tháng: ");
if (month === 1) {
    if (day <= 19) {
         document.write( "Ma Kết");
    } else {
        document.write("Bảo Bình");
    }
} else if (month ===2){
    if (day <= 18) {
        document.write("Bảo Bình");
    } else {
        document.write("Song Ngư");
    }
} else if (month === 3){
    if (day <= 20) {
        document.write("Song Ngư");
    } else {
        document.write("Bạch Dương");
    }
}else if (month === 4){
    if (day <= 19) {
        document.write("Bạch Dương");
    } else {
        document.write("Kim Ngưu");
    }
}else if (month === 5){
    if (day <= 20) {
        document.write("Kim Ngưu");
    } else {
        document.write("Song Tử");
    }
}else if (month === 6){
    if (day <= 21) {
        document.write("Song Tử");
    } else {
        document.write("Cự Giải");
    }
}else if (month === 7){
    if (day <= 22) {
        document.write("Cự Giải");
    } else {
        document.write("Sư Tử");
    }
}else if (month === 8){
    if (day <= 22) {
        document.write("Sư Tử");
    } else {
        document.write("Xử Nữ");
    }
}else if (month == 9){
    if (day <= 22) {
        document.write("Xử Nữ");
    } else {
        document.write("Thiên Bình");
    }
}else if (month === 10){
    if (day <= 23) {
        document.write("Thiên Bình");
    } else {
        document.write("Bọ Cạp");
    }
}else if (month === 11){
    if(day <=22){
        document.write("Bọ Cạp");
    }else{
        document.write("Nhân Mã");
    }
}else if (month === 12){
    if(day <=21){
        document.write("Nhân Mã");
    }else{
        document.write("Ma Kết");
    }
}