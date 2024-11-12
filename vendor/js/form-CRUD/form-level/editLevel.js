import { displayContentLevel } from "./displayContent.js";
export function editLevel(blockId, blockLevel, arrayLevel, selectedAbility) {
  const editButton = document.querySelector(
    `li[data-id="${blockId}"] .bi-pencil-square`
  );

  editButton.addEventListener("click", () => {
    const blockToEdit = arrayLevel.find((item) => item.blockId == blockId);

    const editFormHTML = `
        <div class="form-group form-edit" style="width:100%" data-id="${blockId}">
          <label for="">Sửa trình độ</label>
          <select class="form-control select2" name="editSelectLevel" style="width: 100%;">
            <option value="1" ${
              blockToEdit.TrinhDoCMKT_ID === "Chưa qua đào tạo"
                ? "selected"
                : ""
            }>Chưa qua đào tạo</option>
            <option value="2" ${
              blockToEdit.TrinhDoCMKT_ID === "Sơ cấp, không bằng"
                ? "selected"
                : ""
            }>Sơ cấp, không bằng</option>
            <option value="3" ${
              blockToEdit.TrinhDoCMKT_ID === "Sơ cấp" ? "selected" : ""
            }>Sơ cấp</option>
            <option value="4" ${
              blockToEdit.TrinhDoCMKT_ID === "Trung cấp" ? "selected" : ""
            }>Trung cấp</option>
            <option value="5" ${
              blockToEdit.TrinhDoCMKT_ID === "Cao đẳng" ? "selected" : ""
            }>Cao đẳng</option>
            <option value="6" ${
              blockToEdit.TrinhDoCMKT_ID === "Đại học" ? "selected" : ""
            }>Đại học</option>
          </select>
          <div class="form-group form-specialized" style="${
            blockToEdit.TrinhDoCMKT_ID === "Chưa qua đào tạo"
              ? "display: none;"
              : ""
          }">
            <label for="editSpecialized">Chuyên ngành</label>
            <input type="text" name="editSpecialized" value="${
              blockToEdit.ChuyenNganh
            }" placeholder="Mời bạn nhập chuyên ngành">
          </div>
          <div class="control-button">
            <button class="btn btn-warning btn-save-edit">Lưu</button>
            <button class="btn btn-danger btn-cancel-edit">Hủy</button>
          </div>
        </div>
      `;

    const blockElement = document.querySelector(`li[data-id="${blockId}"]`);

    blockElement.innerHTML = editFormHTML;
    // Bắt sự kiện cho phần tử select
    const selectLevel = blockElement.querySelector(
      'select[name="editSelectLevel"]'
    );
    const specializedDiv = blockElement.querySelector(".form-specialized");

    const toggleSpecializedInput = () => {
      if (selectLevel.value === "1") {
        specializedDiv.style.display = "none"; // Ẩn nếu chọn "Chưa qua đào tạo"
      } else {
        specializedDiv.style.display = ""; // Hiện nếu không chọn "Chưa qua đào tạo"
      }
    };

    // Gọi hàm để kiểm tra giá trị ban đầu
    toggleSpecializedInput();
    selectLevel.addEventListener("change", toggleSpecializedInput);
    const saveEditButton = blockElement.querySelector(".btn-save-edit");
    saveEditButton.addEventListener("click", () => {
      const newSelectElement = blockElement.querySelector(
        'select[name="editSelectLevel"]'
      );
      const newSelectedText =
        newSelectElement.options[newSelectElement.selectedIndex].textContent;
      const newSpecialized = blockElement.querySelector(
        'input[name="editSpecialized"]'
      ).value;

      // Cập nhật mảng
      blockToEdit.TrinhDoCMKT_ID = newSelectedText;
      blockToEdit.ChuyenNganh = newSpecialized;

      // Cập nhật hiển thị
      displayContentLevel(blockId, blockLevel, arrayLevel, selectedAbility);
    });
    // Bắt sự kiện hủy chỉnh sửa
    const cancelEditButton = blockElement.querySelector(".btn-cancel-edit");
    cancelEditButton.addEventListener("click", () => {
      // Cập nhật hiển thị lại thông tin ban đầu (trước khi chỉnh sửa)
      displayContentLevel(blockId, blockLevel, arrayLevel, selectedAbility);
    });
  });
}
