let money = +prompt("Nhap so tien ban muon gui");
let month = +prompt("Nhap so thang ban muon gui");
let rate = Math.floor(month / 12);
document.write("tien lai của bạn là : ",money*rate*4.3/100,"vnd");