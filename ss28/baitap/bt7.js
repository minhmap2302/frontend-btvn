function select(arr) {
    for (let i = 0; i < arr.length; i++) {
        let sum = (students[i].scores.math + students[i].scores.literature + students[i].scores.english) / 3
        students[i].scores = sum;
       
    }
    let array = arr.filter((students) => students.scores >= 8);
    console.log(array);
    
}
let students = [
  { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature: 7 } },
  { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature: 5 } },
  { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature: 9 } },
];
select(students);