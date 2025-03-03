let n = prompt("Mời bạn nhập 1 kí tự để kiểm tra: ");
let minh = /^[a-zA-Z]+$/.test(n);
if(minh){
    document.write("Kí tự bạn nhập là chữ cái" );
} else{
    document.write("Kí tự bạn nhập không phải là chữ cái" );
}