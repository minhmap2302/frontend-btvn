let r = +prompt("Nhập bán kính: ");
let V = 4 / 3 * Math.PI * Math.pow(r, 3);
let S = 4 * Math.PI * Math.pow(r, 2);
let C = 2 * Math.PI * r;
document.write("Thể tích hình cầu là: " , V , "<br>","Diện tích bề mặt hình cầu là: " , S , "<br>","Chu vi hình cầu là: " ,C);