import { displayContentLang } from "./displayContent.js";

export function addLang(blockLang, idLang, arrayLang, selectedAbility, blockId) {
  const saveButton = blockLang.querySelector(`.form-lang[data-id="${idLang}"] .btn-save`);

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
    const formGroup = blockLang.querySelector(`.form-lang[data-id="${idLang}"]`);

    const blockDataId = formGroup.getAttribute("data-id");
    const selectElement = formGroup.querySelector('select[name="selectLang"]');
    const selectText = selectElement.options[selectElement.selectedIndex].textContent;
    const valueInput = formGroup.querySelector('input[name="certificate"]').value;

    // Thêm dữ liệu vào mảng arrayLang
    arrayLang.push({
      blockId: blockDataId,
      TrinhDoNN_ID: selectText,
      ChungChi: valueInput,
      KhaNangSuDung: selectedAbility,
    });

    // Ẩn form sau khi lưu
    formGroup.remove()

    // Cập nhật danh sách ngôn ngữ đã lưu
    displayContentLang(blockId, blockLang, arrayLang, selectedAbility);
  });
}
