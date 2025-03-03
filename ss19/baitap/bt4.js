let n = prompt("Mời bạn nhập một số để kiểm tra: ");
if (n % 3 == 0 && n % 5 == 0){
    document.write("Số bạn nhập là số chia hết cho cả 3 và 5");
} else {
    document.write("Số bạn nhập không phải là số chia hết cho cả 3 và 5");
}