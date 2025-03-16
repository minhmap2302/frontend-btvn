const employees = [];
let count = 0;
let choice;
while (choice != 5) {
  console.log("1. Thêm nhân viên");
  console.log("2. Xóa nhân viên theo ID");
  console.log("3. Cập nhật mức lương của nhân viên theo ID");
  console.log("4. Tìm kiếm nhân viên theo tên");
  choice = +prompt("Nhập lựa chọn của bạn: ");
  switch (choice) {
    case 1:
      const newEmployees = {
        id: count + 1,
        name: prompt("Nhâp tên nhân viên bạn muốn thêm: "),
        position: prompt("Nhập vị trí công việc cho nhân viên: "),
        salary: +prompt("Nhập số tiền lương cho nhân viên: "),
      };
      employees.push(newEmployees);
      count++;
      console.table(employees);

      break;
    case 2:
      deleteID = +prompt("Nhập ID nhân viên bạn muốn xóa: ");
      if (deleteID > count) {
        console.log("Khôn tồn tại nhân viên ");
      } else {
        employees.splice(deleteID - 1, 1);
        console.table(employees);
      }
      break;
    case 3:
      updateID = +prompt("Nhập ID nhân viên bạn muốn thay đổi: ");
      if (updateID > count) {
        console.log("Không tồn tại nhân viên ");
      } else {
        employees[updateID - 1].salary = +prompt(
          "Nhập mức lương mới cho nhân viên: "
        );
        console.table(employees);
      }
      break;
    case 4:
      let nameSearch = prompt(
        "Nhập tên nhân viên bạn muốn tìm: "
      ).toLowerCase();
      let foundEmployees = employees.filter((emp) =>
        emp.name.toLowerCase().includes(nameSearch)
      );
           console.table(foundEmployees);
      break;
  }
}