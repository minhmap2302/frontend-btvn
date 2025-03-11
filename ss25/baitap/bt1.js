function numbers(num) {
    let min = num[0];
    for (let i = 0;i<num.length;i++){
            if (num[i]<min){
                min = num[i];
            }
    }
    console.log("số nhỏ nhất là :"+min);
    
}
let num = [2,4,8,1,9,100,46,7,12];
numbers(num);
