import { displayContentIT } from "./displayContent.js";

export function addIT(blockIT, idIT, arrayIT, selectedAbility, blockId) {
  const saveButton = blockIT.querySelector(`.formIT[data-id="${idIT}"] .btn-save`);

  const selectAbilityItems = document.querySelectorAll(".selectGroup-item");
  selectAbilityItems.forEach((element) => {
    element.addEventListener("click", function (e) {
      e.preventDefault();
      selectAbilityItems.forEach((item) => item.classList.remove("active"));
      element.classList.add("active");
      selectedAbility = element.textContent.trim().replace(/"/g, "");
    });
  });

  saveButton.addEventListener("click", (event) => {
    event.preventDefault();
    const formGroup = blockIT.querySelector(`.formIT[data-id="${idIT}"]`);
    console.log(`formGroup`, formGroup);
    const blockDataId = formGroup.getAttribute("data-id");
    const selectElement = formGroup.querySelector('select[name="selectIT"]');
    const selectText = selectElement.options[selectElement.selectedIndex].textContent;
    // Thêm dữ liệu vào mảng arrayIT
    arrayIT.push({
      blockId: blockDataId,
      TrinhDoTH_ID: selectText,
      KhaNangSuDung: selectedAbility,   
    });

    // Ẩn form sau khi lưu
    formGroup.remove()

    // Cập nhật danh sách ngôn ngữ đã lưu
    displayContentIT(blockId, blockIT, arrayIT, selectedAbility);
  });
}
