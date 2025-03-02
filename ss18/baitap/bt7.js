let a = prompt("Nhap so a : ");
let b = prompt("Nhap so b : ");
let c = prompt("Nhap phep tinh : ");
switch (c) {
    case "+":
        alert(parseInt(a) + parseInt(b));
        break;
    case "-":
        alert(parseInt(a) - parseInt(b));
        break;
    case "*":
        alert(parseInt(a) * parseInt(b));
        break;
    case "/":
        alert(parseInt(a) / parseInt(b));
        break;
    default:
        alert("Phep tinh khong hop le");
        break
}