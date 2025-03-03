let vnd;
let usd;
let choose = prompt("Mời bạn chọn chức năng đổi tiền:  1.Đổi từ VNĐ sang USD  2.Đổi từ USD sang VNĐ");
if("1" == choose){
    vnd = prompt("Mời bạn nhập số tiền VNĐ cần đổi: ");
    usd = vnd / 23000;
    document.write("Số tiền USD bạn nhận được là: " + usd + " USD");
} else if ("2" == choose){
    usd = prompt("Mời bạn nhập số tiền USD cần đổi:");
    vnd = use * 23000;
    document.write("Số tiền VNĐ bạn nhận được là: " + vnd + " VNĐ");
} else{
    document.write("Chức năng bạn chọn không hợp lệ");
}