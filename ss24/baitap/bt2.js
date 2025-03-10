let arr = [];
let n;
while (1) {
    console.log("======================MENU===================");
    console.log("1. Nhập số phần tử cần nhập và giá trị của các phần tử. ");
    console.log("2. In ra giá trị các phần tử đang quản lý.");
    console.log("3. Tìm các phần tử chẵn và lẻ");
    console.log("4. Tính trung bình cộng của mảng");
    console.log("5. Xóa phần tử tại vị trí chỉ định");
    console.log("6. Tìm phần tử lớn thứ hai trong mảng")
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
            let chan = 0;
            let le = 0;
            for (let index in arr){
                (arr[index] % 2 ==0) ? chan++ : chan;
                (arr[index] % 2 !=0) ? le++ : le;
            }
            console.log("Số chẵn là: " +chan);
            console.log("Số lẻ là: " +le);
            break;
        case 4:
            let sum = 0;
            for (let index in arr){
                sum = (sum + arr[index]) / 2;
            }
            console.log("Trung bình cộng là: "+sum);
            break;
        case 5:
            let m = prompt("Mời bạn nhập vị trí bạn muốn xóa phần tử: ");
            arr.splice(m,1);
            console.log("Đã xóa thành công");
            break;
        case 6:
            let maxIndex;
            let max = 0;
            let maxsc = 0;
            for(let index in arr){
                if(arr[index]> max){
                    max = arr[index];
                    maxIndex = index;
                }
            }
            arr[maxIndex] = 0;
            max = arr[0];
            for (let num in arr){
                if (num>maxsc){
                    maxsc = num;
                }
            }
            console.log("Số lớn thứ 2 là: "+maxsc);
            
            break;
        default:
            break;
    }
    if(choice==0 || choice >=7){
        break;
    }
}