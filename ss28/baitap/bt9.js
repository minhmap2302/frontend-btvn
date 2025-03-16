let book = [];
let choice;
while (choice != 7) {
  console.log("1. Thêm sách mới");
  console.log("2. Hiển thị sách theo tiêu đề");
  console.log("3. Tìm kiếm sách theo tiêu đề");
  console.log("4. Cập nhật trạng thái mượn/trả sách theo id sách");
  console.log("5. Xóa sách theo id sách ra khỏi danh sách");
  console.log("6. Sắp xếp sách theo giá tăng dần");
  choice = +prompt("Nhập lựa chọn của bạn: ");
  switch (choice) {
    case 1:
      const newBook = {
        id: +prompt("Nhập id cho sách bạn muốn thêm: "),
        title: prompt("Nhập tên sách: "),
        author: prompt("Nhập tên tác giả: "),
        year: +prompt("Nhập năm xuất bạn: "),
        price: +prompt("Nhập giá sách: "),
        isAvailable: +prompt("Nhập trạng thái ( 0 / 1 ) : "),
      };
      book.push(newBook);
      break;
    case 2:
      console.table(book);
      break;
    case 3:
      nameSearch = prompt("Nhập tên sách bạn muốn tìm kiếm: ").toLowerCase();
      let hihii = book.filter((nb) =>
        nb.title.toLowerCase().includes(nameSearch)
      );
      if (hihii.length > 0) {
        console.table(hihii);
      } else {
        console.log("Không tồn tại");
      }
      break;
    case 4:
      idSearch = +prompt("Nhập id sách bạn muốn cập nhật: ");
      for (let i = 0; i <= book.length; i++) {
        if (book[i].id === idSearch) {
          book[i].isAvailable = +prompt("Nhập trạng thái ( 0 / 1 ) : ");
        } else {
          console.log("Không tồn tại id");
        }
      }
      break;
    case 5:
      dltID = +prompt("Nhập id sách bạn muốn xóa: ");
      for (let i = 0; i <= book.length; i++) {
        if (book[i].id === dltID) {
          book.splice(i, 1);
        } else {
          console.log("Không tồn tại id");
        }``
      }
      break;
    case 6:
      book.sort((a, b) => a.price - b.price);
  }
}