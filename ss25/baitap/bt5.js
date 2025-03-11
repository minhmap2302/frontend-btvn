function numbers(arr) {
    let count = 0;
    for(let i = 0;i<arr.length;i++){
        if ( arr[i]>0){
            count++;
        }
    }
    console.log("số lượng là: "+count);
}
let arr = [1,2,3,4,-1,-2,-3];
numbers(arr);