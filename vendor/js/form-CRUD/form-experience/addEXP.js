import { displayContentEXP } from "./displayContent.js";
export function addEXP(blockEXP, idEXP, arrayEXP, selectedAbility, blockId) {
  const saveButton = document.querySelector(
    `.formEXP[data-id="${idEXP}"] .btn-save`
  );
  const formGroup = document.querySelector(`.formEXP[data-id="${idEXP}"]`);
  const blockDataId = formGroup.getAttribute("data-id"); // Lấy ID của block
  saveButton.addEventListener("click", (event) => {
    const valueCompany = formGroup.querySelector('input[name="company"]').value;
    const valueJobTitle = formGroup.querySelector(
      'input[name="jobTitle"]'
    ).value;
    const valueDateFirst = formGroup.querySelector(
      'input[name="datepickerFirst"]'
    ).value;
    const valueDateLast = formGroup.querySelector(
      'input[name="datepickerLast"]'
    ).value;
    const valueDesc = formGroup.querySelector(
      ".ck.ck-content.ck-editor__editable"
    ).innerHTML;
    const valueForeign = formGroup.querySelector('input[name="foreign"]').value;
    // Calculate yearOrMonth
    const yearOrMonth = calcDate(valueDateFirst, valueDateLast);

    event.preventDefault();
    arrayEXP.push({
      blockId: blockDataId,
      TenCongTy: valueCompany,
      ChucVu: valueJobTitle,
      TuThang: valueDateFirst,
      DenThang: valueDateLast,
      CongViecChinh: valueDesc,
      DaLamViecNuocNgoai: valueForeign,
      TongThang: yearOrMonth
    });
    formGroup.remove();
    displayContentEXP(blockId, blockEXP, arrayEXP, selectedAbility);
  });
}

function calcDate(dateFirst, dateLast) {
  let [monthFirst, yearFirst] = dateFirst.split("/").map(Number);
  let [monthLast, yearLast] = dateLast.split("/").map(Number);
  // Tính tổng số tháng
  let totalMonths = (yearLast - yearFirst) * 12 + (monthLast - monthFirst);
  return totalMonths >= 12
    ? `${Math.floor(totalMonths / 12)} năm`
    : `${totalMonths} thg`;
}
