let n = prompt("Nhập vào một số: ");
let temp = 0;
let arr = n.split("");
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[arr.length - i - 1]) {
        temp++;
    }
}
if (temp == arr.length) {
    document.write("Số bạn nhập là số đối xứng");
} else {
    document.write("Số bạn nhập không phải là số đối xứng");
}

