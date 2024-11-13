import { displayContentEXP } from "./displayContent.js";
import { addModalDelete, removeModalDelete } from "../modalDelete.js";
export function deleteEXP(blockId, blockEXP, arrayEXP, selectedAbility) {
  const deleteButton = blockEXP.querySelector(
    `li[data-id="${blockId}"] .bi-trash3-fill`
  );
  deleteButton.addEventListener("click", () => {
    addModalDelete(blockEXP);
    blockEXP
      .querySelector(".handle-remove")
      .addEventListener("click", function (event) {
        event.preventDefault();

        // Cập nhật arrayLang bằng cách lọc bỏ mục bị xóa
        const updatedArrayEXP = arrayEXP.filter(
          (item) => item.blockId != blockId
        );

        // Cập nhật biến toàn cục arrayEXP
        arrayEXP.length = 0; // Xóa toàn bộ phần tử cũ
        arrayEXP.push(...updatedArrayEXP); // Thêm phần tử mới

        // Cập nhật giao diện để phản ánh sự thay đổi
        displayContentEXP(blockId, blockEXP, arrayEXP, selectedAbility);
        removeModalDelete(blockEXP); // Đóng modal xác nhận
      });

    blockEXP.querySelectorAll(".handle-back").forEach((element) => {
      element.addEventListener("click", function (e) {
        e.preventDefault();
        removeModalDelete(blockEXP);
      });
    });
  });
}
