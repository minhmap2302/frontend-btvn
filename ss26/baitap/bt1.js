function numbers(arr) {
    let count = 0;
    for(let i = 1;i<=10;i++){
        if(arr[i] % 1 != 0){
            console.log("Mảng không hợp lệ");
        } else if (arr == 0){
            console.log("mảng rỗng rồi");   
        }
        if (arr[i] >= 10){
            count = arr[i];
        }
        console.log("mảng chứa: "+count);
    }
}
let arr = [];
for (let i = 1;i<=10;i++){
    arr = prompt("Mời bạn nhập phần tử thứ: "+i);
}
numbers(arr);