function sortEvenNumbers(arr) {
    let evenNumbers = arr.filter(num => num % 2 === 0).sort((a, b) => a - b);
    let index = 0;

    return arr.map(num => (num % 2 === 0 ? evenNumbers[index++] : num));
}

let arr = [5, 3, 2, 8, 1, 4];
console.log(sortEvenNumbers(arr));
