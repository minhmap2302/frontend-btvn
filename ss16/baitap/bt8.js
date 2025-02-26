let num1 = prompt("moi ban nhap so thứ 1: ");
let num2 = prompt("moi ban nhap so thu 2: ");
let num3 = prompt("moi ban nhap so thu 3: ");
let max = num1;
if(max < num2){
    max = num2;
}
if (max < num3){
    max =num3;
}
document.write("số lớn nhất là: ",max);