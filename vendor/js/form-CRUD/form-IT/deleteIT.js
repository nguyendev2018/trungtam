import { addModalDelete, removeModalDelete } from "../modalDelete.js";
import { displayContentIT } from "./displayContent.js";
export function deleteIT(blockId, blockIT, arrayIT, selectedAbility) {
  const deleteButton = blockIT.querySelector(
    `li[data-id="${blockId}"] .bi-trash3-fill`
  );

  deleteButton.addEventListener("click", () => {
    addModalDelete(blockIT);
    blockIT
      .querySelector(".handle-remove")
      .addEventListener("click", function (e) {
        e.preventDefault();
        // Cập nhật arrayIT bằng cách lọc bỏ mục bị xóa
        const updatedArrayIT = arrayIT.filter(
          (item) => item.blockId != blockId
        );

        // Cập nhật biến toàn cục arrayIT
        arrayIT.length = 0; // Xóa toàn bộ phần tử cũ
        arrayIT.push(...updatedArrayIT); // Thêm phần tử mới

        // Cập nhật giao diện để phản ánh sự thay đổi
        displayContentIT(blockId, blockIT, arrayIT, selectedAbility);
        removeModalDelete(blockIT);
      });

    blockIT.querySelectorAll(".handle-back").forEach((element) => {
      element.addEventListener("click", function (e) {
        e.preventDefault();
        removeModalDelete(blockIT);
      });
    });
  });
}
