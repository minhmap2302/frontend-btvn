function sum(a,b) {
    if (a % 1 != 0 || b % 1 != 0){
        document.writeln("KHông hợp lệ!");
    } else {
        sum = a + b;
        console.log(sum);
        
    }
}
let a = +prompt("Mơi fbanj nhập số thứ nhất : ");
let b = +prompt("Mời bạn nhập số thứu hai: ");
sum(a,b)