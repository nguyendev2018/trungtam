import  {addLang} from './addLang.js';
import { removeForm } from './removeForm.js';
export function displayForm(blockLang, idLang, arrayLang, selectedAbility,blockId) {
    const content = `
      <div class="form-group form-lang form-add--content" data-id="${idLang}">
                    <label for="">Thêm ngoại ngữ</label>
                    <select class="form-control select2" name="selectLang" size="1" data-placeholder="Chọn trình độ đào tạo của bạn" style="width: 100%;">
                      <option value="1">Tiếng Đức</option>
                      <option value="2">Tiếng Anh</option>
                      <option value="3">Tiếng Nga</option>
                      <option value="4">Tiếng Hàn</option>
                      <option value="4">Tiếng Nhật</option>
                      <option value="5">Tiếng Trung</option>
                    </select>
                    <div class="form-group form-specialized">
                      <label for="certificate">Nhập chứng chỉ</label>
                      <input type="text" name="certificate" placeholder="Mời bạn nhập chứng chỉ">
                    </div>
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
    blockLang.insertAdjacentHTML("beforeend", content);
    addLang(blockLang,idLang,arrayLang,selectedAbility,blockId);
    removeForm(idLang)
  }