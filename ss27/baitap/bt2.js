let choice
let arr = [];
let n;
while (choice != 5) {
    console.log("1. Nhập danh sách sinh viên,");
    console.log("2. Hiển thị danh sách sinh viên");
    console.log("3. Tìm sinh viên theo tên");
    console.log("4. Xóa sinh viên ")
    console.log("5. Thoát");
    choice = +prompt("Nhập lựa chọn của bạn:");
    switch (choice) {
        case 1:
            n = +prompt("Nhập số lượng sinh viên bạn muốn thêm vào: ")
            arr = new Array(n);
            for (let i = 0; i < n; i++) {
                arr[i] = prompt(`Nhập tên sinh viên ${i} : `);
            }
            break;
        case 2:
            for (let name of arr) {
                console.log(name);
            }
            break;
        case 3:
            let count = 0;
            let name = prompt("Nhập tên sinh viên bạn muốn tìm kiếm");
            for (let i = 0; i < n; i++) {
                if (arr[i].includes(name)) {
                    console.log(arr[i]);
                    count++;
                } 
            }
            if (count == 0) {
                console.log("Không tồn tại sinh viên");
                
            }
            break;
        case 4:
            let Count = 0;
            let dltName = prompt("Nhập tên sinh viên bạn muốn xóa");
            for (let i = 0; i < n; i++) {
                if (arr[i].includes(dltName)) {
                    arr.splice(i, 1);
                    Count++;
                    break;
                    
                } 
            }
            if (Count == 0) {
                console.log("Không tồn tại sinh viên");
                
            }
            break;
    }
}