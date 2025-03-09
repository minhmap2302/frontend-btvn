let arr = [];
let n = prompt("Chọn chuỗi bạn muốn nhập: ");
let count = 0;
if(n>0){
    for(let i = 1;i<=n;i++){
        arr = prompt("Mời bạn nhập phần tử thứ  ",i);
        if (arr / 1){
            document.writeln(arr);
        }
    }
} else {
    document.writeln("Không có kí tự số");
}