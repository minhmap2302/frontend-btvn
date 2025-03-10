let arr = [];
let n;
while (1) {
    console.log("======================MENU===================");
    console.log("1. Nhập số phần tử cần nhập và giá trị của các phần tử. ");
    console.log("2. In ra giá trị các phần tử đang quản lý.");
    console.log("3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó");
    console.log("4. Tính tổng và trung bình cộng của các số dương trong mảng");
    console.log("5. Đảo ngược mảng");
    console.log("6. Kiểm tra mảng có đối xứng không")
    console.log("7. Thoát.");
    let choice = +prompt("Nhập lựa chọn của bạn: ");
    switch (choice) {
        case 1:
            n = +prompt("Mời bạn nhập số lượng phần tử : ");
            arr = new Array(n);
            for(let i = 1;i<=n;i++){
                arr[i] = +prompt("Mời bạn nhập phần tử thứ " + i + "là: ");
            }
            console.log("đã lưu mảng thành công");
            break;
        case 2:
            console.log("Mảng là: ");
            for (let index in arr) {
                console.log(arr[index]);
            }
            break;
        case 3:
            let maxIndex;
            let max = 0;
            for(let index in arr){
                if(arr[index]> max){
                    max = arr[index];
                    maxIndex = index;
                    
                }
            }
            console.log(`Số lớn nhất là ${max}:arr[${maxIndex}]`);
            break;
        case 4:
            let  sum = 0;
            let tbc = 0;
            for (let index in arr){
                sum = arr[index]+sum;
                tbc = sum / n;
            }
            console.log("tổng là: "+sum);
            console.log("TBC là: "+tbc);
            
            break;
        case 5:
            console.log(arr.reverse());
            break;
        case 6:
            let count = 0;
            for(let i = 0;i<n/2;i++){
                arr[i] != arr[n-i-1]?count++:count;
            }
            count == 0 ? console.log("đây là mảng đối xứng"):console.log("đây không phải mảng đối xứng");
            break;
        default:
            break;
    }
    if(choice==0 || choice >=7){
        break;
    }
}