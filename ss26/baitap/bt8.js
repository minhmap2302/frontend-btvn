function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
function filterPrimes(arr) {
    return arr.filter(num => isPrime(num) && num % 2 !== 0);
}
let arr = [];
let n = Number(prompt("Mời bạn nhập số phần tử: "));
for (let i = 0; i < n; i++) {
    let num = Number(prompt(`Mời bạn nhập số thứ ${i + 1}: `));
    arr.push(num); 
}
console.log("Mảng ban đầu:", arr);
console.log("Các số nguyên tố là số lẻ trong mảng:", filterPrimes(arr));
