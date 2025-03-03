let a = prompt("Mời bạn nhập một số a của hệ phương trình: ");
let b = prompt("Mời bạn nhập một số b của hệ phương trình: ");
let c = prompt("Mời bạn nhập một số c của hệ phương trình: ");
let sum = b^2 - 4*a*c;
if(sum < 0){
    document.write("Phương trình vô nghiệm");
} else if (sum == 0){
    let x = -b/(2*a);
    document.write("Phương trình có nghiệm kép x1 = x2 = " + x);
} else if (sum > 0){
    let x1 = (-b+ Math.sqrt(sum))/(2*a);
    let x2 = (-b- Math.sqrt(sum))/(2*a);
    document.write("Phương trình có 2 nghiệm phân biệt x1 = " + x1 + " và x2 = " + x2);
}