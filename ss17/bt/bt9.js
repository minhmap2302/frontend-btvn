let a = prompt("Mời bạn nhập số a của pt: ");
let b = prompt("Mời bạn nhập số b: ");
let c = prompt("Mời bạn nhập số c");
let denta = Math.pow(b,2)-4*a*c;
let num1 = (-b+Math.sqrt(denta))/2*a;
let num2 = (-b-Math.sqrt(denta))/2*a;
document.write(num1,"và",num2);