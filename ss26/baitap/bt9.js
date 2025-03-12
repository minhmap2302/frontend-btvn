let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,];
let even = arr.filter((num) => num % 2 == 0);
let odd = arr.filter((num) => num % 2 == 1);
let evenSum = even.reduce((acc, curr) => acc + curr, 0);
let oddSum = odd.reduce((acc, curr) => acc + curr, 0);
console.log("totalEven = "+evenSum);
console.log("totalOdd = "+oddSum);
