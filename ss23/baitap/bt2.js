let arr = [1,4,5,3,11,7,8,9];
let max = arr[0];
let index = 0;
for(let i = 0;i < arr.length;i++){
    if (arr[i]> max){
        max = arr[i];
        index = i;
    }
}
document.writeln("Số lớn nhất là " + max +"ở vị trí thứ: " + index );