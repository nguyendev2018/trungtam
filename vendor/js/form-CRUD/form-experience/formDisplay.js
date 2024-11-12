import { addEXP } from "./addEXP.js";
import { FnCKEditor, FnDate, FnForeign } from "./FnHandle.js";
// import { removeForm } from './removeForm.js';
export function displayForm(
  blockEXP,
  idEXP,
  arrayEXP,
  selectedAbility,
  blockId
) {
  const content = `
  <div class="form-group formEXP form-add--content" data-id="${idEXP}">
    <label for="">Thêm Kinh Nghiệm</label>
    <div class="form-group form-company">
      <label for="company">Công Ty</label>
      <input
        type="text"
        name="company"
        placeholder="Mời bạn nhập tên công ty"
      />
    </div>
    <div class="form-group form-jobTitle">
      <label for="company">Chức danh</label>
      <input
        type="text"
        name="jobTitle"
        placeholder="Mời bạn nhập chức danh"
      />
    </div>
    <div class="group-two">
      <div class="form-group form-jobTitle">
        <label for="company">Từ tháng</label>
        <input type="text" name="datepickerFirst" class="datepickerFirst" />
      </div>
      <div class="form-group form-jobTitle">
        <label for="company">Tới tháng</label>
        <input type="text" name="datepickerLast" class="datepickerLast" />
      </div>
    </div>
    <div class="form-group">
      <label for="company">Mô tả công việc</label>
      <div class="form-editor">
      <textarea name="desc" id="" class="editor">
      </textarea>
      </div>
    </div>
     <div class="form-group">
      <label><input type="checkbox" class="checkForeign" value="first_checkbox"> Đã làm việc tại nước ngoài?</label>
        <input type="text" name="foreign" class="input-foreign form-control d-none" placeholder="Bạn đã làm ở nước nào?" />
    <div class="control-button">
      <button class="btn btn-warning btn-save">Lưu</button>
      <button class="btn btn-danger btn-cancel">Hủy</button>
    </div>
  </div>
`;

  blockEXP.insertAdjacentHTML("beforeend", content);
  FnDate();
  FnCKEditor(idEXP);
  FnForeign(idEXP);
  addEXP(blockEXP, idEXP, arrayEXP, selectedAbility, blockId);
}
