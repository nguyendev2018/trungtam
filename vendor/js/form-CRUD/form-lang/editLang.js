import { displayContentLang } from "./displayContent.js";
export function editLang(blockId, blockLang, arrayLang, selectedAbility) {
  const editButton = blockLang.querySelector(
    `li[data-id="${blockId}"] .bi-pencil-square`
  );
  console.log(`blockId`, blockId);
  editButton.addEventListener("click", () => {
 
    const blockToEdit = arrayLang.find((item) => item.blockId == blockId);

    const editFormHTML = `
          <div class="form-group form-edit" style="width:100%" data-id="${blockId}">
            <label for="">Sửa trình độ ngoại ngữ</label>
            <select class="form-control select2" name="editSelectLang">
              <option value="1" ${
                blockToEdit.TrinhDoNN_ID === "Tiếng Đức" ? "selected" : ""
              }>Tiếng Đức</option>
              <option value="2" ${
                blockToEdit.TrinhDoNN_ID === "Tiếng Anh" ? "selected" : ""
              }>Tiếng Anh</option>
              <option value="3" ${
                blockToEdit.TrinhDoNN_ID === "Tiếng Nga" ? "selected" : ""
              }>Tiếng Nga</option>
              <option value="4" ${
                blockToEdit.TrinhDoNN_ID === "Tiếng Hàn" ? "selected" : ""
              }>Tiếng Hàn</option>
              <option value="5" ${
                blockToEdit.TrinhDoNN_ID === "Tiếng Nhật" ? "selected" : ""
              }>Tiếng Nhật</option>
              <option value="6" ${
                blockToEdit.TrinhDoNN_ID === "Tiếng Trung" ? "selected" : ""
              }>Tiếng Trung</option>
            </select>
              <label for="editCertificate">Chứng chỉ</label>
              <input type="text" name="editCertificate" value="${
                blockToEdit.ChungChi
              }" placeholder="Mời bạn nhập chứng chỉ">
                
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

  
    const blockElement = blockLang.querySelector(`li[data-id="${blockId}"]`);

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
        'select[name="editSelectLang"]'
      );
      const newSelectedText =
        newSelectElement.options[newSelectElement.selectedIndex].textContent;
      const newSpecialized = blockElement.querySelector(
        'input[name="editCertificate"]'
      ).value;
      // Cập nhật mảng
      blockToEdit.TrinhDoNN_ID = newSelectedText;
      blockToEdit.ChungChi = newSpecialized;
      blockToEdit.KhaNangSuDung = selectedAbility;
      // Cập nhật hiển thị
      displayContentLang(blockId, blockLang, arrayLang, selectedAbility);
    });
     // Bắt sự kiện hủy chỉnh sửa
     const cancelEditButton = blockElement.querySelector(".btn-cancel-edit");
     cancelEditButton.addEventListener("click", () => {
       // Cập nhật hiển thị lại thông tin ban đầu (trước khi chỉnh sửa)
       displayContentLang(blockId, blockLang, arrayLang, selectedAbility);
      });
  });
}
