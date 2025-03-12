function signin(emailList) {
    let str = prompt("Mời bạn nhập vào tài khoản để đăng kí: ");
    if ((str.includes(".com") || str.includes(".vn")) && str.includes("@")) {
        if (emailList.includes(str)) {
            console.log("trùng rồi!");
            return;
        }
        console.log("dingdong");
        emailList.push(str);
    } else {
        console.log("Email không hợp lệ!");
    }
}

let email = ["minh123@gmail.com", "minhmap@gmail.com"];
signin(email);
