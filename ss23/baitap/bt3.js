let arr = [];
let n = prompt("Mời bạn nhập số phần tử muốn thêm vào: ");
let count = 0;
if (n>0){
    for(let i = 1;i<=n;i++){
        arr = +prompt("Mời bạn nhập phần tử thứ: "+i);
        if(arr < 0){
            count = count + 1;
        }
    }
    console.log(count);
} else if (n==0) {
    console.log("Không có phần tử");
} else {
    console.log("Số phần tử không hợp lệ");    
}
