let m = prompt("Nhập số để tính số  fibonacci: ");
let temp;
if (m<=0){
    document.write("Số bạn nhập không hợp lệ");
}else {
    if (m==2){
        document.write("0,1");
    }else{
        let a = 0;
        let b = 1;
        document.write("0,1");
        do{
            temp = a + b;
            a = b;
            b = temp;
            document.write(","+temp);
        } while ((a+b) < m);
    }
}