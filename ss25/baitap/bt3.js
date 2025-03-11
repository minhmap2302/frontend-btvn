function even(arr) {
    for (let i = 0;i< arr.length;i++){
        if(arr[i]%1 == 0 && arr[i]%2==0){
            console.log("trong mảng có số chẵn là:" + arr[i] );
        }
    }
}
let arr = [1,2,3,4,5,6,7,8,9,10];
even(arr);