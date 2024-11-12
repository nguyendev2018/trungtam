import {
    displayContentEXP
} from "./displayContent.js";
import { FnCKEditor, FnDate, FnForeign } from "./FnHandle.js";
export function editEXP(blockId, blockEXP, arrayEXP, selectedAbility) {
    const editButton = blockEXP.querySelector(
        `li[data-id="${blockId}"] .bi-pencil-square`
    );
    editButton.addEventListener("click", () => {
        const blockToEdit = arrayEXP.find((item) => item.blockId == blockId);
        const editFormHTML = `
        <div class="form-group formEXP form-edit" data-id="${blockId}" style="width:100%">
            <label for="">Sửa kinh nghiệm</label>
            <div class="form-group form-company">
                <label for="company">Công Ty</label>
                    <input
                        type="text"
                        name="company"
                        placeholder="Mời bạn nhập tên công ty"
                        value = "${blockToEdit.TenCongTy}"                    />
            </div>
            <div class="form-group form-jobTitle">
                <label for="company">Chức danh</label>
                <input
                type="text"
                name="jobTitle"
                placeholder="Mời bạn nhập chức danh"
                value = "${blockToEdit.ChucVu}"
                />
            </div>
            <div class="group-two">
                <div class="form-group form-jobTitle">
                    <label for="company">Từ tháng</label>
                    <input type="text" name="datepickerFirst" class="datepickerFirst" value="${blockToEdit.TuThang}" />
                </div>
                <div class="form-group form-jobTitle">
                    <label for="company">Tới tháng</label>
                    <input type="text" name="datepickerLast" class="datepickerLast" value="${blockToEdit.DenThang}" />
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
                <label>
                    <input type="checkbox" class="checkForeign" value="first_checkbox"> Đã làm việc tại nước ngoài?
                </label>
                <input type="text" name="foreign" class="input-foreign form-control d-none" placeholder="Bạn đã làm ở nước nào?" value=${blockToEdit.DaLamViecNuocNgoai} />
            </div>
            <div class="control-button">
                <button class="btn btn-warning btn-save-edit">Lưu</button>
                <button class="btn btn-danger btn-cancel-edit">Hủy</button>
            </div>
        </div>
        `;

        const blockElement = blockEXP.querySelector(`li[data-id="${blockId}"]`);

        blockElement.innerHTML = editFormHTML;
        FnCKEditor(blockId);
        FnDate();
        FnForeign(blockId);
        // Bắt sự kiện lưu chỉnh sửa
        // const saveEditButton = blockElement.querySelector(".btn-save-edit");
        // saveEditButton.addEventListener("click", () => {
        //     const newSelectElement = blockElement.querySelector(
        //         'select[name="editSelectIT"]'
        //     );
        //     const newSelectedText =
        //         newSelectElement.options[newSelectElement.selectedIndex].textContent;

        //     // Cập nhật mảng
        //     blockToEdit.TrinhDoTH_ID = newSelectedText;
        //     blockToEdit.KhaNangSuDung = selectedAbility;
        //     // Cập nhật hiển thị
        //     displayContentIT(blockId, blockIT, arrayIT, selectedAbility);
        // });
        // // Bắt sự kiện hủy chỉnh sửa
        // const cancelEditButton = blockElement.querySelector(".btn-cancel-edit");
        // cancelEditButton.addEventListener("click", () => {
        //     // Cập nhật hiển thị lại thông tin ban đầu (trước khi chỉnh sửa)
        //     displayContentIT(blockId, blockIT, arrayIT, selectedAbility);
        // });
    });
}