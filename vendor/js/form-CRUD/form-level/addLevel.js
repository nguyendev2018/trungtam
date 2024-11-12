import { displayContentLevel } from "./displayContent.js";
export function addLevel(blockLevel, idLevel, arrayLevel, selectedAbility, blockId) {
  const saveButton = document.querySelector(
    `.form-level[data-id="${idLevel}"] .btn-save`
  );
  console.log(`blockLevel`,blockLevel );
  const formGroup = document.querySelector(`.form-level[data-id="${idLevel}"]`);
  console.log(`formGroup`, formGroup);
  const blockDataId = formGroup.getAttribute("data-id"); // Lấy ID của block
  const selectLevel = formGroup.querySelector('select[name="selectLevel"]');

  const specializedInput = formGroup.querySelector('input[name="specialized"]');
  const blockSpecialized = formGroup.querySelector(
    ".form-group.form-specialized"
  );
  function changeSelectValue() {
    if (selectLevel.value === "1") {
      blockSpecialized.style.display = "none"; // Ẩn nếu chọn "Chưa qua đào tạo"
    } else {
      blockSpecialized.style.display = ""; // Hiện nếu không chọn "Chưa qua đào tạo"
    }
  }
  const toggleSpecializedInput = () => {
    changeSelectValue();
  };
  selectLevel.addEventListener("change", toggleSpecializedInput);

  toggleSpecializedInput();
  //button-save
  saveButton.addEventListener("click", (event) => {
    const selectLevelValue =
      selectLevel.options[selectLevel.selectedIndex].textContent;
    const specializedValue = specializedInput.value;

    event.preventDefault();
    arrayLevel.push({
      blockId: blockDataId,
      TrinhDoCMKT_ID: selectLevelValue,
      ChuyenNganh: specializedValue,
    });
    formGroup.remove()
    displayContentLevel(blockId, blockLevel, arrayLevel, selectedAbility);
  });
}
