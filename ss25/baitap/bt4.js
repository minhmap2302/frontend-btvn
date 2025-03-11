function numbers(n) {
    if (n < 2) return false; 
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
let a = +prompt("Mời bạn nhập 1 số để kiểm tra: ");
console.log(numbers(a));