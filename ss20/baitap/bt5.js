let a = prompt("Nhập vào một số: ");
let b = prompt("Nhập vào một số: ");
let result = a;
for(let i = 0;i < b-1;i++){
    result = result * a;
}
document.write(result);