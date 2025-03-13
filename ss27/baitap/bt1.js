let choice;
let a, b;
while (choice!=5) {
  console.log("1. Cộng hai số");
  console.log("2. Trừ hai số");
  console.log("3. Nhân hai số");
  console.log("4. Chia hai số");
  console.log("5. Thoát");
  choice = +prompt("Nhập lựa chọn của bạn: ");
  switch (choice) {
    case 1:
      a = +prompt("Nhập a : ");
      b = +prompt("Nhập b :");
      console.log(a + b);
      break;
    case 2:
      a = +prompt("Nhập a : ");
      b = +prompt("Nhập b :");
      console.log(a - b);
      break;
    case 3:
      a = +prompt("Nhập a : ");
      b = +prompt("Nhập b :");
      console.log(a * b);
      break;
    case 4:
      a = +prompt("Nhập a : ");
      b = +prompt("Nhập b :");
      console.log(a / b);
      break;
      case 5:
          console.log("kết thúc");
          break;
      default:
            
  }
}