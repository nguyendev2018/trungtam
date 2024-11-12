import {displayContentLevel} from "./displayContent.js"
import {addModalDelete,removeModalDelete} from '../modalDelete.js'
export function deleteLevel(blockId, blockLevel, arrayLevel, selectedAbility) {
   
    const deleteButton = blockLevel.querySelector(
      `li[data-id="${blockId}"] .bi-trash3-fill`
  );
  console.log(`blockLevel`, blockLevel);
  deleteButton.addEventListener("click", () => {
      addModalDelete(); // Hiển thị modal xác nhận xóa
      blockLevel
          .querySelector(".handle-remove")
          .addEventListener("click", function (e) {
              e.preventDefault();
              // Cập nhật arrayLang bằng cách lọc bỏ mục bị xóa
              const updatedArrayLevel = arrayLevel.filter((item) => item.blockId != blockId);

              // Cập nhật biến toàn cục arrayLevel
              arrayLevel.length = 0; // Xóa toàn bộ phần tử cũ
              arrayLevel.push(...updatedArrayLevel); // Thêm phần tử mới

              // Cập nhật giao diện để phản ánh sự thay đổi
              displayContentLevel(blockId, blockLevel, arrayLevel, selectedAbility);
              removeModalDelete(); // Đóng modal xác nhận
          });

      blockLevel.querySelectorAll(".handle-back").forEach((element) => {
          element.addEventListener("click", function (e) {
              e.preventDefault();
              removeModalDelete(); // Đóng modal nếu người dùng nhấn "Trở lại"
          });
      });
  });
}