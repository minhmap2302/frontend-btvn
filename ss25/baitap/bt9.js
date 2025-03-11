function signin(user) {
    let str = prompt("Mời bạn nhập vào tài khoản để đăng kí: ");
    if(str.includes(".com") && str.includes("@") || str.includes(".vn") && str.includes("@")){
        let count = 0;
        for(let i = 0;i<str.length;i++){
            if(str = email[i]){
                console.log("trùng rồi!");
                count=-1;
            }
        }
        if(count == 0){
            console.log("dingdong");
        }
        console.log(str);
    }
}
let email = ["minh123@gmail.com","minhmap@gmail.com"];
signin(user);