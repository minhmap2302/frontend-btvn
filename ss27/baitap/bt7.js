function find(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] % 1 != 0) {
            console.log("Dữ liệu không hợp lệ");
          
      } else {
        if (arr[i + 1] - arr[i] != 1) {
          console.log(arr[i + 1] - 1);
        }
      }
    }
  }
  let case1 = [1, 2, 3, 5, 6, 7];
  let case2 = [9, 10, 11, 13, 14];
  let case3 = "abc";
  find(case1);
  find(case2);
  find(case3);