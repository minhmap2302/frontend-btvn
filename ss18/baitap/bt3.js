let a = prompt("Mời bạn nhập tên để đăng nhâp: ");
let b = 0;
if (a == "Admin") {
    let c = prompt("Mời bạn nhập mật khẩu: ");
    if (c == "TheMaster") {
        document.write("Welcome");
    } else if (c == "") {
        document.write("Canceled");
    } else {
        document.write("Wrong password");
    }
} else if (a == "") {
    document.write("Canceled");
} else {
    document.write("I don't know you");
}