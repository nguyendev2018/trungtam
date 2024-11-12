import { displayContentIT } from "./displayContent.js";
export function editIT(blockId, blockIT, arrayIT, selectedAbility) {
  const editButton = blockIT.querySelector(
    `li[data-id="${blockId}"] .bi-pencil-square`
  );
  editButton.addEventListener("click", () => {
    const blockToEdit = arrayIT.find((item) => item.blockId == blockId);
    const editFormHTML = `
          <div class="form-group form-edit" data-id="${blockId}" style="width:100%">
            <label for="">Sửa trình độ tin học</label>
            <select class="form-control select2" name="editSelectIT">
              <option value="1" ${
                blockToEdit.TrinhDoTH_ID === "Tin căn bản" ? "selected" : ""
              }>Tiếng Đức</option>
              <option value="2" ${
                blockToEdit.TrinhDoTH_ID === "Tin văn phòng" ? "selected" : ""
              }>Tiếng Anh</option>
              <option value="3" ${
                blockToEdit.TrinhDoTH_ID === "Tin học A" ? "selected" : ""
              }>Tiếng Nga</option>
              <option value="4" ${
                blockToEdit.TrinhDoTH_ID === "Tin học B" ? "selected" : ""
              }>Tiếng Hàn</option>
              <option value="5" ${
                blockToEdit.TrinhDoTH_ID === "Tin học C" ? "selected" : ""
              }>Tiếng Nhật</option>
              <option value="6" ${
                blockToEdit.TrinhDoTH_ID === "Kỹ thuật viên tin học" ? "selected" : ""
              }>Tiếng Trung</option>
            </select>
           
                <label for="">Khả năng sử dụng</label>
                      <div class="selectGroup">
                        <div class="selectGroup-item ${
                          blockToEdit.KhaNangSuDung == "Tốt" ? "active" : ""
                        } ">
                          <span class="selectGroup-button ">Tốt</span>
                        </div>
                        <div class="selectGroup-item ${
                          blockToEdit.KhaNangSuDung == "Khá" ? "active" : ""
                        } ">
                          <span class="selectGroup-button ">Khá</span>
                        </div>
                        <div class="selectGroup-item ${
                          blockToEdit.KhaNangSuDung == "Trung Bình"
                            ? "active"
                            : ""
                        } ">
                          <span class="selectGroup-button ">Trung Bình</span>
                        </div>
                      </div>
            </div>
  
            <div class="control-button">
              <button class="btn btn-warning btn-save-edit">Lưu</button>
              <button class="btn btn-danger btn-cancel-edit">Hủy</button>
            </div>
          </div>
        `;

  
    const blockElement = blockIT.querySelector(`li[data-id="${blockId}"]`);

    blockElement.innerHTML = editFormHTML;
    const abilityItems = blockElement.querySelectorAll(".selectGroup-item");

    abilityItems.forEach((item) => {
      item.addEventListener("click", function () {
        abilityItems.forEach((el) => el.classList.remove("active"));

        item.classList.add("active");

       selectedAbility = item.textContent.trim();
      });
    });

    // Bắt sự kiện lưu chỉnh sửa
    const saveEditButton = blockElement.querySelector(".btn-save-edit");
    saveEditButton.addEventListener("click", () => {
      const newSelectElement = blockElement.querySelector(
        'select[name="editSelectIT"]'
      );
      const newSelectedText =
        newSelectElement.options[newSelectElement.selectedIndex].textContent;

      // Cập nhật mảng
      blockToEdit.TrinhDoTH_ID = newSelectedText;
      blockToEdit.KhaNangSuDung = selectedAbility;
      // Cập nhật hiển thị
      displayContentIT(blockId, blockIT, arrayIT, selectedAbility);
    });
     // Bắt sự kiện hủy chỉnh sửa
     const cancelEditButton = blockElement.querySelector(".btn-cancel-edit");
     cancelEditButton.addEventListener("click", () => {
       // Cập nhật hiển thị lại thông tin ban đầu (trước khi chỉnh sửa)
       displayContentIT(blockId, blockIT, arrayIT, selectedAbility);
      });
  });
}
