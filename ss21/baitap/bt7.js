let money = +prompt("Nhập vào số tiền gửi ngân hàng ban đầu: ");
let rate = +prompt("Nhập vào lãi suất tháng: ");
let month = +prompt("Nhập vào số tháng gửi tiền: ");
let total = money;
let moneyRate = 0;
for (let i = 1;i<=month;i++){
    total = total + total * rate / 100;
    moneyRate = total - money;
}
document.write("Số tiền lãi là: " +moneyRate.toFixed(2));
document.write("<br>");
document.write("Tổng số tiền sau " +month+ " tháng là: " +total);

