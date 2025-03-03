let n = prompt("Mời bạn nhập 1 chuỗi kí tự để kiểm tra: ");
let m = 0;
for (let i = 0;i<n.length;i++){
    if(n[i] == " "){
        m++;
    }
}
if(m == 0){
    document.write("Chuỗi bạn nhập không có khoảng trắng");
}else{
    document.write("Chuỗi bạn nhập có " + m + " khoảng trắng");
}   