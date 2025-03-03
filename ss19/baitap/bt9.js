let result = "javascript" + 5;
console.log(result); // javascript5
let result1 = "javascript" - 1; 
console.log(result1); // NaN
let result2 = "3" + 2;  
console.log(result2); // 32
let result3 = "5" - 4;
console.log(result3); // 1
let result4 = isNaN("123");
console.log(result4); // false
let result5 = isNaN("hello");
console.log(result5); // true
let result6 = Number.isNaN("123");
console.log(result6); // false
let result7 = Number.isNaN(NaN);
console.log(result7); // true
// Kết quả của biến result:
// result = "javascript" + 5; // javascript5
// result1 = "javascript" - 1; // NaN
// result2 = "3" + 2; // 32
// result3 = "5" - 4; // 1
// result4 = isNaN("123"); // false
// result5 = isNaN("hello"); // true
// result6 = Number.isNaN("123"); // false
// result7 = Number.isNaN(NaN); // true
// Kết luận:
// - Khi cộng chuỗi với số, kết quả sẽ là chuỗi.
// - Khi trừ chuỗi với số, kết quả sẽ là NaN.
// - Khi cộng chuỗi với chuỗi, kết quả sẽ là chuỗi.
// - Khi trừ chuỗi với chuỗi, kết quả sẽ là NaN.
// - isNaN() sẽ trả về true nếu giá trị truyền vào là NaN, false nếu không phải.
// - Number.isNaN() sẽ trả về true nếu giá trị truyền vào là NaN, false nếu không phải.
// - Number.isNaN() sẽ trả về false nếu giá trị truyền vào là chuỗi, true nếu không phải.
// - Number.isNaN() sẽ trả về false nếu giá trị truyền vào là số, true nếu không phải.
// - Number.isNaN() sẽ trả về false nếu giá trị truyền vào là undefined, true nếu không phải.
// - Number.isNaN() sẽ trả về false nếu giá trị truyền vào là null, true nếu không phải.
