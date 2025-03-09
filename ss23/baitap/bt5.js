let arr = [];
let n = prompt("Chọn chuỗi bạn muốn nhập: ");
let count = 0;
if(n>0){
    for(let i = 1;i<=n;i++){
        arr = +prompt("Mời bạn nhập phần tử thứ  ",i);
        if (arr / 1){
            count = arr + count;
        }
    }
    document.writeln("Tổng là: "+count);
} else if (n==0) {
    document.writeln("Không có kí tự");
} else {
    document.writeln("Số lượng phần tử không được âm");
}