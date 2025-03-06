let arr = [];
let a;
let count = prompt("Mời bạn nhập số lần lặp");
for(let i = 0; i < count; i++){
    a = prompt("Nhập số thứ " + (i +1));
    arr.push(a);
}
document.write("Mang trứoc khi đảo: " + arr + "<br>");
arr.reverse(arr);
document.write("Mang sau khi đảo: " + arr);
