let arr = [2,5,7,4,1,8,6,2,5,7];
let count = 0;
alert(arr);
let num = prompt("Mời bạn nhập phần tử bạn muốn đếm: ");
for (let i = 0;i<arr.length;i++){
    if (num == arr[i]){
        count++;
        break;
    }else{
        document.write("số không tồn tại trong mảng");
        break;
    }
}
document.write("Số lần xuấ hiện của" + num + "đó là:" +count);
