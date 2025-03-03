let mon = prompt("Mời bạn nhập tháng để kiểm tra mùa: ");
if (mon == 1 || mon == 2 || mon == 3){
    document.write("Tháng bạn nhập là mùa xuân");
} else if (mon == 4 || mon == 5 || mon == 6){
    document.write("Tháng bạn nhập là mùa hạ");
} else if (mon == 7 || mon == 8 || mon == 9){
    document.write("Tháng bạn nhập là mùa thu");
} else if (mon == 10 || mon == 11 || mon == 12){
    document.write("Tháng bạn nhập là mùa đông");
} else {
    document.write("Tháng bạn nhập không hợp lệ");
}