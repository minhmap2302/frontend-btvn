let arr = [1,2,3,4,5,6,7,8,9,10];
let a = 0;
let b = 0;
for (let i = 0;i<arr.length;i++){
    if (arr[i] % 2 == 0){
        a = a + arr[i];
    } else {
        b = b + arr[i];
    }
}
document.write("tổng của số chẵn là: " +a);
document.write("Tổng của số lẻ là: " +b);