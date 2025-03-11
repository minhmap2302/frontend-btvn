function isPalidrome(str) {
    let m = str.length - 1;
    for (let i = 0;i<str.length / 2;i++){
        if(str[i] != str[m]){
            console.log(("Khong là mảng đối xứng"));
        }
        m--;
    }
    console.log("Là mảng đối xứng")
}
let str = prompt("Mời bạn nhập 1 chuỗi");
isPalidrome(str);