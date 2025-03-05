let n = +prompt("Nhập vào số n bất kì để tìm tất cả ước của số đó: ");
for (let i = 0; i <n;i++){
    if (n % i == 0){
        document.write("Các ước của " +n+ " là: " +i +"<br>");
    }
}
