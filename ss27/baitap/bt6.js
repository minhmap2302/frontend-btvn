function check(arr) {
    let num = arr[1] - arr[0    ];
    let count = 0;
    for (let i = 0; i < arr.length-1; i++) {
        if ((arr[i + 1] - arr[i]) != num) {
            count++;      
        }
    }
    if (count === 0) {
        console.log("Đây là cấp số cộng");   
    }
    else {
        console.log("Đây không là cấp số cộng"); 
    }
}
let case1 = [1, 2, 3, 4, 5];
let case2 = [2, 4, 6,8,10];
let case3 = "abc";
check(case1);
check(case2);
check(case3);

