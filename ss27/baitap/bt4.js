let choice;
let arr = [];
let n;
let result;
while (choice != 5) {
  console.log("1. Nhập danh sách số nguyên");
  console.log("2. Tính trung bình các số");
  console.log("3. Tìm số chẵn lớn nhất");
  console.log("4. Tìm số lẻ nhỏ nhất");
  console.log("5. Thoát");
  choice = +prompt("Nhập lựa chọn của bạn: ");
  switch (choice) {
    case 1:
      n = prompt("Nhập độ dài cho mảng");
      for (let i = 0; i < n; i++) {
        while (arr[i] % 1 != 0) {
          arr[i] = +prompt(`Nhập số nguyên cho arr[${i}]`);
          if (arr % 1 != 0) {
            console.log("Khổng phải số nguyên");
          }
        }
      }
      console.log(arr);
      break;
    case 2:
      result;
      result = arr.reduce((a, b) => a + b, 0);
      console.log(result / n);
      break;
      case 3:
          result = arr.filter((a) => a % 2 == 0).reduce((a, b) => (a > b ? a : b), arr.filter((a) => a % 2 == 0)[0]);
          console.log(result);
          break;
      case 4:
          result = arr
              .filter((a) => a % 2 == 1)
              .reduce(
                  (a, b) => (a > b ? a : b),
                  arr.filter((a) => a % 2 == 1)[0]
          );
          console.log(result);
          
          break;
          
  }
}