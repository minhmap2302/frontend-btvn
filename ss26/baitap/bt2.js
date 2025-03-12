function fruit(str) {
    let m = 0;
    let n = prompt("Nhập số phần tử của mảng: ");
    let arr= [];
    for(let i = 1;i<=n;i++){
        arr = prompt("Mời bạn nhập 1 mảng chuỗi,Phần tử thứ "+i+"là: ");
        if(Array.isArray(arr)==false){
            console.log("Lỗi mảng");
        }else if(arr.length==0){
            console.log("mảng rỗng");
        }   
    }
}
console.log(arr);
let arr1 = arr.filter((name) =>name.length>5);
console.log(arr1);

