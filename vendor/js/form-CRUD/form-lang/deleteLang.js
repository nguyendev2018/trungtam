import {displayContentLang} from "./displayContent.js"
import {addModalDelete,removeModalDelete} from '../modalDelete.js'
export function deleteLang(blockId, blockLang, arrayLang, selectedAbility) {
  const deleteButton = blockLang.querySelector(
      `li[data-id="${blockId}"] .bi-trash3-fill`
  );
  console.log(`deleteButton`, deleteButton);
const blockRemove = blockLang.querySelector('.handle-remove');
console.log(`blockRemove`, blockRemove); 
  deleteButton.addEventListener("click", () => {
    blockLang.querySelector(".popup-delete").classList.add("show");
    document.querySelector(".overlay-black").classList.add("active");
      blockLang
          .querySelector(".handle-remove")
          .addEventListener("click", function (e) {
            console.log('remove' );
              e.preventDefault();
              // Cập nhật arrayLang bằng cách lọc bỏ mục bị xóa
              const updatedArrayLang = arrayLang.filter((item) => item.blockId != blockId);

              // Cập nhật biến toàn cục arrayLang
              arrayLang.length = 0; // Xóa toàn bộ phần tử cũ
              arrayLang.push(...updatedArrayLang); // Thêm phần tử mới

              // Cập nhật giao diện để phản ánh sự thay đổi
              displayContentLang(blockId, blockLang, arrayLang, selectedAbility);
              blockLang.querySelector(".popup-delete").classList.remove("show");
              document.querySelector(".overlay-black").classList.remove("active");          });

      blockLang.querySelectorAll(".handle-back").forEach((element) => {
          element.addEventListener("click", function (e) {
              e.preventDefault();
              blockLang.querySelector(".popup-delete").classList.remove("show");
              document.querySelector(".overlay-black").classList.remove("active");  // Đóng modal nếu người dùng nhấn "Trở lại"
          });
      });
  });
}