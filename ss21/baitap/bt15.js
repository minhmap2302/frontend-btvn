let money = +prompt("Nhập vào số tiền cần rút: ");
let namtram = 0;
let haitram = 0;
let mottram = 0;
let namchuc = 0;
let haimuoi = 0;
let muoi = 0;
if (money % 1000 != 0) {
    document.write("Số tiền bạn nhập không hợp lệ");
} else {
    while (money >= 500000) {
        money -= 500000;
        namtram++;
    }
    while (money >= 200000) {
        money -= 200000;
        haitram++;
    }
    while (money >= 100000) {
        money -= 100000;
        mottram++;
    }
    while (money >= 50000) {
        money -= 50000;
        namchuc++;
    }
    while (money >= 20000) {
        money -= 20000;
        haimuoi++;
    }
    while (money >= 10000) {
        money -= 10000;
        muoi++;
    }
}
document.write("Số tiền bạn rút được: " + namtram + " tờ 500.000k" );
document.write("<br>");
document.write("Số tiền bạn rút được: " + haitram + " tờ 200.000k");
document.write("<br>");
document.write("Số tiền bạn rút được: " + mottram + " tờ 100.000k");
document.write("<br>");
document.write("Số tiền bạn rút được: " + namchuc + " tờ 50.000k");
document.write("<br>");
document.write("Số tiền bạn rút được: " + haimuoi + " tờ 20.000k");
document.write("<br>");
document.write("Số tiền bạn rút được: " + muoi + " tờ 10k");


