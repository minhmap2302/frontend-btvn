let choice;
let a, b, r;
let result;
while (choice != 5) {
  console.log("1. Tính diện tích hình tròn");
  console.log("2. Chu vi hình tròn");
  console.log("3. Diện tích hình chữ nhật");
  console.log("4. Chu vi hình chữ nhật");
  choice = +prompt("Nhập lựa chọn của bạn : ");
  switch (choice) {
    case 1:
      r = +prompt("Nhập bán kính hình tròn: ");
      result = r * r * 3.14;
      console.log(result);
      break;
    case 2:
      r = +prompt("Nhập bán kính hình tròn: ");
      result = 2 * 3.14 * r;
      console.log(result);
      break;
    case 3:
      a = +prompt("Nhập chiều dài cho hình chữ nhật :");
      b = +prompt("Nhập chiều rộng cho hình chữ nhật: ");
      result = a * b;
      console.log(result);
      break;
    case 4:
      a = +prompt("Nhập chiều dài cho hình chữ nhật :");
      b = +prompt("Nhập chiều rộng cho hình chữ nhật: ");
      result = 2 * (a + b);
      console.log(result);
          break;
      
  }
}