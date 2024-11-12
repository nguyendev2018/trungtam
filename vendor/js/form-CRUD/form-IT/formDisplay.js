import  {addIT} from './addIT.js';
// import { removeForm } from './removeForm.js';
export function displayForm(blockIT, idIT, arrayIT, selectedAbility,blockId) {
    const content = `
      <div class="form-group formIT form-add--content" data-id="${idIT}">
                    <label for="">Thêm Tin Học</label>
                    <select class="form-control select2" name="selectIT" size="1" data-placeholder="Chọn trình độ đào tạo của bạn" style="width: 100%;">
                      <option value="1">Tin căn bản</option>
                      <option value="2">Tin văn phòng</option>
                      <option value="3">Tin Học A</option>
                      <option value="4">Tin Học B</option>
                      <option value="4">Tin Học C</option>
                      <option value="5">Kỹ thuật viên tin học</option>
                    </select>
                    <div class="form-group">
                      <label for="">Khả năng sử dụng</label>
                    <div class="selectGroup">
                      <div class="selectGroup-item">
                        <input type="radio" name="ability" value="1" class="selectGroup-input">
                        <span class="selectGroup-button">Tốt</span>
                      </div>
                      <div class="selectGroup-item">
                        <input type="radio" name="ability" value="2" class="selectGroup-input">
                        <span class="selectGroup-button">Khá</span>
                      </div>
                      <div class="selectGroup-item">
                        <input type="radio" name="ability" value="3" class="selectGroup-input">
                        <span class="selectGroup-button">Trung Bình</span>
                      </div>
                    </div>
                    </div>
                    <div class="control-button">
                      <button class="btn btn-warning btn-save">Lưu</button>
                      <button class="btn btn-danger btn-cancel">Hủy</button>
                    </div>
                  </div>
    `; 
    blockIT.insertAdjacentHTML("beforeend", content);
    addIT(blockIT,idIT,arrayIT,selectedAbility,blockId);
    // removeForm(idIT)
  }