let str = prompt("Mời bạn nhập 1 chuỗi bất kì: ");
str = str.toLowerCase();
let newstring = str.charAt(0).toUpperCase()+str.slice(1);

document.write("chuỗi viết hoa là: ",newstring);