let n = 0;
let temp = 0;
for(let i = 1;i<=5;i++){
    n = +prompt("Nhập vào số" +i+ " : ");
    if (n % 2 != 0){
        temp = n+temp;
    }
}
document.write("Tổng các số lẻ là: " +temp);