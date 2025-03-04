let str = prompt("Nhập vào một chuỗi: ");
let word = prompt("Nhập vào từ cần tìm: ");
let count = 0;
let index = str.indexOf(word);
if (index == -1) {
    document.write("Từ " + word + " không xuất hiện trong chuỗi ");
} else {
    while (index != -1) {
        count++;
        index = str.indexOf(word, index + 1);
    }
    document.write("Từ " + word + " có xuất hiện trong chuỗi ");
}
