import  {addLevel} from './addLevel.js';
// import { removeForm } from './removeForm.js';
export function displayForm(blockLevel, idLevel, arrayLevel, selectedAbility,blockId) {
  const content = `
      <div class="form-group form-level form-add--content" style="width: 100%;" data-id="${idLevel}">
        <label for="">Thêm trình độ</label>
        <select class="form-control select2" name="selectLevel" size="1" data-placeholder="Chọn trình độ đào tạo của bạn" style="width: 100%;">
          <option value="1">Chưa qua đào tạo</option>
          <option value="2">Sơ cấp, không bằng</option>
          <option value="3">Sơ cấp</option>
          <option value="4">Trung cấp</option>
          <option value="5">Cao đẳng</option>
          <option value="6">Đại học</option>
        </select>
        <div class="form-group form-specialized">
          <label for="specialized">Chuyên ngành</label>
          <input type="text" name="specialized" placeholder="Mời bạn nhập chuyên ngành">
        </div>
        <div class="control-button">
          <button class="btn btn-warning btn-save">Lưu</button>
          <button class="btn btn-danger btn-cancel">Hủy</button>
        </div>
      </div>
    `; 
    blockLevel.insertAdjacentHTML("beforeend", content);
    console.log(`blockLevel`, blockLevel);
    addLevel(blockLevel,idLevel,arrayLevel,selectedAbility,blockId);
    // removeForm(idLevel)
  }