function Number(arr) {
    let max = 0;
    let maxindex = 0;
    for(let index in arr){
        if(arr[index] > max){
            max = arr[index];
            maxindex = index;
        }
    }
    console.log(`Số lớn nhất là ${max}:arr[${maxindex}]`);
}
let arr = [];
let n = prompt("Mời bạn nhập số phần tử: ");
for (let i = 1; i <= n; i++) {
    let num = prompt(`Mời bạn nhập số thứ ${i}: `);
    arr.push(num); 
}
Number(arr);