let n = 0;
let m = 0;
for(let i = 1;i<=5;i++){
    let num = +prompt("Nhập vào số" +i+ " : ");
    if (num % 2 != 0){
        m++;
    } else if (num % 2 == 0){
        n++;
    } else {
        document.write("Số bạn nhập không hợp lệ");
    }
}
document.write("Số lẻ là: " +m +"<br>");
document.write("Số chẵn là: " +n);