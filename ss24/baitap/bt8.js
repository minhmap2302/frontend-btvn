let str = "";
let menu;
do {
    menu = parseInt(prompt("=========Menu=========\n1. Nhập chuỗi ký tự\n2. Hiển thị chuỗi ký tự\n3. Tìm tất cả các từ con trùng lặp trong chuỗi và số lần xuất hiện\n4. Tìm các từ có độ dài lớn nhất và nhỏ nhất trong chuỗi\n5. Tìm số lần xuất hiện nhiều nhất của các ký tự trong chuỗi\n6. Chuyển đổi chuỗi ký tự thành dạng snake_case\n7. Thoát chương trình"));
    switch (menu) {
        case 1:
            str = prompt("Nhập chuỗi ký tự:");
            break;
        case 2:
            console.log("Chuỗi ký tự vừa nhập:", str);
            break;
        case 3:
            let words = str.split(" ");
            let duplicate = [];
            for (let i = 0; i < words.length; i++) {
                let count = 1;
                for (let j = i + 1; j < words.length; j++) {
                    if (words[i] === words[j]) {
                        count++;
                    }
                }
                if (count > 1 && !duplicate.includes(words[i])) {
                    duplicate.push(words[i]);
                    console.log(`Từ ${words[i]} xuất hiện ${count} lần`);
                }
            }
            break;
        case 4:
            let words1 = str.split(" ");
            let maxLength = words1[0].length;
            let minLength = words1[0].length;
            let maxWords = [];
            let minWords = [];
            for (let i = 1; i < words1.length; i++) {
                if (words1[i].length > maxLength) {
                    maxLength = words1[i].length;
                }
                if (words1[i].length < minLength) {
                    minLength = words1[i].length;
                }
            }
            for (let i = 0; i < words1.length; i++) {
                if (words1[i].length === maxLength) {
                    maxWords.push(words1[i]);
                }
                if (words1[i].length === minLength) {
                    minWords.push(words1[i]);
                }
            }
            console.log(`Các từ có độ dài lớn nhất (${maxLength} ký tự):`, maxWords);
            console.log(`Các từ có độ dài nhỏ nhất (${minLength} ký tự):`, minWords);
            break;
        case 5:
            let char = str.split("");
            let maxCount = 0;
            let maxChar = [];
            for (let i = 0; i < char.length; i++) {
                let count = 1;
                for (let j = i + 1; j < char.length; j++) {
                    if (char[i] === char[j]) {
                        count++;
                    }
                }
                if (count > maxCount) {
                    maxCount = count;
                    maxChar = [char[i]];
                } else if (count === maxCount && !maxChar.includes(char[i])) {
                    maxChar.push(char[i]);
                }
            }
            console.log(`Số lần xuất hiện nhiều nhất (${maxCount} lần):`, maxChar);
            break;
        case 6:
            let snakeCase = str.split(" ").join("_");
            console.log("Chuỗi ký tự sau khi chuyển đổi:", snakeCase);
            break;
        default:
            break;
    }
}
while (menu != 7);