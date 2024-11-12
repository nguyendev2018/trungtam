import {displayContentIT} from "./displayContent.js"
export function deleteIT(blockId, blockIT, arrayIT, selectedAbility) {
  const deleteButton = blockIT.querySelector(
      `li[data-id="${blockId}"] .bi-trash3-fill`
  );

  deleteButton.addEventListener("click", () => {
    blockIT.querySelector(".popup-delete").classList.add("show");
    document.querySelector(".overlay-black").classList.add("active");
      blockIT
          .querySelector(".handle-remove")
          .addEventListener("click", function (e) {
            console.log('remove' );
              e.preventDefault();
              // Cập nhật arrayIT bằng cách lọc bỏ mục bị xóa
              const updatedArrayIT = arrayIT.filter((item) => item.blockId != blockId);

              // Cập nhật biến toàn cục arrayIT
              arrayIT.length = 0; // Xóa toàn bộ phần tử cũ
              arrayIT.push(...updatedArrayIT); // Thêm phần tử mới

              // Cập nhật giao diện để phản ánh sự thay đổi
              displayContentIT(blockId, blockIT, arrayIT, selectedAbility);
              blockIT.querySelector(".popup-delete").classList.remove("show");
              document.querySelector(".overlay-black").classList.remove("active");          });

      blockIT.querySelectorAll(".handle-back").forEach((element) => {
          element.addEventListener("click", function (e) {
              e.preventDefault();
              blockIT.querySelector(".popup-delete").classList.remove("show");
              document.querySelector(".overlay-black").classList.remove("active");  // Đóng modal nếu người dùng nhấn "Trở lại"
          });
      });
  });
}