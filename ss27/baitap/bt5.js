function chiaMangThanhMangCon(mang, n) {
    if (n <= 0) {
      return [];
    }
    let ketQua = [];
    for (let i = 0; i < mang.length; i += n) {
      ketQua.push(mang.slice(i, i + n));
    }
    return ketQua;
  }
  
  
  let mang = [1, 2, 3, 4, 5, 6, 7, 8];
  let n = 2;
  
  console.log(chiaMangThanhMangCon(mang, n));